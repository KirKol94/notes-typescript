interface IHeaderProps {
    search: string
    setSearch: (value: string) => void
}

export const Header: React.FC<IHeaderProps> = ({ setSearch, search }) => {

    const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setSearch(e.target.value)
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">Notes</span>
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
    )
}
