const Route = ({ path, children }) => {
  const pathFromUrl = window.location.pathname;
  return pathFromUrl === path ? children : null;
};

export default Route;
