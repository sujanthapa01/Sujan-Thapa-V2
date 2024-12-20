import ThemeToggle from './themeToggleButton/themeToggle'; // Ensure this path is correct
import { useSelector } from 'react-redux';


function Header() {


  const theme = useSelector((state) => state.theme.theme);


  return (
    <header>
      <div className="flex items-center justify-between h-16 before:block">
        <div className="grow flex justify-between md:justify-end space-x-4">
          <p className={`app ${theme} text-sm text-gray-500 pt-2 pb-2 text-center sig-text xl:hidden md:hidden lg:hidden`}>
            @sujanthapa {new Date().getFullYear()}
          </p>
          <div className='flex gap-6'>
            <ThemeToggle />

           
          </div>
        </div>
      </div>
     
    </header>
  );
}

export default Header;
