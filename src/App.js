import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NoteViewer from "./components/NoteViewer";
import Tuner from "./components/Tuner";

let defaultNotes = ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E"];
defaultNotes = [
  ...defaultNotes,
  ...defaultNotes,
  ...defaultNotes,
  ...defaultNotes,
];

const App = () => {
  const [notes, setNotes] = useState(defaultNotes);

  return (
    <div className='App'>
      <Navbar />
      <div className='flex  items-center justify-center flex-wrap'>
        <div className='flex-1 mx-10'>
          <Tuner />
        </div>
        <div className='flex-3'>
          <NoteViewer notes={notes} />
        </div>
      </div>
    </div>
  );
};

export default App;
