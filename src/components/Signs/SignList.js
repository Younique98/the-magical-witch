import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { SignContext } from "./SignProvider"
import { Sign } from "./Sign"

export const SignList = () => {
    const history = useHistory()
    const {signs, getSigns} = useContext(SignContext)

    useEffect(() => {
        getSigns()
    }, [])

    return (
        <>
        <header className="sign__header">
            <h2>Horoscope Sign</h2>
        </header>
        <div className="signs">
            {
            signs.map(sign =>{
                {console.log(sign)}
                return <Sign key={sign.id} sign={sign} />
            })
            }
        </div>
        </>
    )
}