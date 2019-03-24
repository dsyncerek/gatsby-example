import styled, { css } from 'styled-components';
import { eachBreakpoint } from '../../styles/utils';

const titleSizes = {
  tiny: {
    xs: '1.25rem',
  },
  small: {
    xs: '1.375rem',
    lg: '1.5rem',
  },
  medium: {
    xs: '1.875rem',
    lg: '2rem',
  },
  large: {
    xs: '2.5rem',
    md: '3rem',
    lg: '3.5rem',
  },
};

export const TitleStyled = styled.h1(props => css`
  font-weight: 600;
  ${eachBreakpoint('font-size', titleSizes[props.size])};
  color: ${props.theme.colorPrimary};
  
  ${props.reversed && css`
    color: ${props.theme.colorTextReversed};
  `}
`);
