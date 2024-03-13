import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useGlobalContext } from '../context';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <MdDarkMode
            className='toggle-icon'
            style={{ color: 'var(--primary-200)' }}
          />
        ) : (
          <MdLightMode className='toggle-icon' />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
