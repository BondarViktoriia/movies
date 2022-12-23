import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, value }) => {
    
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.query.value);
  };

    return (
           <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" defaultValue={value}/>
        <button type="submit">Search</button>
      </form>
      
    </>
    )
}
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};


export default SearchForm;