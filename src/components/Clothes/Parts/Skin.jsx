import React from 'react'
import Skin01 from '../../../assets/img/clothes/skin_light.png'
import Skin02 from '../../../assets/img/clothes/skin_middle.png'
import Skin03 from '../../../assets/img/clothes/skin_dark.png'

const Skin = ({setSkin, Cha01, Cha02, Cha03}) => {
    
    return (
        <div className='Skin_wrap'>
            <img onClick={()=>{setSkin(Cha01)}} className='cha03' src={Skin01} alt="" />
            <img onClick={()=>{setSkin(Cha02)}} className='cha03' src={Skin02} alt="" />
            <img onClick={()=>{setSkin(Cha03)}} className='cha03' src={Skin03} alt="" />
        </div>
    )
}

export default Skin