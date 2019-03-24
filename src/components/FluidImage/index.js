import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const FluidImage = ({ src }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const fluid = images.edges.find(image => image.node.relativePath === src).node.childImageSharp.fluid;
      return <Img fluid={fluid} />;
    }}
  />
);

FluidImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default FluidImage;
