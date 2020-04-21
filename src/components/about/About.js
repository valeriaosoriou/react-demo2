import React from 'react';
import './About.css';
import Images from '../images/Images';
// import Para from '../para/Para';

class About extends React.Component{
  render(){
    return(
      <div className="aboutContainer">
          <h1 className="heading">A b o u t </h1>
          <p className="parabout">We are a family business which started years ago when dad lived in California during the late 60's<br></br>
          When dad meet our mother in the US they decied to start a new life in NZ, now we are two brothers looking after his dream.</p>
          {/* <Para/> */}
          <Images/>
      </div>
    )
  }

}
export default About;