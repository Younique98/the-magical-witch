import React, { useContext} from "react"
import { Link } from "react-router-dom";
import { SignContext } from "./SignProvider";
import "./Signs.css"

export const Sign = ({sign}) => {


    return (
        <section className="sign">
            
            <Link to={`horoscope/${sign.name}`.toLowerCase()}><img className="sign__image" src={sign.imageUrl}/></Link>
            <h4 className="sign__name">Sign Name : {sign.name}</h4>
            <h4 className="sign__Title">Title : {sign.title}</h4>
            <h4 className="sign__description">Description : {sign.description}</h4>
            <h4 className="sign__dateRange">Date Range : {sign.dateRange}</h4>
        </section>
    )

}