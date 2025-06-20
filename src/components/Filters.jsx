export default function Filters({ currentFilter, onChangeFilter }) {
  return (
    <div className="flex flex-wrap gap-2">
      {['All', 'Active', 'Inactive'].map(label => {
        const isActive = currentFilter === label.toLowerCase();
        return (
          <button
            key={label}
            onClick={() => onChangeFilter(label.toLowerCase())}
            className={`button-secundary px-3 py-1 rounded-full hover:border-red-500
              ${isActive ? 'active-filter' : ''}`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
