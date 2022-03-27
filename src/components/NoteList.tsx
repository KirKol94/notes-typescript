import { INote } from "../types/types"
import { NoteItem } from "./NoteItem"

interface INoteListProps {
    notes: Array<INote>
    setNotes: (notes: INote[]) => void
}

export const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => (
    <ul className="container  pt-2">
        {notes.map(note => (
            <NoteItem
                key={note.id}
                note={note}
                notes={notes}
                setNotes={setNotes}
            />
        ))}
    </ul>
)
