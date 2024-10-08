import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-column">
                        {/* <div className="footer-logo">
                            <img src="path/to/logo.png" alt="Acharya Dhirendra Krishna Shastri" />
                        </div> */}
                        <div className="footer-description">
                            <p>
                                The website is dedicated to showcasing the life, teachings, and events of Acharya Dhirendra Krishna Shastri, 
                                also known as Bageshwar Dham Sarkar or Maharaj, who has touched the lives of millions with his spiritual wisdom and divine presence. 
                                <a href="/read-more"> Read More</a>
                            </p>
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className="footer-subscribe">
                            <h3>For Daily Updates</h3>
                            <input type="email" placeholder="Email" />
                            <button>SUBSCRIBE NOW</button>
                        </div>
                        <div className="footer-socials">
                            <a href="#"><i className="fab fa-twitter">twitter</i></a>
                            <a href="#"><i className="fab fa-youtube">youtube</i></a>
                            <a href="#"><i className="fab fa-whatsapp">whatsapp</i></a>
                            <a href="#"><i className="fab fa-instagram">instagram</i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className="footer-topics">
                            <h3>Featured Topics</h3>
                            <ul>
                                <li>Sanyasi Baba Divine Power Encounters With Lord Hanuman</li>
                                <li>Who Is Bageshwar Dham Chair: Acharya Dhirendra Krishna Shastri Ji</li>
                                <li>Global design components in modern web layouts</li>
                                <li>Layout perspectives in Gutenberg. Keeping it simple</li>
                                <li>Daily design algorithms for a better workflow</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
       
    );
   
}

export default Footer;


























// import React from 'react'
// import '../App.css'

// export default function Header() {
//   return (
//     <>
//     <div className='footer-one'>
//     The website is dedicated to showcasing the life, teachings, and events of Acharya Dhirendra Krishna Shastri, also known as Bageshwar Dham Sarkar or Maharaj, who has touched the lives of millions with his spiritual wisdom and divine presence.
//     </div>
//     </>
//   )
// }
 {/* <div className="footer-logo">
                    <img src="path/to/logo.png" alt="Acharya Dhirendra Krishna Shastri" />
                </div> */}