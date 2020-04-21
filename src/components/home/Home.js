import React from 'react';
import './Home.css';
import board2 from '../../images/board2.jpg';
// import background from '../../background.jpg';
// import Para from '../para/Para';

class Home extends React.Component{
  render(){

    return(
      <div>
        <h1 className="heading">H o m e </h1>
        <div className="paradiv">
          We elevate the surfing experience with innovative designs, new materials and advanced construction methods
        </div>
        <img style={{width: '80%', height: 'auto', margin:'auto', display:'block'}} src={board2} alt="surfboard"/>

      </div>
    )
  }
}
export default Home;