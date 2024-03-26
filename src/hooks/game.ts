import {useMutation, useQuery} from '@tanstack/react-query';
import {createRooms, fetchRooms} from '../service/game.ts';

export function useRooms() {
  const {data, isPending} = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRooms,
  });

  return {data, isPending};
}

export function useCreateRoom() {
  const {mutate: createRoom, isPending} = useMutation({
    mutationFn: createRooms,
    onSuccess: () => {},
    onError: () => {},
  });

  return {
    createRoom,
    isPending,
  };
}
