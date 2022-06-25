import Input from 'components/Input/Input';

const FilterContacts = ({ value, onChangeInput }) => {
  return (
    <div>
      <Input type="text" name="search" value={value} onChange={onChangeInput} />
    </div>
  );
};

export default FilterContacts;
