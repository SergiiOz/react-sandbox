import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationState = () => {
      // console.log('Location Change');
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationState);

    //clean up function
    return () => {
      window.removeEventListener('popstate', onLocationState);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
