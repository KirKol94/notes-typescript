import axios from 'axios';
import { INote } from '../types/types';

interface INoteItemProps extends INote {
  note: INote;
  notes: INote[];
  isDarkMode: boolean;
  setNotes: (notes: INote[]) => void;
}

export const NoteItem: React.FC<INoteItemProps> = ({
  note,
  notes,
  isDarkMode,
  setNotes,
}) => {
  const { id, tittle, text } = note;

  const handleRemove = () => {
    const url =
      'https://sheet.best/api/sheets/aaa850d5-1be5-4970-bd76-2c982ae78fea';

    axios.delete(`${url}/id/${id}`);
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between mt-2 ${
        isDarkMode && 'bg-dark bg-gradient text-white'
      }`}
    >
      <div>
        <p className="h3">{tittle}</p>
        {tittle && <hr />}
        <p className="notetext">{text}</p>
      </div>

      <div>
        <button
          disabled={id == 1648470172900}
          className="btn btn-outline-danger mb-2"
          onClick={handleRemove}
        >
          &times;
        </button>
      </div>
    </li>
  );
};
