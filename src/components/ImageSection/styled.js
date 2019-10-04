import styled, { css } from 'styled-components';

export const ImageSectionStyled = styled.div(
  props => css`
    height: ${props.height};

    img,
    video {
      width: 100%;
      object-fit: cover;
      object-position: center;

      ${props.height !== 'auto' &&
        css`
          height: 100%;
        `}
    }
  `,
);
