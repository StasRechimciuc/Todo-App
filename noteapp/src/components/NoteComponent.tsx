import { useAppDispatch } from "../store/store"
import { deleteNote } from "../features/notesSlice"
import { FaTrash } from "react-icons/fa"

const NoteComponent = (props:any) => {
    const dispatch = useAppDispatch()
    const { background, dark, note } = props
  return (
    <div
      className={dark ? 'notes-note' : 'darkNotes-note'}
      style={{background: background}}
      >
       <div className="note-up">
         <h3>{note.title}</h3>
         <h4>{note.category}</h4>
       </div>
       <p className='note-text'>{note.text}</p>
       <div className='note-bottom' style={{textAlign:'center'}}>
         <p>{note.time}</p>
         <p>{note.date}</p>
         <div className="noteButtons" style={{display:'flex',gap:'5px',width:'auto'}}>
         <button 
         className='trashIcon'
          style={{color:'red'}}
         onClick={() => {
           dispatch(deleteNote(note))
         }}
         >
           <FaTrash/>
         </button>
         </div>
       </div>
     </div>
  )
}

export default NoteComponent