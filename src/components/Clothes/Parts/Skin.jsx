import React from 'react';
import Skin01 from '../../../assets/img/clothes/skin_light.png';
import Skin02 from '../../../assets/img/clothes/skin_middle.png';
import Skin03 from '../../../assets/img/clothes/skin_dark.png';

const Skin = ({ Cha01, Cha02, Cha03, onDragStart }) => {
    return (
        <div className='Skin_wrap'>
            <img 
                draggable 
                onDragStart={(e) => onDragStart(e, 'skin', Cha01)} 
                className='cha03' 
                src={Skin01} 
                alt='light skin' 
            />
            <img 
                draggable 
                onDragStart={(e) => onDragStart(e, 'skin', Cha02)} 
                className='cha03' 
                src={Skin02} 
                alt='middle skin' 
            />
            <img 
                draggable 
                onDragStart={(e) => onDragStart(e, 'skin', Cha03)} 
                className='cha03' 
                src={Skin03} 
                alt='dark skin' 
            />
        </div>
    );
};

export default Skin;