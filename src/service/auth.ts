// @ts-ignore
import auth, {UserCredential} from '@react-native-firebase/auth';
import {nickNameGenerate} from '../util/randomName.ts';

interface Error {
  message: string;
  isError: boolean;
}

export async function SingUp({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential | Error> {
  try {
    const res = await auth().createUserWithEmailAndPassword(email, password);
    const nickName = nickNameGenerate();
    await res.user.updateProfile({displayName: nickName});
    return res;
  } catch (error: any) {
    let message = 'error';
    if (error.code === 'auth/email-already-in-use') {
      message = 'That email address is already in use!';
    }

    if (error.code === 'auth/invalid-email') {
      message = 'That email address is invalid!';
    }

    return {
      message: message,
      isError: true,
    };
  }
}

export async function SignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<UserCredential | Error> {
  try {
    const {user} = await auth().signInWithEmailAndPassword(email, password);
    const token = await user?.getIdToken();
    console.log(token);
    console.log(user.displayName, user.email);
  } catch (error: any) {
    let message = 'error';
    if (error.code === 'auth/invalid-credential') {
      message = 'Invalid email or password.';
    }
    return {
      message: message,
      isError: true,
    };
  }
}

export async function logout() {
  await auth().signOut();
}
