import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api.js';
import toast from 'shared/utils/toast.js';
import { getStoredAuthToken, storeAuthToken } from 'shared/utils/authToken.js';
import { PageLoader } from 'shared/components/index.js';

const Authenticate = () => {
  const history = useHistory();

  useEffect(() => {
    const createGuestAccount = async () => {
      try {
        const { authToken } = await api.post('/authentication/guest');
        storeAuthToken(authToken);
        history.push('/');
      } catch (error) {
        toast.error(error);
      }
    };

    if (!getStoredAuthToken()) {
      createGuestAccount();
    }
  }, [history]);

  return <PageLoader />;
};

export default Authenticate;
