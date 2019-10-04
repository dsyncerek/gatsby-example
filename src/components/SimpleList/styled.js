import { padding } from 'polished';
import styled, { css } from 'styled-components';

export const SimpleListStyled = styled.ol(
  props => css`
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;

    ${props.featured &&
      css`
        font-size: 1.125em;
      `}
  `,
);

export const SimpleListItemStyled = styled.li(
  props => css`
    ${padding(0, props.tight ? props.theme.gutter * 2 : props.theme.gutter * 3)};

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }

    &:not(:last-of-type) {
      position: relative;
      margin-right: 1px;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -1px;
        width: 1px;
        height: 100%;
        background: currentColor;
        opacity: 0.5;
      }
    }
  `,
);
