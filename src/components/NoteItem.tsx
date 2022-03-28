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
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between mt-2 ${
        isDarkMode && 'bg-dark bg-gradient text-white'
      }`}
    >
      <div>
        <h3> {tittle} </h3>
        {tittle && <hr />}
        <p className="notetext">{text}</p>
      </div>

      <div>
        <button
          className="btn btn-outline-danger mb-2"
          onClick={handleRemove}
        >
          &times;
        </button>
      </div>
    </li>
  );
};
