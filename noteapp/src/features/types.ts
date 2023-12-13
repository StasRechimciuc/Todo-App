export interface SingleNote {
    title?: string;
    text:string,
    id:number,
    time:string,
    date:string,
    category:string
}

export interface SingleSection {
    title:string | null,
    id:number,
}

export interface NotesState {
    allNotes: SingleNote[],
} 

export interface sectionState {
    sections : SingleSection[];
    activeSection: SingleSection;
}

export const colorsArr = ["#7FFFD4","#00FF7F","#6A5ACD","#CD5B45","#9370DB","#008080","#4682B4","#4B0082","#DC143C"]
 