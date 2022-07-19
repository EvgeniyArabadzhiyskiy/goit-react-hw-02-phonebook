import PropTypes from 'prop-types';
import Input from 'components/Input/Input';

const FilterContacts = ({ value, onChangeInput }) => {
  return (
    <div>
      <Input type="text" name="search" value={value} onChange={onChangeInput} />
    </div>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default FilterContacts;
