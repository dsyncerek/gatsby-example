import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const GRID_COLUMNS = 12;

const calcSize = ({ sizes }) => {
  return Object.keys(sizes).map(bp => {
    const val = `${(100 * sizes[bp]) / GRID_COLUMNS}%`;

    return breakpoint(bp)`
      flex: 0 0 ${val};
      max-width: ${val};
    `;
  });
};

const calcOffset = ({ offsets }) => {
  return Object.keys(offsets).map(bp => {
    const val = `${(100 * offsets[bp]) / GRID_COLUMNS}%`;

    return breakpoint(bp)`
      margin-left: ${val};
    `;
  });
};

export const ColumnStyled = styled.div(
  props => css`
    position: relative;
    width: 100%;

    ${calcSize};
    ${calcOffset};
  `,
);
