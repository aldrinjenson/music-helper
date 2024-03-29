const scales = {
  majorScale: {
    "A ": ["A", "B", "C#", "D", "E", "F#", "G#"],
    "A#": ["A#", "B#", "C##", "D#", "E#", "F##", "G##"],
    "B ": ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    "C ": ["C", "D", "E", "F", "G", "A", "B"],
    "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    "D ": ["D", "E", "F#", "G", "A", "B", "C#"],
    "D#": ["D#", "E#", "F##", "G#", "A#", "B#", "C##"],
    "E ": ["E", "F#", "G#", "A", "B", "C#", "D#"],
    "F ": ["F", "G", "A", "B♭", "C", "D", "E"],
    "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    "G ": ["G", "A", "B", "C", "D", "E", "F#"],
    "G#": ["G#", "A#", "B#", "C#", "D#", "E#", "F##"],
  },
  minorScale: {
    A: ["A", "B", "C", "D", "E", "F", "G"],
    "A#": ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
    B: ["B", "C#", "D", "E", "F#", "G", "A"],
    C: ["C", "D", "E♭", "F", "G", "A♭", "B♭"],
    "C#": ["C#", "D#", "E", "F#", "G#", "A", "B"],
    D: ["D", "E", "F", "G", "A", "B♭", "C"],
    "D#": ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
    E: ["E", "F#", "G", "A", "B", "C", "D"],
    F: ["F", "G", "A♭", "B♭", "C", "D♭", "E♭"],
    "F#": ["F#", "G#", "A", "B", "C#", "D", "E"],
    G: ["G", "A", "B♭", "C", "D", "E♭", "F"],
    "G#": ["G#", "A#", "B", "C#", "D#", "E", "F#"],
  },
};

export default scales;
