
import { useState } from 'react';

const Card = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    }
return (
    <>
 <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <div className="poster" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src="https://i.pinimg.com/564x/b1/2b/45/b12b4552fe9acb4b6c6d956deeabf38d.jpg" alt="Poster de la película" />
      </div>
      <div className="details">
        <h2>Título de la Película</h2>
        <p>Año: 2024</p>
        <p>Director: Nombre del Director</p>
        <p>Género: Género de la Película</p>
      </div>
    </div>



    </>
  )
}

export default Card