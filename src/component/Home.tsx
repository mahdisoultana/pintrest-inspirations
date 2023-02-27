import { HomeCardsData } from '../context/data';
import Card from './commun/Card';

import { create } from 'zustand';
export const useSelected = create<{
  selected: string | null;
  setSelected: (id: string | null) => void;
}>((set, get) => ({
  selected: null,
  setSelected: (id: string | null) => set({ selected: id }),
}));
function Home() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-y-12 gap-y-8 gap-4  py-12 px-4">
      {HomeCardsData.map((data, i) => (
        <Card key={i} data={data} />
      ))}
    </div>
  );
}

export default Home;
