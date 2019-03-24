import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

export default function() {
  const [headerState, setHeaderState] = useState('visible');

  let lastScrollPos = 0;

  const fun = () => {
    const scrollPos = window.pageYOffset;
    const direction = scrollPos > lastScrollPos ? 1 : -1;

    if (scrollPos <= 0) {
      setHeaderState('visible');
    } else if (direction === 1) {
      setHeaderState('hidden');
    } else {
      setHeaderState('wtf');
    }

    lastScrollPos = scrollPos;
  };

  const throttledFun = throttle(fun, 250);

  useEffect(() => {
    window.addEventListener('scroll', throttledFun, false);
    return () => window.removeEventListener('scroll', throttledFun, false);
  }, []);

  return headerState;
}
