import { useState } from "react"
import { INote } from "../types/types"

interface IFormCreateProps {
    setNotes: (notes: INote[]) => void
    notes: Array<INote>
}

export const FormCreate: React.FC<IFormCreateProps> = ({ setNotes, notes }) => {
    const [noteTittle, setNoteTittle] = useState<string>('')
    const [noteText, setNoteText] = useState<string>('')

    const handleChangeTittle: React.ChangeEventHandler<HTMLInputElement> = e => {
        setNoteTittle(e.target.value)
    }

    const handleChangeText: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
        setNoteText(e.target.value)
    }

    const handleSubmit = () => {
        const isValid = noteText || noteTittle

        if (isValid) {
            setNotes([{
                id: Date.now(),
                tittle: noteTittle,
                text: noteText
            }, ...notes])
        }

        setNoteTittle('')
        setNoteText('')
    }

    return (
        <div className="container mt-2">
            <div className="mb-3">
                <input
                    className="form-control"
                    placeholder="Note tittle"
                    value={noteTittle}
                    onChange={handleChangeTittle}
                />
            </div>

            <div className="mb-3">
                <textarea
                    className="form-control"
                    placeholder="Write a text"
                    value={noteText}
                    onChange={handleChangeText}
                />
            </div>

            <button
                className="w-100 btn btn-dark"
                onClick={handleSubmit}
            >Add note</button>
        </div>
    )
}
