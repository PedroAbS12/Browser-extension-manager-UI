export default function Toggle({ checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-11 h-6 rounded-full bg-gray-300 peer-checked:bg-[#f35b55] transition-colors"></div>
        <div
          className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md 
                     peer-checked:translate-x-5 transition-transform"
        ></div>
      </div>
    </label>
  );
}
