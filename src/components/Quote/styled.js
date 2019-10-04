import { margin, padding, rgba } from 'polished';
import styled, { css } from 'styled-components';

export const QuoteStyled = styled.div(
  props => css`
    ${padding(props.theme.gutter * 2)};
    text-align: center;
    box-shadow: 0 0 20px 0 ${rgba(props.theme.colorPrimary, 0.2)};

    img,
    svg {
      max-height: 30px;
      max-width: 75%;
      ${margin(0, 0, props.theme.gutter, 0)};
    }
  `,
);
