import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //if want open a new window press key and link
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    //changes url in browser
    window.history.pushState({}, '', href);

    //this is going to communicate over to those Route component
    //that url just change
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
