import Toggle from "./Toggle";

export default function Card({ logo, name, description, isActive, onToggle }) {
  return (
    <article className="rounded-2xl shadow p-4 flex flex-col justify-between h-full w-full bg-[#1f2535]">
      <div className="flex items-start gap-4">
        <img
          src={`${import.meta.env.BASE_URL}${logo}`}
          alt={`${name} logo`}
          className="w-16 h-16 object-contain rounded max-w-full flex-shrink-0"
        />
        <div className="flex flex-col overflow-hidden">
          <h3 className="font-bold text-lg text-white truncate">{name}</h3>
          <p className="text-sm text-gray-300 break-words overflow-hidden">
            {description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="button-primary text-sm text-white rounded-full border border-white px-4 py-1 hover:bg-white hover:text-[#1f2535] transition whitespace-nowrap">
          Remove
        </button>
        <Toggle checked={isActive} onChange={onToggle} />
      </div>
    </article>
  );
}
