import React from "react";

export default function NavBar() {
    function handleRefresh(){
        window.location.reload();
    }
    return(
        <>
            <div className="header">
                <div className="centre">
                    <img onClick={handleRefresh} className="headerIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ykdBAr-jnXX-oIA0xCMYk5rFFvar6m_7UA&s" alt="cleartirp" />
                    <div className="auth">
                        <div className="divLogin">
                            <h4 className="login">Log in / Sign up</h4>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}