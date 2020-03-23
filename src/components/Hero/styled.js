import { cover, padding } from 'polished';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

// todo: mobile

export const HeroStyled = styled.div(
  props => css`
    position: relative;
    z-index: 0;
    ${padding(props.theme.gutter * 20, 0, props.theme.gutter * 10)};
    background: ${props.theme.colorPrimary};
    color: ${props.theme.colorTextReversed};
    overflow: hidden;

    ${props.big &&
    css`
      ${breakpoint('sm')`
      ${padding(props.theme.gutter * 30, 0, props.theme.gutter * 20)};
    `};
    `};
  `,
);

export const HeroMediaStyled = styled.div(
  props => css`
    ${cover()};
    z-index: -1;
    opacity: 0.1;

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
);
