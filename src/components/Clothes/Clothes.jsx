import React, { useState } from 'react'
import Back from '../../assets/img/initial/initial_backwhite.svg'
import Cha01 from '../../assets/img/clothes/character_light.png'
import Cha02 from '../../assets/img/clothes/character_middle.png'
import Cha03 from '../../assets/img/clothes/character_dark.png'
import Clo01 from '../../assets/img/clothes/clothes_01.png'
import Clo02 from '../../assets/img/clothes/clothes_02.png'
import Clo03 from '../../assets/img/clothes/clothes_03.png'
import Hat01 from '../../assets/img/clothes/hat_01.png'
import Hat02 from '../../assets/img/clothes/hat_02.png'
import Hat03 from '../../assets/img/clothes/hat_03.png'
import Dress from './Parts/Dress'
import Hats from './Parts/Hats'
import Skin from './Parts/Skin'
import ClothesGuide from './ClothesGuide'
import InitialStop from '../Initial/InitialStop'
import ClothesResult from './ClothesResult'

const Clothes = () => {
    const [guide, setGuide] = useState(false)
    const [stop, setStop] = useState(false)
    const [skin, setSkin] = useState(Cha01)
    const [dress, setDress] = useState()
    const [hat, setHat] = useState()
    const [done, setDone] = useState(false)

    return (
        <>
            <div className='Clothes_wrap'>
                <button onClick={() => { setStop(true) }}><img src={Back} alt="back button" /></button>
                <Dress setDress={setDress} Clo01={Clo01} Clo02={Clo02} Clo03={Clo03} />
                <Hats setHat={setHat} Hat01={Hat01} Hat02={Hat02} Hat03={Hat03} />
                <Skin setSkin={setSkin} Cha01={Cha01} Cha02={Cha02} Cha03={Cha03} />
                <div className="main">
                    <img className='hat' src={hat} alt="" />
                    <img className='dress' src={dress} alt="" />
                    <img className='character' src={skin} alt="" />
                </div>
                <div className='btn_box'>
                    <button onClick={() => { setSkin(Cha01); setDress(); setHat() }}>다시하기</button>
                    <button onClick={() => { setDone(true) }}>완료</button>
                </div>
            </div>
            {guide ? (<ClothesGuide setGuide={setGuide} />) : (<></>)}
            {stop ? (<InitialStop setStop={setStop} />) : (<></>)}
            {done ? (<ClothesResult hat={hat} dress={dress} skin={skin}/>) : (<></>)}
        </>
    )
}

export default Clothes