import React from 'react'
import Cha01 from '../../../assets/img/clothes/clothes_s01.png'
import Cha02 from '../../../assets/img/clothes/clothes_s02.png'
import Cha03 from '../../../assets/img/clothes/clothes_s03.png'

const Dress = ({onDragStart, Clo01, Clo02, Clo03}) => {
    return (
        <div className="Dress_wrap">
            <img draggable onDragStart={(e) => onDragStart(e, 'dress', Clo01)} src={Cha01} alt="dress1" />
            <img draggable onDragStart={(e) => onDragStart(e, 'dress', Clo02)} src={Cha02} alt="dress2" />
            <img draggable onDragStart={(e) => onDragStart(e, 'dress', Clo03)} src={Cha03} alt="dress3" />
        </div>
    )
}

export default Dress