import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClothesResult = ({ hat, dress, skin, userId }) => {
    const [score, setScore] = useState(0);
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    };

    useEffect(() => {
        const itemCount = [hat, dress, skin].filter(Boolean).length;
        let newScore = 0;
        if (itemCount === 1 && dress === '' && hat === '') newScore = 5;
        else if (itemCount === 2) newScore = 10;
        else if (itemCount === 3) newScore = 20;
        setScore(newScore);
    }, [hat, dress, skin]);

    const onClothes = () => {
        axios.post('https://kavatar-api.duckdns.org/dress', {
            "memberId": userId,
            "singleDress": dress,
            "accessory": hat,
            "point": score
        })
            .then((res) => {
                if(res.status === 200){
                    alert('저장 완료!')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='ClothesResult_wrap'>
            <div className="main">
                <div className="say">
                    {score === 20 ? (
                        <p className='all'>
                            내 점수는 <strong className='red'>{score}점</strong>이다냥.<br />
                            만점...!! 이 정도면 다들<br />
                            마녀인지 모르고 속을 거다냥!<br />
                        </p>
                    ) : (
                        <p>
                            내 점수는 <strong className='red'>{score}점</strong>이다냥.<br />
                            옷이랑 장신구를 <br />
                            좀 더 신경써봐냥! <br />
                        </p>
                    )}
                </div>
                <img className='hat' src={hat} alt="" />
                <img className='dress' src={dress} alt="" />
                <img className='character' src={skin} alt="" />
            </div>
            <div className="btn_box">
                <button onClick={() => { onClothes() }}>저장하기</button>
                <button onClick={onBack}>마치기</button>
            </div>
        </div>
    );
};

export default ClothesResult;
