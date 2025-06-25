import Toggle from "./Toggle";

export default function Card({ logo, name, description, isActive, onToggle, onRemove }) {
  return (
    <article className="rounded-2xl shadow p-4 flex flex-col justify-between h-full w-full bg-white dark:bg-[#1f2535]">
      <div className="flex items-start gap-4">
        <img
          src={`${import.meta.env.BASE_URL}${logo}`}
          alt={`${name} logo`}
          className="w-16 h-16 object-contain rounded max-w-full flex-shrink-0"
        />
        <div className="flex flex-col overflow-hidden">
          {/* Título: texto oscuro en claro, blanco en dark */}
          <h3 className="font-bold text-lg text-[#142047] dark:text-white truncate">{name}</h3>
          {/* Descripción: texto gris oscuro en claro, gris claro en dark */}
          <p className="text-sm text-[#4b5563] dark:text-gray-300 break-words overflow-hidden">
            {description}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button onClick={onRemove} className="button-primary transition whitespace-nowrap">
          Remove
        </button>
        <Toggle checked={isActive} onChange={onToggle} />
      </div>
    </article>
  );
}
