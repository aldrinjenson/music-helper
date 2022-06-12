import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NoteViewer from "./components/NoteViewer";
import Tuner from "./components/Tuner";

const App = () => {
  const [notesList, setNotesList] = useState([]);
  const [shouldRecord, setShouldRecord] = useState(false);

  return (
    <div className='App'>
      <Navbar />
      <div className='flex  items-center justify-center flex-wrap'>
        <div className='flex-1 mx-10'>
          <Tuner setNotesList={setNotesList} shouldRecord={shouldRecord} />
        </div>
        <div className='flex-3'>
          <NoteViewer
            notesList={notesList}
            shouldRecord={shouldRecord}
            setNotesList={setNotesList}
            setShouldRecord={setShouldRecord}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
