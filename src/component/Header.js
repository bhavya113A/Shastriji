// import React from 'react'
// import '../App.css'

// export default function Header() {
//   return (
//     <>
//     <nav className='nav-bar'>
//         <ul>
//           <li><a href='#'>Home</a></li>
//           <li><a href='#'>About us</a></li>
//           <li><a href='#'>Gallery</a></li>
//           <li><a href='#'>Contact</a></li>
//         </ul>
//       </nav>
//     </>
//   )
// }

import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    const navigate = useNavigate(); 
    const [showDropdown, setShowDropdown] = React.useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleAboutClick = () => {
      navigate('/about');
    };
    const handleGalleryClick = () =>{
        navigate('/gallery');
    }
    const handleContactClick = () =>{
        navigate('/contact');
    }


  return (
    <>
      <nav className='nav-bar'>
        <ul>
             
             
            <li><a href='/'>Home</a></li>
            <li><a href='' onClick={handleAboutClick}>About</a></li>
            {/* <li>
             <a href="#" onClick={toggleDropdown}>Videos</a>
             {showDropdown && (
               <ul className="dropdown">
                 <li><a href="https://www.youtube.com" target="_self" rel="noopener noreferrer">YouTube</a></li>
                 <li><a href="https://www.facebook.com" target="_self" rel="noopener noreferrer">Facebook</a></li>
                 <li><a href="https://www.instagram.com" target="_self" rel="noopener noreferrer">Instagram</a></li>
               </ul>
             )}
           </li> */}
             <li>
            <a href="/Video" onClick={toggleDropdown} className={showDropdown ? 'show-dropdown' : ''}>
              Videos <FontAwesomeIcon icon={faChevronDown} /> {/* Drop arrow icon */}
            </a>
            {showDropdown && (
              <ul className="dropdown">
                <li><a href="https://www.youtube.com" target="_self" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://www.facebook.com" target="_self" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com" target="_self" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            )}
          </li>
          <li><a href='' onClick={handleGalleryClick}>Gallery</a></li>
          <li><a href='' onClick={handleContactClick}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
}


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';

// const Header = () => {
//   const navigate = useNavigate(); 
//   const [showDropdown, setShowDropdown] = React.useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleAboutClick = () => {
//     navigate('/about'); 
//   };

//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <a href="#" onClick={handleAboutClick}>About</a>
//           </li>
//           <li>
//             <a href="#" onClick={toggleDropdown}>Videos</a>
//             {showDropdown && (
//               <ul className="dropdown">
//                 <li><a href="https://www.youtube.com" target="_self" rel="noopener noreferrer">YouTube</a></li>
//                 <li><a href="https://www.facebook.com" target="_self" rel="noopener noreferrer">Facebook</a></li>
//                 <li><a href="https://www.instagram.com" target="_self" rel="noopener noreferrer">Instagram</a></li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

{/* {showDropdown && (
              <ul className="dropdown">
                <li><a href="https://www.youtube.com" target="_self" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://www.facebook.com" target="_self" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.instagram.com" target="_self" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            )} */}





