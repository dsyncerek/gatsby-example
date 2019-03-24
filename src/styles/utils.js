import breakpoint from 'styled-components-breakpoint';

export const eachBreakpoint = (rule, map) => {
  return Object.keys(map).map(bp => {
    return breakpoint(bp)`
      ${rule}: ${map[bp]};
    `;
  });
};
