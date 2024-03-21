// @ts-ignore
import auth, {UserCredential} from '@react-native-firebase/auth';
import {nickNameGenerate} from '../util/randomName.ts';

interface Error {
  message: string;
  isError: boolean;
}

export async function getUserInfo() {
  const user = auth().currentUser;
  const token = await user?.getIdToken();
  return {
    displayName: user?.displayName,
    email: user?.email,
    token: token,
  };
}

export async function SingUp({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential | Error> {
  const res = await auth().createUserWithEmailAndPassword(email, password);
  const nickName = nickNameGenerate();
  await res.user.updateProfile({displayName: nickName});
}

export async function SignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential | Error> {
  return await auth().signInWithEmailAndPassword(email, password);
}

export async function logout() {
  return await auth().signOut();
}
