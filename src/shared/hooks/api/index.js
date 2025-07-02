import useQuery from './query.js';
import useMutation from './mutation.js';

/* eslint-disable react-hooks/rules-of-hooks */
export default {
  get: (...args) => useQuery(...args),
  post: (...args) => useMutation('post', ...args),
  put: (...args) => useMutation('put', ...args),
  patch: (...args) => useMutation('patch', ...args),
  delete: (...args) => useMutation('delete', ...args),
};
