import React from 'react';
import './Catagory.css';
import photo1 from './assests/photo1.jpeg';
import photo2 from './assests/photo2.jpeg';

const Catagory = () => {
  return (
    <div className='categories'>
       <h1><b>Categories</b></h1>
       <div className='images'>
       <img src= {photo1} alt='category' className='category-photo-one'></img>
       <img src={photo2} alt='category' className='category-photo-two'></img>
       <img src={photo2} alt='category' className='category-photo-two'></img>
       <img src={photo2} alt='category' className='category-photo-two'></img>
       </div> 
    </div>
  );
};

export default Catagory;