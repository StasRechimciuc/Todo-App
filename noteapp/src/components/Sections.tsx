import { useAppSelector } from "../store/store";
import { SingleSection } from "../features/types";
import { FaTrash, FaEdit } from "react-icons/fa";

const Sections = (props: any) => {
  const colorsArr = ["#7FFFD4", "#00FF7F", "#6A5ACD", "#CD5B45", "#9370DB", "#008080", "#4682B4", "#4B0082", "#DC143C"];

  const allNotes = useAppSelector((state) => state.notes.allNotes);

const { 
    sections,
    activeSection,
    handleActiveSection,
    handleDeleteSection,
    nanoid,
    dark, 
    handleAddSection,
    setShowAllNotes,
    handleEditSection
  } = props;

   const allSectionsEl =
    sections.length > 0 ? (
      sections.map((section: SingleSection, index: number) => {
        const chosenCategory = allNotes.filter((note) => note.category === section.title);

        return (
          <div
            key={nanoid()}
            className={`${
              dark ? "notesMenu-note" : "darkNotesMenu-note"
            } ${activeSection && activeSection.id === index ? "activeSection" : ""}`}
            onClick={() => {
              handleActiveSection(index)
              setShowAllNotes(false)
            }}
          >
            <div className="section-buttons" style={{display:'flex',gap:'10px'}}>

            <button className="trashIcon" onClick={() => handleDeleteSection(index)}>
              <FaTrash />
            </button>
            <button className="editBtn" onClick = {() => handleEditSection(section.id)}>
              <FaEdit />
            </button>
            </div>
            <h4 className="notesMenu-note__title">{section.title}</h4>
            <span className="notesMenu-note__quan" style={{ background: colorsArr[index] }}>
               {chosenCategory.length}
            </span>
          </div>
        );
      })
    ) : (
      <h2>Add Sections!</h2>
    )

    return (
    <div className={dark ? "notesMenu" : "darkNotesMenu"}>
      <button className="btn addSection" onClick={handleAddSection}>
        +
      </button>
      {allSectionsEl}
    </div>
  );
};

export default Sections;