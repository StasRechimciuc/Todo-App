import { useEffect } from "react"
export const useShowForm = (
    showForm:boolean,
    setShowForm: (value: boolean) => void
) => (

    useEffect(() => {
        const handleKeyDown = (event:any) => {
            if (event.key === 'Escape') {
                setShowForm(false);
            } 
            if(event.key === 'Enter'){
                setShowForm(true)
            }
        };
        
        showForm && document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showForm])
)