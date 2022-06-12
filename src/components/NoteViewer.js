import { Scale } from "@tonaljs/tonal";

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
    console.log(numOccurances);
    const entries = Object.entries(numOccurances);
    console.log(entries);
    const sorted = entries.sort(([key1, val1], [key2, val2]) => val2 > val1);
    console.log(sorted);
    // console.log(Scale.scaleNotes(notesList));
  }
  return (
    <div style={{ width: "70vw" }} className='border mr-10'>
      <h2 className='font-bold text-2xl'>NoteViewer</h2>

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
        {/* <button className='btn'>clear</button> */}
      </div>

      <div className='border flex flex-wrap'>
        {notesList.map((n, index) => (
          <div key={index} className='p-3 m-3'>
            <b>{n}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteViewer;
