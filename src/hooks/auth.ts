import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {getUserInfo, logout, SignIn, SingUp} from '../service/auth.ts';
import {Alert} from 'react-native';
export function useUsers() {
  const {data, isPending} = useQuery({
    queryKey: ['user'],
    queryFn: getUserInfo,
  });

  return {
    user: data,
    isPending,
  };
}

export function useLogout() {
  const queryClient = useQueryClient();
  const {mutate: onLogout, isPending} = useMutation({
    mutationFn: logout,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: () => {
      Alert.alert('Error', 'logout fail');
    },
  });

  return {
    onLogout,
    isPending,
  };
}

export function useSignUp() {
  const queryClient = useQueryClient();
  const {mutate, isPending} = useMutation({
    mutationFn: SingUp,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (error: any) => {
      let message = 'error';
      if (error.code === 'auth/email-already-in-use') {
        message = 'That email address is already in use!';
      }

      if (error.code === 'auth/invalid-email') {
        message = 'That email address is invalid!';
      }
      Alert.alert('Error', message);
    },
  });
  return {
    isPending,
    mutate,
  };
}

export function useSignIn() {
  const queryClient = useQueryClient();

  const {mutate, isPending} = useMutation({
    mutationFn: SignIn,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      });
    },
    onError: (error: any) => {
      let message = 'error';
      if (error.code === 'auth/invalid-email') {
        message = 'The email address is badly formatted.';
      }
      if (error.code === 'auth/invalid-credential') {
        message = 'Invalid email or password.';
      }
      Alert.alert('Error', message);
    },
  });

  return {
    mutate,
    isPending,
  };
}
