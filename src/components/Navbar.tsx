import { AiOutlineUser } from 'react-icons/ai'

const Navbar = (props:any) => {
    const {
      dark,
      handleAddNote,
      handleDarkMode,
      setShowAllNotes,
    } = props
  return (
    <nav className={dark ? 'navigation' : "darkNavigation"}>
        <div className="nav-left">
          <AiOutlineUser className='icon'/>
          <h4>Welcome, User!</h4>
        </div>
        <button className='allNotes-btn'
         onClick={() => setShowAllNotes(true)}>
        All Notes
         </button>
        <div className="nav-right">
          <div className={dark ? "dark-mode" : "dark-mode-on"} onClick={handleDarkMode}>ON
            <span className='dark-sphere'></span>
          </div>
            <button className='btn' onClick={handleAddNote}>Add New Note</button>
        </div>
      </nav>
  )
}

export default Navbar