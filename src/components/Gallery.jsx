import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useGlobalContext } from '../context';

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section
        className='image-container'
        style={{
          display: 'flex',
          placeItems: 'center',
        }}
      >
        <div className='loading'></div>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>there was an error.</h4>
      </section>
    );
  }

  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>no results found.</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((result) => {
        const { id, alt_description } = result;
        //just in case
        const url = result?.urls?.regular;
        return <img key={id} src={url} alt={alt_description} className='img' />;
      })}
    </section>
  );
};
export default Gallery;
