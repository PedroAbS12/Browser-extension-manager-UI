import logo from "../assets/images/logo.svg";
import sun from "../assets/images/icon-sun.svg";

export default function SearchBox() {
  return (
   <div className="flex items-center justify-between gap-2 rounded-2xl p-2" style={{ backgroundColor: "#1f2535" }}>
      <img src={logo} alt="Logo" />
      <button className="rounded">
        <img src={sun} alt="Sun" />
      </button>
    </div>
  );
}
