import { useCallback } from 'react';
import { HomeCardsData } from '../context/data';
import Line from './commun/Line';
import Card from './commun/card/Card';

import { create } from 'zustand';
export const useSelected = create<{
  selected: string | null;
  setSelected: (id: string | null) => void;
}>((set, get) => ({
  selected: null,
  setSelected: (id: string | null) => set({ selected: id }),
}));
function Home() {
  const { selected, setSelected } = useSelected();
  const memoSetSelected = useCallback(setSelected, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-y-12 gap-y-8 gap-4  py-12 px-4 relative min-h-screen">
      <Line className="top-12 h-[.6px] w-full line-main" />
      <Line className="top-[290px] h-[.6px] w-full line-main" />
      <Line className="top-[calc(290px+290px)] h-[.6px] w-full line-main" />
      {/* horizontal lines */}
      {/* <Line className=" line-main-vertical w-[.6]  h-full" /> */}

      <Line
        className=" line-main-vertical right-[calc(380px+390px)] w-[.1]  h-full"
        style={{ width: 0.3 }}
      />
      <Line
        className=" line-main-vertical right-[410px] w-[.1]  h-full"
        style={{ width: 0.3 }}
      />

      {HomeCardsData.map((data, i) => (
        <Card
          key={i}
          data={data}
          selected={selected == data.id}
          setSelected={memoSetSelected}
        />
      ))}
    </div>
  );
}

export default Home;
