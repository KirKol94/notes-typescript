import { useEffect, useState } from 'react';
import { INote } from '../types/types';
import { FormCreate } from './FornCreate';
import { Header } from './Header';
import { NoteList } from './NoteList';

export const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [search, setSearch] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const searchedNotes = notes.filter(
    (note: INote) =>
      note.text
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      note.tittle
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  useEffect(() => {
    const lsNotes = JSON.parse(
      localStorage.getItem('notes') || '{}'
    );
    const lsIsDarkMode = JSON.parse(
      localStorage.getItem('isDarkMode') || '{}'
    );

    setNotes(lsNotes);
    setIsDarkMode(lsIsDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(
      'isDarkMode',
      JSON.stringify(isDarkMode)
    );
  }, [isDarkMode]);

  return (
    <div>
      <Header
        setSearch={setSearch}
        search={search}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {!search && (
        <FormCreate notes={notes} setNotes={setNotes} />
      )}

      <NoteList
        notes={search ? searchedNotes : notes}
        setNotes={setNotes}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};
