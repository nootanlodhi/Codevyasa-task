import PropTypes from 'prop-types';

const FilterButton = ({text}) => {
  return (
    <button className="filter-btn">{text}</button>
  )
}

FilterButton.propTypes = {
    text: PropTypes.string.isRequired
  };

export default FilterButton