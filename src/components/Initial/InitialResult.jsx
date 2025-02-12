import React, { useState } from 'react'

const InitialResult = ({ setResult }) => {
    const [answer, setAnswer] = useState('answer')

    return (
        <div className='InitialResult_wrap'>
            {answer === 'answer' ? (
                <div className='answer'>
                    <h4>정답!</h4>
                    <h3>만리장성</h3>
                    <div className='text'>
                        <p>:</p>
                        <p>만리장성은 중국을 대표하는 세계 문화유산으로<br />북방 민족의 잠입을 막기 위해 건설된 거대한 방어 성벽이에요.</p>
                    </div>
                    <div className='btn'>
                        <button onClick={() => { setResult(false) }}>다음 문제</button>
                    </div>
                </div>
            ) : (
                <div className='result'>
                    <h4>- 총점 -</h4>
                    <h2>50점</h2>
                    <div>
                        <button>다시하기</button>
                        <button>마치기</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InitialResult