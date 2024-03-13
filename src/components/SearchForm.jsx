import { useGlobalContext } from '../context';
import { ImSearch } from 'react-icons/im';

const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;
    setSearchTerm(searchValue);
  };
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' htmlFor='search' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          className='form-input search-input'
          placeholder='purple'
        />
        <button type='submit' className='btn'>
          <ImSearch />
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
