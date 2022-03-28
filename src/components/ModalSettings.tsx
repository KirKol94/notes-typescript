import 'bootstrap/js/dist/modal';

interface IModalSettingsProps {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const ModalSettings: React.FC<
  IModalSettingsProps
> = ({ isDarkMode, setIsDarkMode }) => {
  const handleChangeDarkMode: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    setIsDarkMode(e.target.checked);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content p-2">
          <h1 className="user-select-none">settings</h1>
          <hr />

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={isDarkMode}
              id="flexSwitchCheckDefault"
              onChange={handleChangeDarkMode}
            />
            <label
              className="form-check-label user-select-none"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark notes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
