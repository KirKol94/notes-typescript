import { INote } from '../types/types';
import { NoteItem } from './NoteItem';

interface INoteListProps {
  notes: INote[];
  isDarkMode: boolean;
  setNotes: (notes: INote[]) => void;
}

export const NoteList: React.FC<INoteListProps> = ({ notes, isDarkMode, setNotes }) => (
  <ul className="container  pt-2">
    {notes.length < 1 && (
      <>
        <h1 className="text-center opacity-50 mt-5 user-select-none">Empty :(</h1>
      </>
    )}

    {notes.map((note) => (
      <NoteItem key={note.id} note={note} notes={notes} setNotes={setNotes} isDarkMode={isDarkMode} />
    ))}
  </ul>
);
