import { margin, padding } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { ColumnStyled } from '../Column/styled';

export const RowStyled = styled.div(
  props => css`
    display: flex;
    flex-wrap: wrap;
    ${margin(props.theme.gutter * -1)};

    ${breakpoint('sm')`
    ${margin(props.theme.gutter * -2)};
  `};

    ${ColumnStyled} {
      ${padding(props.theme.gutter)};

      ${breakpoint('sm')`
      ${padding(props.theme.gutter * 2)};
    `};
    }

    ${props.wide &&
    css`
      ${margin(props.theme.gutter * -3, props.theme.gutter * -1)};

      ${breakpoint('sm')`
      ${margin(props.theme.gutter * -4, props.theme.gutter * -2)};
    `};

      & > ${ColumnStyled} {
        ${padding(props.theme.gutter * 3, props.theme.gutter)};

        ${breakpoint('sm')`
        ${padding(props.theme.gutter * 4, props.theme.gutter * 2)};
      `};
      }
    `};

    ${props.float &&
    css`
      display: block;

      &::after {
        content: '';
        display: table;
        clear: both;
      }

      & > ${ColumnStyled} {
        &:nth-child(odd) {
          float: left;
        }

        &:nth-child(even) {
          float: right;
        }
      }
    `};
  `,
);
