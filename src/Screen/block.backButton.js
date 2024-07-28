import { useEffect } from 'react';

const useBlockBackButton = () => {
  useEffect(() => {
    // Current state ko push karte hain history main
    window.history.pushState(null, null, window.location.href);

    // Event listener add karte hain popstate par
    const handlePopState = () => {
      window.history.pushState(null, null, window.location.href);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
};

export default useBlockBackButton;
