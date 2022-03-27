import { INote } from "../types/types"

interface INoteItemProps extends INote {
    note: INote
    notes: INote[]
    setNotes: (notes: INote[]) => void
}

export const NoteItem: React.FC<INoteItemProps> = ({ note, notes, setNotes }) => {
    const { id, tittle, text } = note

    const handleRemove = () => {
        if (window.confirm('Удалить')) {
            setNotes(notes.filter(note => note.id !== id))
        }
    }

    return (
        <li className='list-group-item d-flex justify-content-between mt-2' >
            <div>
                <h3> {tittle} </h3>
                <p className="notetext">{text}</p>
            </div>

            <div>
                <button
                    className="btn btn-outline-danger"
                    onClick={handleRemove}
                >&times;</button>
            </div>
        </li >
    )
}
