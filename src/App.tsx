import './styles/App.css'
import { useState } from 'react'
import { useAppSelector } from './store/store'
import { setActiveSection } from './features/sectionsSlice'
import { deleteNote } from './features/notesSlice'
import { nanoid } from 'nanoid'
import NoteForm from './components/NoteForm';

import { useUpdateProps } from './hooks/useUpdateProps';
import { useLocalStorageSync } from './hooks/useLocalStorage';
import { useShowForm } from './hooks/useShowForm';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import Dashboard from './components/Dashboard';
import { useSectionHandlers } from './hooks/handlers/useHandlers'

function App() {
  const [dark,setDark] = useState<boolean>(true)
  const [showForm,setShowForm] = useState<boolean>(false)
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState(false)
  const [showAllNotes,setShowAllNotes] = useState<boolean>(false)
  const {
     handleAddNote,
     handleActiveSection,
     handleDeleteSection, 
     handleDarkMode,
     handleAddSection,
     handleEditSection,
  } = useSectionHandlers(setShowForm,setDark,dark)

  const sections = useAppSelector((state) => state.sections.sections)
  const activeSection = useAppSelector(state => state.sections.activeSection)
  const allNotes = useAppSelector(state => state.notes.allNotes)
useUpdateProps()
useLocalStorageSync(
  loadedFromLocalStorage,
  setLoadedFromLocalStorage,
)
useShowForm(
  showForm,
  setShowForm
)
return (
    <div className={dark ? 'App' : 'darkApp'}>
      {showForm ?
       <NoteForm 
       setShowForm={setShowForm}
       dark={dark}
       /> : ''} 
      <Navbar 
       dark={dark}
       setActiveSection={setActiveSection}
       handleAddSection={handleAddSection}
       handleDarkMode={handleDarkMode}
       allNotes={allNotes}
       handleAddNote={handleAddNote}
       setShowAllNotes={setShowAllNotes}
      />
      <main className="main">
      <Sections 
        sections={sections}
        activeSection={activeSection}
        handleActiveSection={handleActiveSection}
        handleDeleteSection={handleDeleteSection}
        setShowAllNotes={setShowAllNotes}
        handleAddSection={handleAddSection}
        handleEditSection={handleEditSection}
        nanoid={nanoid}
        dark={dark}
      />
      <Dashboard 
        dark={dark}
        nanoid={nanoid} 
        showAllNotes={showAllNotes}
        deleteNote={deleteNote}
      />
      </main>
    </div>
  )
}

export default App