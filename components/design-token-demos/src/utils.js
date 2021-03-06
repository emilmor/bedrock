import PropTypes from 'prop-types';

// to be kept inline with `BedrockDesignToken[]`
export const demoPropTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      originalValue: PropTypes.string,
      category: PropTypes.string.isRequired,
      comment: PropTypes.string,
      code: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
