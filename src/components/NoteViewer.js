const NoteViewer = ({ notes }) => {
  return (
    <div style={{ width: "70vw" }} className='border mr-10'>
      <h2 className='font-bold text-2xl'>NoteViewer</h2>

      <div className='border'>
        <button className='btn border bg-gray-400 p-3 m-2'>
          Start Recording
        </button>
        <button className='btn border bg-gray-400 p-3 m-2'>Clear</button>
        {/* <button className='btn'>clear</button> */}
      </div>

      <div className='border flex flex-wrap'>
        {notes.map((n, index) => (
          <div key={index} className='p-3 m-3'>
            <b>{n}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteViewer;
