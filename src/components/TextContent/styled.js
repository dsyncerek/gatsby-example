import { margin, padding } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { TitleStyled } from '../Title/styled';

export const TextContentStyled = styled.div(
  props => css`
    text-align: ${props.standard ? 'auto' : 'center'};

    ${props.wide &&
    css`
      ${breakpoint('lg')`
      ${padding(props.theme.gutter * 6, 0)};
    `};
    `};

    ${TitleStyled} {
      ${margin(0, 0, props.theme.gutter * 3, 0)};

      ${breakpoint('sm')`
      ${margin(0, 0, props.theme.gutter * 4, 0)};
    `};
    }
  `,
);
