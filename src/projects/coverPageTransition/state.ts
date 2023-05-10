import { create } from 'zustand';
import { CardType } from './types';
type PramType = Omit<SelectedType, 'setItem'>;
interface SelectedType extends Partial<CardType> {
  selected: boolean;
  setItem: (selected: PramType) => void;
}
export const useSelectedItem = create<SelectedType>((set, get) => ({
  selected: false,
  id: '',
  title: '',
  text: '',
  year: '',
  src: '',
  setItem: (item) => {
    set({ ...get(), ...item });
  },
}));
