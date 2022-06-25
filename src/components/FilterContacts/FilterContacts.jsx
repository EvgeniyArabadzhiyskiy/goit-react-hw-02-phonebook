

const FilterContacts = ({ value, onChangeInput }) => {
  return (
    <div>
      <input type="text" name="search" value={value} onChange={onChangeInput} />
    </div>
  );
};

export default FilterContacts;
