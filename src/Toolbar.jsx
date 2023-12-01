function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <>
            {filters.map((filter) => (
                <button
                key={filter}
                onClick={onSelectFilter}
                >
                {filter}
                </button>
            ))}
        </>
    );
}

export default Toolbar