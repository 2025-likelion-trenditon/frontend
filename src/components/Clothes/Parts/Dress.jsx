import React from 'react'
import Cha01 from '../../../assets/img/clothes/clothes_s01.png'
import Cha02 from '../../../assets/img/clothes/clothes_s02.png'
import Cha03 from '../../../assets/img/clothes/clothes_s03.png'

const Dress = ({setDress, Clo01, Clo02, Clo03}) => {
    return (
        <div className='Dress_wrap'>
            <img onClick={()=>{setDress(Clo02)}} className='cha02' src={Cha02} alt="" />
            <img onClick={()=>{setDress(Clo01)}} className='cha01' src={Cha01} alt="" />
            <img onClick={()=>{setDress(Clo03)}} className='cha03' src={Cha03} alt="" />
        </div>
    )
}

export default Dress