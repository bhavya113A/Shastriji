import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Banner from './component/Banner';
import About from './component/About';
import Catagory from './component/Catagory';
import Videos from './component/Videos';

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<><Banner /><Catagory /></>} /> 
            <Route path="/about" element={<About />} />
            <Route path="/Video" element={<Videos />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








// import './App.css';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import Banner from './component/Banner';

// function App() {
//   return (
//     <div id="root">
//       <Header />
//       <div className="main-content">
//         <Banner/>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
