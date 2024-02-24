import { useAppDispatch, useAppSelector } from '../../store/store'
import { deleteSection, setActiveSection,addSection, editSectionName } from '../../features/sectionsSlice'
import { SingleNote } from '../../features/types'
import { deleteNote, setNotes } from '../../features/notesSlice'

export const useSectionHandlers = (
  setShowForm:(value: boolean) => void,
  setDark: (value: boolean) => void,
  dark:boolean,
  ) => {
  const dispatch = useAppDispatch()
  const sections = useAppSelector(state => state.sections.sections)
  const allNotes = useAppSelector(state => state.notes.allNotes)

  const handleDeleteSection = (id: number) => {
    const sectionToDelete = sections.find((section) => section.id === id)

    if (sectionToDelete) {
      dispatch(deleteSection(sectionToDelete === sections[0] ? sections[0] : sectionToDelete))
      allNotes.forEach((note:SingleNote) => (
        note.category === sectionToDelete.title ? dispatch(deleteNote(note)) : note
      ))
    }
  }

  const handleActiveSection = (id: number) => {
    const sectionToFind = sections.find((section) => section.id === id)

    if (sectionToFind) {
      dispatch(setActiveSection(sectionToFind))
      localStorage.setItem('activeSection', JSON.stringify(sectionToFind))
    }
  }

  const handleAddSection = () => {
    const title = prompt('Enter New Section')
  
  if((title && title.trim()))  {
    const newSection = {
      title:title,
      id:sections.length,
      }
      dispatch(addSection(newSection))
      dispatch(setActiveSection(newSection))
    } else return
  }

  const handleAddNote = () => {
    setShowForm(true)
  }

  const handleDarkMode = () => {
    setDark(!dark)
  }
  
  const handleEditSection = (id: number) => {
    const sectionToFind = sections.find((s) => s.id === id);

    if (sectionToFind) {
      dispatch(setActiveSection(sectionToFind));

      setTimeout(() => {
        const newName = prompt('Enter new Title');
        if (newName) {
          const obj = { id, newName };
          dispatch(editSectionName(obj));
          const updatedNotes = allNotes.map((n) =>
            n.category === sectionToFind.title ? { ...n, category: newName } : n
          );

          dispatch(setNotes(updatedNotes));
        }
      }, 0);
    }
  }

  return {
    handleDeleteSection,
    handleActiveSection,
    handleAddNote,
    handleDarkMode,
    handleAddSection,
    handleEditSection,
  }
}
