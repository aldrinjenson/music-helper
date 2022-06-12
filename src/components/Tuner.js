import React, { useEffect } from "react";
import * as Pitchfinder from "pitchfinder";

const sampleRate = 16000;

const audioOptions = {
  video: false,
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate,
  },
};

const mediaRecorderOptions = {
  // mimeType: "audio/webm",
  numberOfAudioChannels: 1,
  sampleRate,
};

const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function analyseAudioData({ sampleRate, audioData }) {
  const detectPitch = Pitchfinder.YIN({ sampleRate });

  const frequency = detectPitch(audioData);
  if (frequency === null) {
    console.log({ frequency });

    return null;
  }

  // Convert the frequency to a musical pitch.

  // c = 440.0(2^-4.75)
  const c0 = 440.0 * Math.pow(2.0, -4.75);
  // h = round(12log2(f / c))
  const halfStepsBelowMiddleC = Math.round(12.0 * Math.log2(frequency / c0));
  // o = floor(h / 12)
  const octave = Math.floor(halfStepsBelowMiddleC / 12.0);
  const key = keys[Math.floor(halfStepsBelowMiddleC % 12)];

  return { frequency, key, octave };
}

const getAudio = async () => {
  const chunks = [];
  let mediaRecorder;
  const audioContext = new AudioContext();
  const stream = await navigator.mediaDevices.getUserMedia(audioOptions);

  mediaRecorder = new MediaRecorder(stream, mediaRecorderOptions);

  mediaRecorder.ondataavailable = async (e) => {
    if (e.data.size) {
      try {
        const data = e.data;
        console.log(data);
        // Load the blob.
        const response = await fetch(URL.createObjectURL(data));
        const arrayBuffer = await response.arrayBuffer();

        // Decode the audio.
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const float32Array = audioBuffer.getChannelData(0);
        console.log(float32Array);

        const detectPitch = Pitchfinder.YIN();
        const pitch = detectPitch(float32Array);

        // const res = analyseAudioData({ sampleRate, audioData: float32Array });
        // console.log(res);

        console.log(pitch);
      } catch (error) {
        console.log("error: ", error);
        console.log(error);
      }
    }
  };

  mediaRecorder.start(2000);
};
const Tuner = () => {
  useEffect(() => {
    getAudio();
  }, []);

  // const temp = async () => {
  //   const stream = await navigator.mediaDevices.getUserMedia(audioOptions);
  //   console.log(stream);
  //   const recorder = new MediaRecorder(stream, {
  //     mimeType: "video/webm",
  //   });
  //   recorder.start()
  //   console.log(recorder.state);
  // };
  // temp();

  return (
    <div>
      <h2 className='text-center font-bold text-2xl'>Tuner</h2>
      <div
        className=''
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => getAudio()}>stop</button>
        <button onClick={() => getAudio()}>Start</button>
        <h2>
          E <sub>4</sub>
        </h2>
        <p>440Hz</p>
      </div>
    </div>
  );
};

export default Tuner;
