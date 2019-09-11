import PropTypes from 'prop-types';
import React from 'react';
import Container from '../Container';
import Column from '../Grid/Column';
import Row from '../Grid/Row';
import TextContent from '../TextContent';
import Title from '../Title';
import { HeroMediaStyled, HeroStyled } from './styled';

const Hero = ({ big, media, title, children }) => (
  <HeroStyled big={big}>
    {media && <HeroMediaStyled>{media}</HeroMediaStyled>}
    <Container>
      {big && (
        <TextContent standard>
          <Title size="large" as="h2" reversed>
            {title}
          </Title>
          {children}
        </TextContent>
      )}

      {!big && (
        <Row>
          <Column sizes={{ md: 10, lg: 8, xl: 6 }} offsets={{ md: 1, lg: 2, xl: 3 }}>
            <TextContent>
              <Title size="large" as="h2" reversed>
                {title}
              </Title>
              {children}
            </TextContent>
          </Column>
        </Row>
      )}
    </Container>
  </HeroStyled>
);

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  big: PropTypes.bool,
  media: PropTypes.node,
};

export default Hero;
