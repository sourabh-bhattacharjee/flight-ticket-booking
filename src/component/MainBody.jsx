import React from "react";

export default function MainBody() {
    const style = {
        display: 'block',
        marginTop: '8px',
        marginBottom: '8px'
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
