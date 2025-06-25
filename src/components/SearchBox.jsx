import logo from "../assets/images/logo.svg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

export default function SearchBox() {
  const toggleDarkMode = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    root.classList.toggle("dark", !isDark);
    localStorage.theme = !isDark ? "dark" : "light";
  };

  return (
    <div className="flex items-center justify-between gap-2 rounded-2xl p-2 bg-white dark:bg-[#1f2535]">
      <img src={logo} alt="Logo" />
      <button
        onClick={toggleDarkMode}
        className="rounded bg-[#eeeeee] dark:bg-[#181d29] p-2"
      >
        <img src={moon} alt="Moon" className="block dark:hidden" />
        <img src={sun} alt="Sun" className="hidden dark:block" />
      </button>
    </div>
  );
}
