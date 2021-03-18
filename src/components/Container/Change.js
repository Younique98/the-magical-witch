
import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { HoroscopeContext } from "../horoscope/HoroscopeProvider"
import HoroscopeCard from "../horoscope/HoroscopeCard"
import "../Container/Change.css"


// 

export const HoroscopeChange = () => {
    const {horoscopes, getHoroscopes} = useContext(HoroscopeContext)
// getHoroscopes must have a sign passed through it

    useEffect(() => {
        getHoroscopes()
    }, [])

    return (
    
    <div className="card2">
        <div id="cur_sign" className="currentSignOnHome"></div>
        <div className="flexLeft" id="first">

            <div className="aquariusText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="aquarius" src="https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/aquarius_zb8hl7.png"/></Link>
           <h2 className="signTitle">Aquarius</h2>
           <p>Jan 20 - Feb 18</p>
           </div>

           <div className="ariesText">
           <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="aries" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/aries_fmhx3o.png'/></Link>
            <h2 className="signTitle">Aries</h2>
            <p>Mar 21 - Apri 19</p>
            </div>

            <div className="cancerText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="cancer" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/cancer_el8p2v.png'/></Link>
            <h2 className="signTitle">Cancer</h2>
            <p>Jun 21 - Jul 22</p>
            </div>
            
            <div className="capricornText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="capricorn" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/capricorn_jmbwbi.png'/></Link>
            <h2 className="signTitle">Capricorn</h2>
            <p>Dec 22 - Jan 19</p>
           </div>

            <div className="geminiText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="gemini" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/gemini_onzq1j.png'/></Link>
            <h2 className="signTitle">Gemini</h2>
            <p>May 21 - Jun 20</p>
           </div>

            <div className="leoText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="leo" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/leo_qduvjm.png'/></Link>
            <h2 className="signTitle">Leo</h2>
            <p>Jul 23 - Aug 22</p>
            </div>

        </div>
        
        <div className="flexRight" id="second">
            
            <div className="libraText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="libra" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/libra_t5mrnm.png' /></Link>
            <h2 className="signTitle">Libra</h2>
            <p>Sep 23 - Oct 22</p>
            </div>

            <div className="piscesText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="pisces" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/pisces_zetqxi.png'/></Link>
            <h2 className="signTitle">Pisces</h2>
            <p>Feb 19 - Mar 20</p>
            </div>

            <div className="sagittariusText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="sagittarius" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/sagittarius_qnnont.png'/></Link>
            <h2 className="signTitle">Sagittarius</h2>
            <p>Nov 22 - Dec 21</p>
            </div> 

            <div className="scorpioText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="scorpio" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/scorpio_p5a7dm.png'/></Link>
            <h2 className="signTitle">Scorpio</h2>
            <p>Oct 23 - Nov 21</p>
            </div>

            <div className="taurusText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="taurus" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/taurus_qh2xi3.png'/></Link>
            <h2 className="signTitle">Taurus</h2>
            <p>Apr 20 - May 20</p>
            </div>

            <div className="virgoText">
            <Link to="/yourHoroscopeReading" onClick={() => history.pushState("/horoscopes/yourHoroscopeReading")}><img className="sign" id="virgo" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/virgo_rajuxd.png'/></Link>
            <h2 className="signTitle">Virgo</h2>
            <p>Aug 23 - Sep 22</p>
            </div>

            </div>
        <div></div>
       
    </div>
    
    )
}


export default HoroscopeChange