import React from 'react';
import './About.css';
import Images from '../images/Images';
import Para from '../para/Para';

class About extends React.Component{
  render(){
    return(
      <div>
          <h1 className="heading"> About  </h1>
          <Para/>
          <Images/>
      </div>
    )
  }

}
export default About;