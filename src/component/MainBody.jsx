import React, { useState } from "react";

export default function MainBody() {
    const style = {
        display: 'block',
        marginTop: '8px',
        marginBottom: '8px'
    }
    const [flightType,setFlightType] = useState("One way");
    const [flightChng ,setFlightChng] = useState(false);
    const [openDropDown,setOpenDropDown] = useState(false);
    function changeFlightType(){
        flightType === 'One way' ? setFlightType("Round Trip") : setFlightType('One way');
        setFlightChng(!flightChng);
    }
    function changeopenDropDown(){
        setOpenDropDown(!openDropDown);
    }
  return (
    <div className="main">
      <div className="centre">
        <div className="content">
          <div className="rowLeft">
            <div style={style} className="hoverDiv">
              <div className="flightSec">
                <img
                  className="leftIcon"
                  src="https://cdn-icons-png.flaticon.com/128/10521/10521356.png"
                  alt="flightIcon"
                />
                <h5 className="leftText">Flights</h5>
              </div>
              <div className="flightSec">
              <img
                  className="leftIcon"
                  src="https://cdn-icons-png.flaticon.com/128/17746/17746537.png"
                  alt="flightIcon"
                />
                <h5 className="leftText">Hotels</h5>
              </div>
              <div className="flightSec">
              <img
                  className="leftIcon"
                  src="https://cdn-icons-png.flaticon.com/128/3124/3124381.png"
                  alt="flightIcon"
                />
                <h5 className="leftText">Bus</h5>
              </div>
              <div className="flightSec">
              <img
                  className="leftIcon"
                  src="https://cdn-icons-png.flaticon.com/128/8480/8480947.png"
                  alt="flightIcon"
                />
                <h5 className="leftText">Offers</h5>
              </div>
              <div className="flightSec">
              <img
                  className="leftIcon"
                  src="https://cdn-icons-png.flaticon.com/128/1063/1063376.png"
                  alt="flightIcon"
                />
                <h5 className="leftText">My Trips</h5>
              </div>
              <div className="flightSec">
              <img
                  className="leftIcon"
                  src="https://cdn-icons-png.flaticon.com/128/839/839961.png"
                  alt="flightIcon"
                />
                <h5 className="leftText">Support</h5>
              </div>
            </div>
          </div>
          <div className="rowRight">
            <div className="rightStart">
                <div className="gradient-div">
                    <div className="gra-start">
                        <h1 className="mainHeadOne" style={{fontSize:"30px"}}> Search flights</h1>
                        <div className="mainHeadtwo"><h2>Enjoy hassle free bookings with Cleartrip</h2></div>
                    </div>
                    <div className="main-booking">
                        <div className="sec-main-booking">
                            {/* first line */}
                            <div className="firstLine">
                                <div className="fr-sec" onClick={changeopenDropDown}>
                                    {flightType === 'One way' ? <img className="frst-arr" src="https://cdn-icons-png.flaticon.com/128/664/664866.png" alt="arrow" /> : <img className="frst-arr" src="https://cdn-icons-png.flaticon.com/128/483/483339.png" alt="arrow" />}
                                    <span className="one-way">{flightType}</span>
                                    <span>
                                        <img className="down-arr" src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt="down"/>
                                    </span>
                                    {openDropDown? 
                                        <div className="fr-sec">
                                            <div className="box-adj">
                                                <li onClick= {changeFlightType} className="li-item">
                                                    {flightType ==='One way'? 
                                                    <img className= "leftIcon tickIcon" src="https://cdn-icons-png.flaticon.com/128/12836/12836714.png" alt="right"/>:<span style={{display:'inline-block'}} className= "leftIcon"></span>}
                                                    <span style={{marginLeft: '12px'}} >One way</span>
                                                </li>
                                                <li onClick= {changeFlightType} className="li-item">
                                                {flightType ==='Round Trip'? 
                                                    <img className= "leftIcon tickIcon" src="https://cdn-icons-png.flaticon.com/128/12836/12836714.png" alt="right"/>:<span style={{display:'inline-block'}} className= "leftIcon"></span>}
                                                   <span style={{marginLeft: '12px'}}>Round Trip</span> 
                                                </li>
                                            </div>
                                        </div>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
