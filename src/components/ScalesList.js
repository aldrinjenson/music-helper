import React from "react";
import scales from "../scales";
import ScaleViewer from "./ScaleViewer";

const { majorScale, minorScale } = scales;
const SclaleMatcher = ({ notesList }) => {
  return (
    <div className='m-4 p-4 border'>
      <h1 className='text-5xl'>Scale Matcher</h1>

      <br />
      <h2 className='text-3xl'>Major Scales</h2>
      <ScaleViewer scale={majorScale} matchedNotes={notesList} />
      <h2 className='text-3xl'>Minor Scales</h2>
      <ScaleViewer scale={minorScale} matchedNotes={notesList} />
    </div>
  );
};

export default SclaleMatcher;
