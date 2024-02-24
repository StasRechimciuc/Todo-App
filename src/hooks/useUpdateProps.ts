import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { updateSections } from '../features/sectionsSlice';

export const useUpdateProps = () => {
  const dispatch = useAppDispatch();
  const sections = useAppSelector(state => state.sections.sections)

  useEffect(() => {
    const updatedSections = sections.map((section, index) => ({
      ...section,
      id: index,
    }))

    
    dispatch(updateSections(updatedSections))
  }, [sections.length, dispatch])
  
};