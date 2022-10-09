import PropTypes from 'prop-types';

import { LoadMoreButton } from './Button.styled';

export const Button = ({ getMoreImage }) => {
  return <LoadMoreButton onClick={getMoreImage}>Load More</LoadMoreButton>;
};

Button.propTypes = {
  getMoreImage: PropTypes.func.isRequired,
};
