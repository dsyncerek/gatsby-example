import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';

export default function() {
  const [headerState, setHeaderState] = useState('visible');

  const fun = () => {
    const scrollPos = window.pageYOffset;

    if (scrollPos <= 0) {
      setHeaderState('visible');
    } else {
      setHeaderState('hidden');
    }
  };

  const throttledFun = throttle(fun, 250);

  useEffect(() => {
    window.addEventListener('scroll', throttledFun, false);
    return () => window.removeEventListener('scroll', throttledFun, false);
  }, []);

  return headerState;
}
