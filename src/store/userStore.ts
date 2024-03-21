import {create} from 'zustand';

type Props = {
  email: string;
  displayName: string;
  token: string;
  isAuthenticated: () => boolean;
  authenticate: ({
    displayName,
    email,
    token,
  }: {
    displayName?: string;
    email?: string;
    token?: string;
  }) => void;
  logout: () => void;
};

const initialize = {
  email: '',
  displayName: '',
  token: '',
};

export const useUserStore = create<Props>((set, get) => ({
  email: '',
  displayName: '',
  token: '',
  isAuthenticated: () => {
    return !!get().email;
  },
  authenticate: ({email, displayName, token}) => {
    set({email, displayName, token});
  },
  logout: () => {
    set(initialize);
  },
}));
