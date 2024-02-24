import { useRef } from "react"
import { useAppDispatch, useAppSelector } from "../store/store";
import { SingleNote } from "../features/types";
import format from "date-fns/format";
import { addNote } from "../features/notesSlice";
const NoteForm = (props: any) => { 
const { setShowForm, dark } = props

    const dispatch = useAppDispatch()

    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);

    const activeSection = useAppSelector(state => state.sections.activeSection)
    const allNotes = useAppSelector(state => state.notes.allNotes)
    const sections = useAppSelector(state => state.sections.sections)
    
    const handleSubmit = (e:any) => {
        e.preventDefault()
        const titleInpValue = titleRef.current?.value
        const textInpValue = textRef.current?.value

        if (textInpValue && titleInpValue && sections.length >= 1) {
            const newNote: SingleNote = {
              text: textInpValue,
              title: titleInpValue,
              id: (allNotes && allNotes.length) || 0,
              category: activeSection.title || "",
              time: (format(new Date(), 'HH:mm:ss')),
              date: format(new Date(), 'dd MMMM yyyy'), 
            };
          
            dispatch(addNote(newNote));
            setShowForm(false);
          }
    }

    return (
    <form className={dark ? 'darkNote-form' : 'note-form'} onSubmit={handleSubmit}>
        <button
         type="button" 
         className="form-close"
         onClick={() => setShowForm(false)}
         >X</button>
        <h2>Enter the new Note</h2>
        <input type="text" 
        className="form-inp" 
        placeholder='Title'
        ref={titleRef}
        />
        <textarea 
        ref={textRef}
        className="form-inp" 
        placeholder='Text'/>
        <button className='form-btn'>Add the Task</button>
    </form>
  )
}

export default NoteForm