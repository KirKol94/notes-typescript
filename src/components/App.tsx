import { useState } from "react"
import { INote } from "../types/types"
import { FormCreate } from "./FornCreate"
import { Header } from "./Header"
import { NoteList } from "./NoteList"

export const App: React.FC = () => {
    const [notes, setNotes] = useState<INote[]>([])

    return (
        <div className="">
            <Header />
            <FormCreate setNotes={setNotes} notes={notes} />
            <NoteList notes={notes} setNotes={setNotes} />
        </div>
    )
}
