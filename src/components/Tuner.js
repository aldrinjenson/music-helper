import React, { useEffect, useState } from "react";
import { Note } from "@tonaljs/tonal";
import { PitchDetector } from "pitchy";

const Tuner = ({ setNotesList, shouldRecord }) => {
  const [frequency, setFrequency] = useState(0);
  const [clarity, setClarity] = useState(0);
  const [note, setNote] = useState("");
  const [transposedNote, setTrasnposedNote] = useState("");

  const updatePitch = (analyserNode, detector, input, sampleRate) => {
    analyserNode.getFloatTimeDomainData(input);
    const [pitch, clarty] = detector.findPitch(input, sampleRate);

    const ptch = `${Math.round(pitch * 10) / 10} Hz`;
    const clartyString = `${Math.round(clarty * 100)} %`;
    let nt = Note.fromFreqSharps(pitch);

    const length = nt.length;
    const lastChar = nt[length - 1];
    if (+lastChar) {
      nt = nt.slice(0, length - 1);
    }

    const transposedNt = Note.transpose(nt, "1P");

    if (
      pitch > 80 &&
      pitch < 2000 &&
      clarty > 0.7 &&
      nt?.length &&
      // transposedNt?.length &&
      nt !== note
    ) {
      setFrequency(ptch);
      setClarity(clartyString);
      setNote(nt);
      setTrasnposedNote(transposedNt);
    }
    window.setTimeout(
      () => updatePitch(analyserNode, detector, input, sampleRate),
      300
    );
  };

  useEffect(() => {
    if (shouldRecord) {
      setNotesList((currList) => [...currList, note]);
    }
  }, [note, setNotesList, shouldRecord]);

  useEffect(() => {
    const audioContext = new window.AudioContext();
    const analyserNode = audioContext.createAnalyser();
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      audioContext.createMediaStreamSource(stream).connect(analyserNode);
      const detector = PitchDetector.forFloat32Array(analyserNode.fftSize);
      const input = new Float32Array(detector.inputLength);
      // updatePitch(analyserNode, detector, input, audioContext.sampleRate);
      updatePitch(analyserNode, detector, input, 48000);
    });
  }, []);

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
        <h1>
          {/* Note: */}
          <span className='text-8xl'>{note}</span>
        </h1>
        <h2>Transposed Note: {transposedNote}</h2>

        <p>Frequency: {frequency} </p>
        <p>Clarity: {clarity} </p>
      </div>
    </div>
  );
};

export default Tuner;
