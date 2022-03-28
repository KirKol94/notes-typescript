import { ModalSettings } from './ModalSettings';

interface IHeaderProps {
  search: string;
  isDarkMode: boolean;
  setSearch: (value: string) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

export const Header: React.FC<IHeaderProps> = ({
  search,
  isDarkMode,
  setSearch,
  setIsDarkMode,
}) => {
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span
            className="navbar-brand user-select-none"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Notes ⚙️
          </span>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              inputMode="search"
              placeholder="🔍 Search"
              value={search}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </nav>

      <ModalSettings isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
};
