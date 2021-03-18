import React from "react"
import { Link } from "react-router-dom"
import "./Signs.css"

export const SignsCard = ({sign}) => (
    <section className="sign">
        <h3 className="sign_image">
            <Link to={`/signs/details/$sign.id}`}>
                {sign.imageUrl}
            </Link>
        </h3>
        <div className="sign_name">Title: {sign.name}</div>
        <div className="sign_title">Title: {sign.title}</div>
        <div className="sign_description">Title: {sign.description}</div>
        <div className="sign_imageUrl">Title: {sign.imageUrl}</div>
        <div className="sign_dateRange">Title: {sign.dateRange}</div>
    </section>
)