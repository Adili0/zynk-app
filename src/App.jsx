import React from 'react';
import './App.css';
import Page3 from './Page3';
import Page2 from './Page2';
import Page4 from './Page4';
import Page5 from './Page5';


const App = () => {
  return (
    <>
      <label className='label'>
        <header className='header'>
          <div>
            <ul>
              <li className='uu'> <strong> Untitled Ui</strong> </li>
              <li>Home</li>
              <li>Products</li>
              <li>Resource</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='image-container'>
            <img
              className='header-img'
              src="/images/WIN_20240809_14_34_30_Pro.jpg"
              alt="logo"
            />
        
          </div>
        </header>
        <div>
          <div className="insidebtn">
            <button>New User</button>
            Checkout the team dashboard
          </div>
          <h1 className='hhh1'>Beautiful analytics to grow smarter</h1>
          <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='demo-sign'>
          <button>demo</button>
          <button>Signup</button>
        </div>
        <div className='fist-page-img'>
          <img src="/images/Screen mockup (REPLACE FILL).png" alt="" />
        </div>
        <Page2/>
        
        <Page3 /> 
        <Page4/>
        <Page5/>
        {/* <Page6/> */}
        
      </label>
    </>
  );
};

export default App;
