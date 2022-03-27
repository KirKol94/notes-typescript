import { useEffect, useState } from "react"
import { INote } from "../types/types"
import { FormCreate } from "./FornCreate"
import { Header } from "./Header"
import { NoteList } from "./NoteList"

export const App: React.FC = () => {
    const [notes, setNotes] = useState<INote[]>([])
    const [search, setSearch] = useState('')

    const searchedNotes = notes.filter((note: INote) =>
        note.text?.toLowerCase().includes(search.toLowerCase())
        || note.tittle?.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        const ls = JSON.parse(localStorage.getItem('notes') || '{}')
        setNotes(ls)
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])


    return (
        <div className="">
            <Header
                setSearch={setSearch}
                search={search}
            />

            {!search &&
                <FormCreate
                    setNotes={setNotes}
                    notes={notes}
                />
            }

            <NoteList
                notes={search ? searchedNotes : notes}
                setNotes={setNotes}
            />

        </div>
    )
}
