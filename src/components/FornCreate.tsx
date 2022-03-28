import axios from 'axios';
import { useState } from 'react';
import { INote } from '../types/types';

interface IFormCreateProps {
  notes: INote[];
  setNotes: (notes: INote[]) => void;
}

export const FormCreate: React.FC<IFormCreateProps> = ({ notes, setNotes }) => {
  const [noteTittle, setNoteTittle] = useState<string>('');
  const [noteText, setNoteText] = useState<string>('');

  const handleChangeTittle: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setNoteTittle(e.target.value);
  };

  const handleChangeText: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setNoteText(e.target.value);
  };

  const handleSubmit = () => {
    const isValid = noteText || noteTittle;
    const newNote = {
      id: Date.now(),
      tittle: noteTittle,
      text: noteText,
    };

    if (isValid) {
      setNotes([...notes, newNote]);

      const url =
        'https://sheet.best/api/sheets/aaa850d5-1be5-4970-bd76-2c982ae78fea';

      axios.post(url, newNote).then((response) => {
        console.log('success');
      });
    }

    setNoteTittle('');
    setNoteText('');
  };

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

      <button className={`w-100 btn btn-dark`} onClick={handleSubmit}>
        Add note
      </button>
    </div>
  );
};
