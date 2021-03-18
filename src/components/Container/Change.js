
import React, { useContext, useEffect, useState } from 'react';
import "../Container/Change.css"
import { HoroscopeContext } from "../horoscope/HoroscopeProvider"
import HoroscopeCard from "../horoscope/HoroscopeCard"


export const HoroscopeChange = ({changeSign}) => {
    const {horoscopes, getHoroscopes} = useContext(HoroscopeContext)

    const signName = (e) => {
        let signon = e.target.id;
        document.getElementById('cur_sign').textContent = signon.charAt(0).toUpperCase() + signon.slice(1);
    }

    const clear = () => {
        document.getElementById('cur_sign').textContent=""
    }

    const change = (e) => {
        let signon = e.target.id;
        changeSign = (signon);
    }

    const [selectedHoroscope, setSelectedHoroscope] = useState([])

    useEffect(() => {
        getHoroscopes()
    }, [])

    useEffect(() => {
        const selected = horoscopes.filter(horoscopes.sign.toLowerCase())
        setSelectedHoroscope(selected)
    }, [])

    return (
    
    <div className="card2">
        <div id="cur_sign" className="currentSignOnHome"></div>
        <div className="flexLeft" id="first">

            <div className="aquariusText">
            <img className="sign" id="aquarius" src="https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/aquarius_zb8hl7.png" onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
           <p>Jan 20 - Feb 18</p>
           </div>

           <div className="ariesText">
            <img className="sign" id="aries" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/aries_fmhx3o.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Mar 21 - Apri 19</p>
            </div>

            <div className="cancerText">
            <img className="sign" id="cancer" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/cancer_el8p2v.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Jun 21 - Jul 22</p>
            </div>
            
            <div className="capricornText">
            <img className="sign" id="capricorn" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/capricorn_jmbwbi.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Dec 22 - Jan 19</p>
           </div>

            <div className="geminiText">
            <img className="sign" id="gemini" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/gemini_onzq1j.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>May 21 - Jun 20</p>
           </div>

            <div className="leoText">
            <img className="sign" id="leo" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/leo_qduvjm.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Jul 23 - Aug 22</p>
            </div>

        </div>
        
        <div className="flexRight" id="second">
            
            <div className="libraText">
            <img className="sign" id="libra" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918427/libra_t5mrnm.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Sep 23 - Oct 22</p>
            </div>

            <div className="piscesText">
            <img className="sign" id="pisces" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/pisces_zetqxi.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Feb 19 - Mar 20</p>
            </div>

            <div className="sagittariusText">
            <img className="sign" id="sagittarius" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/sagittarius_qnnont.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Nov 22 - Dec 21</p>
            </div> 

            <div className="scorpioText">
            <img className="sign" id="scorpio" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/scorpio_p5a7dm.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Oct 23 - Nov 21</p>
            </div>

            <div className="taurusText">
            <img className="sign" id="taurus" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/taurus_qh2xi3.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Apr 20 - May 20</p>
            </div>

            <div className="virgoText">
            <img className="sign" id="virgo" src='https://res.cloudinary.com/dwqyn2atu/image/upload/c_scale,h_150,w_150/v1615918428/virgo_rajuxd.png' onMouseEnter={(e) => signName(e)} onMouseOut={() => clear()} onClick={(e) => change(e)}/>
            <p>Aug 23 - Sep 22</p>
            </div>

            </div>
        <div></div>
        <div className="chooseSignonSignUp"><p>Choose Your Sign</p></div>
        <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
            {selectedHoroscope.map(horoscope => {
                return <HoroscopeCard key={horoscope.id} horoscope={horoscope} />
            })}
         
  </div>
</div>
    
    </div>
    
    )
}


export default HoroscopeChange