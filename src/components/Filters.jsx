export default function Filters() {
  return (
    <div className="flex flex-wrap gap-2">
      {['All', 'Active', 'Inactive'].map(label => (
        <button
          key={label}
          className="button-secundary px-3 py-1 bg-white-200 rounded-full hover:bg-white-300"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
