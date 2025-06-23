import MainLayout from "../layouts/MainLayout";
import SearchBox from "../components/Searchbox";
import Header from "../components/Header";
import Filters from "../components/Filters";
import Card from "../components/Card";
import rawData from "../data/data.json";
import { useState } from "react";
import { filterByStatus } from "../utils/filters"; // importa la función que definimos antes

export default function Home() {
  const [data, setData] = useState(rawData);
  const [filter, setFilter] = useState("all"); // nuevo estado filtro

  // toggle sin mutar estado directo
  const handleToggle = (name) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.name === name ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  const handleRemove = (name) => {
    setData((prevData) => prevData.filter((item) => item.name !== name));
  };

  // data filtrada con el filtro seleccionado
  const filteredData = filterByStatus(data, filter);

  return (
    <MainLayout>
      <div className="space-y-6">
        <SearchBox />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Header header="Extensions List" />
          <Filters currentFilter={filter} onChangeFilter={setFilter} />
        </div>

        <section
          className="grid gap-6
                     grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]
                     max-w-full"
        >
          {filteredData.map((item) => (
            <Card
              key={item.name}
              logo={item.logo}
              name={item.name}
              description={item.description}
              isActive={item.isActive}
              onToggle={() => handleToggle(item.name)}
              onRemove={() => handleRemove(item.name)} // ← nueva prop
            />
          ))}
        </section>
      </div>
    </MainLayout>
  );
}
