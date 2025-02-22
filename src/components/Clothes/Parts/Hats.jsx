import React from 'react'
import Hats01 from '../../../assets/img/clothes/hat_s01.png'
import Hats02 from '../../../assets/img/clothes/hat_s02.png'
import Hats03 from '../../../assets/img/clothes/hat_s03.png'

const Hats = ({onDragStart, Hat01, Hat02, Hat03}) => {
    return (
        <div className="Hats_wrap">
            <img draggable onDragStart={(e) => onDragStart(e, 'hat', Hat01)} src={Hats01} alt="hat1" />
            <img draggable onDragStart={(e) => onDragStart(e, 'hat', Hat02)} src={Hats02} alt="hat2" />
            <img draggable onDragStart={(e) => onDragStart(e, 'hat', Hat03)} src={Hats03} alt="hat3" />
        </div>
    )
}

export default Hats

