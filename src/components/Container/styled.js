import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

// todo

export const ContainerStyled = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;

  ${breakpoint('sm')`
    padding: 0 40px;
  `};
`;
