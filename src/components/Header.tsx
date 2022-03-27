export const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Notes</a>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        inputMode="search"
                        placeholder="🔍 Search"
                    />
                </form>
            </div>
        </nav>
    )
}
