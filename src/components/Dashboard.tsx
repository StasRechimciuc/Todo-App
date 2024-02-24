import { useAppDispatch, useAppSelector } from "../store/store";
import { SingleNote } from "../features/types";
import NoteComponent from "./NoteComponent";

const Dashboard = (props: any) => {
  const { dark, nanoid, deleteNote, showAllNotes } = props;
  const allNotes = useAppSelector(state => state.notes.allNotes);
  const activeSection = useAppSelector(state => state.sections.activeSection);
  const dispatch = useAppDispatch();

  const colorsArr = ["#7FFFD4", "#00FF7F", "#6A5ACD", "#CD5B45", "#9370DB", "#008080", "#4682B4", "#4B0082", "#DC143C"];

  const renderNotes = (notes: SingleNote[]) => (
    notes.map((note: SingleNote) => (
      <NoteComponent
        key={nanoid()}
        dark={dark}
        background={colorsArr[activeSection?.id]}
        note={note}
        onDelete={() => dispatch(deleteNote(note))}
      />
    ))
  )

  const notesEl = showAllNotes ? (
    renderNotes(allNotes)
  ) : (
    renderNotes(allNotes.filter((note: SingleNote) => note.category === activeSection?.title))
  )

  return (
    <div className="notes">
      {notesEl.length > 0 ? (
        notesEl
      ) : (
        <h1>No Notes Here</h1>
      )}
    </div>
  )
}

export default Dashboard