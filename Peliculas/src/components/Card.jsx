import { useState } from "react"


const Card = () => {

    const [isVisible, setIsVisible] = useState(false)
    
    const toggleVisibility  =() =>{
        setIsVisible(!isVisible)
    }
    
    
    

return (
    <>
    <section className="allCard">

    <div className="containerCard">
        <div className="image-container">
            <img src="https://i.pinimg.com/236x/20/35/3e/20353e9c2f7dd444eae9cf9a14c38740.jpg" alt="" onClick={toggleVisibility} />
        </div>

        <div className="infoCard" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            <h1>mas infomacion </h1>
        </div>
    </div>
    </section>


    </>
  )
}

export default Card