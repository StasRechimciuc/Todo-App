import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { updateSections, setActiveSection } from '../features/sectionsSlice';
import { setNotes } from '../features/notesSlice'

export const useLocalStorageSync = (
    loadedFromLocalStorage: boolean,
    setLoadedFromLocalStorage: (value: boolean) => void
) => {

  const dispatch = useAppDispatch();
  const sections = useAppSelector(state => state.sections.sections);
  const activeSection = useAppSelector(state => state.sections.activeSection);
  const allNotes = useAppSelector(state => state.notes.allNotes)
  useEffect(() => {
    const storedSectionsString = localStorage.getItem("sections")

    if (storedSectionsString && storedSectionsString !== null) {
      const storedSections = JSON.parse(storedSectionsString)
        dispatch(updateSections(storedSections))
      }
      setLoadedFromLocalStorage(true)
  }, [dispatch])
  
  // local storage sections
  useEffect(() => {
    if (loadedFromLocalStorage && sections.length > 0) {
      dispatch(setActiveSection(sections[activeSection?.id]));
    }
  }, [loadedFromLocalStorage, sections, dispatch])

// local storage active section
  useEffect(() => {
    const storedActive = localStorage.getItem('activeSection')

    if(storedActive) {
      const storedActiveSection = JSON.parse(storedActive)
      setActiveSection(storedActiveSection)
      dispatch(setActiveSection(storedActiveSection)) 
    }
  },[dispatch])

  useEffect(() => {
    localStorage.setItem('sections',JSON.stringify(sections))
  },[sections])

  useEffect(() => {
    const storedNotes = localStorage.getItem('allNotes')

    if(storedNotes) {
      const parsedNotes = JSON.parse(storedNotes)
      dispatch(setNotes(parsedNotes))
    }
  },[dispatch])

  useEffect(() => {
    localStorage.setItem('allNotes',JSON.stringify(allNotes))
  },[allNotes])

};
