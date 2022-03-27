import { INote } from "../types/types"
import { NoteItem } from "./NoteItem"

interface INoteListProps {
    notes: INote[]
    setNotes: (notes: INote[]) => void
}

export const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => (
    <ul className="container  pt-2">
        {notes.length < 1 && <>
            <h1 className="text-center opacity-50 mt-5">Empty :(</h1>
        </>}

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
