import { useEffect } from 'react';

const Route = ({ path, children }) => {
  const pathFromUrl = window.location.pathname;

  useEffect(() => {
    const onLocationState = () => {
      console.log('Location Change');
    };

    window.addEventListener('popstate', onLocationState);

    //clean up function
    return () => {
      window.removeEventListener('popstate', onLocationState);
    };
  }, []);

  return pathFromUrl === path ? children : null;
};

export default Route;
