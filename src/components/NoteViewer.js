import { Scale } from "@tonaljs/tonal";
import { useEffect, useRef } from "react";

const NoteViewer = ({
  notesList = [],
  setNotesList,
  shouldRecord,
  setShouldRecord,
}) => {
  if (!shouldRecord) {
    const numOccurances = {};
    for (const nt of notesList) {
      numOccurances[nt] = (numOccurances[nt] || 0) + 1;
    }
    const entries = Object.entries(numOccurances);
    const sorted = entries.sort(([key1, val1], [key2, val2]) => val2 > val1);
    sorted?.length && console.log(sorted);
    console.log(Scale.scaleNotes(notesList));
  }
  const scorllRef = useRef();

  useEffect(() => {
    scorllRef.current.scrollIntoView(false);
  }, [notesList.length]);

  return (
    <div className='border mr-10'>
      <h2 className='font-bold text-2xl m-3'>Note Viewer</h2>

      <div className='border'>
        <button
          className='btn border bg-gray-400 p-3 m-2'
          onClick={() => setShouldRecord((currState) => !currState)}
        >
          {shouldRecord ? "Stop recroding" : "Start Recording"}
        </button>
        <button
          className='btn border bg-gray-400 p-3 m-2'
          onClick={() => setNotesList([])}
        >
          Clear
        </button>
      </div>

      <div
        className='border flex flex-wrap'
        style={{ width: "70vw", maxHeight: "40vh", overflow: "auto" }}
      >
        {notesList.map((n, index) => (
          <div key={index} className='p-3 m-3'>
            <b>{n}</b>
          </div>
        ))}
        <div id='spacer' ref={scorllRef}></div>
      </div>
    </div>
  );
};

export default NoteViewer;
