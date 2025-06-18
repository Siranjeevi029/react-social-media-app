import React, { useContext } from 'react'
import {FaLaptop,FaMobileAlt, FaTabletAlt} from 'react-icons/fa'
import DataContext from './contexts/DataContext';

const Header = () => {
  const {width,title} = useContext(DataContext);
  return (
    <header className='Header'> 
      <h1>{title}</h1>
      {
        width < 768 ? <FaMobileAlt/> :
        width < 992 ? <FaTabletAlt/>  :
        <FaLaptop/>
      }
      </header>
  )
}

export default Header