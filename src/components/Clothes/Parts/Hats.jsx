import React from 'react'
import Hats01 from '../../../assets/img/clothes/hat_s01.png'
import Hats02 from '../../../assets/img/clothes/hat_s02.png'
import Hats03 from '../../../assets/img/clothes/hat_s03.png'

const Hats = ({setHat, Hat01, Hat02, Hat03}) => {
    return (
        <div className='Hats_wrap'>
            <img onClick={()=>{setHat(Hat01)}} className='cha03' src={Hats01} alt="" />
            <img onClick={()=>{setHat(Hat03)}} className='cha03' src={Hats03} alt="" />
            <img onClick={()=>{setHat(Hat02)}} className='cha03' src={Hats02} alt="" />
        </div>
    )
}

export default Hats