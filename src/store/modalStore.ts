import {create} from 'zustand';
type Props = {
  modal: [];
  values: any;
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
};

const useModalStore = create<Props>((set, get) => ({
  modal: [],
  values: {},
  getValue: key => get().values[key],
  setValue: (key, value) => {
    const values = get().values;
    values[key] = value;
    set({values});
  },
}));

export const useModal = () => useModalStore();
