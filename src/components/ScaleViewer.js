import React from "react";

const ScaleViewer = ({ scale, matchedNotes }) => {
  const uniqueMatchedNotes = [...new Set(matchedNotes)];
  return (
    <div>
      <div className='flex flex-wrap text-center'>
        {Object.entries(scale).map(([key, notes]) => (
          <div key={key} className='border m-3 p-5 w-80'>
            <h3 className='text-2xl'>{key}</h3>
            <hr />
            {notes.map((n, index) => {
              const isSelected = uniqueMatchedNotes.includes(n);
              return (
                <span
                  key={index}
                  className={`p-1 m-1 ${isSelected ? "bg-green-400 " : ""}`}
                >
                  {n}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScaleViewer;
