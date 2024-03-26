import {request} from './axios.ts';

export function createRooms({userEmail}: {userEmail: string}) {
  return request({
    url: 'room',
    method: 'post',
    data: {
      userEmail,
    },
  });
}

export function fetchRooms() {
  return request({
    url: 'room',
    method: 'get',
  });
}
