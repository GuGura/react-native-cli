import React, {useEffect, useState} from 'react';
import {useUsers} from '../../hooks/auth.ts';
import {useUserStore} from '../../store/userStore.ts';
export default function AuthProvider({children}: {children: any}) {
  const {user} = useUsers();
  const [loading, setLoading] = useState(true);

  const {authenticate} = useUserStore();

  useEffect(() => {
    function initUser() {
      authenticate({
        displayName: user?.displayName ? user.displayName : '',
        email: user?.email ? user.email : '',
        token: user?.token ? user.token : '',
      });
      setLoading(false);
    }
    initUser();
  }, [user, authenticate]);

  if (loading) {
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
