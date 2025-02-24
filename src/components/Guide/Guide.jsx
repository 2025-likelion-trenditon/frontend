import { useNavigate } from "react-router-dom";
import { ReactComponent as Guide_main } from "../../assets/img/main/main_mypage.svg";
import { ReactComponent as BackButton } from "../../assets/img/guide/BackButton.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const initialDummy = [
    { initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요." },
    { initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요." },
    { initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요." },
    { initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요." },
];

const Guide = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("cloth");
    const [initialList, setInitialList] = useState([]);
    const [dressList, setDressList] = useState([]);
    const userId = JSON.parse(localStorage.getItem('userData')).id;

    const getInitialList = async () => {
        try {
            const result = await axios.get(`https://kavatar-api.duckdns.org/initial-consonant/${userId}`);
            setInitialList(result.data.data.initialConsonantResults);
        } catch (error) {
            console.log("도감 조회 에러", error);
        }
    }

    const getDressList = async () => {
        try {
            const result = await axios.get(`https://kavatar-api.duckdns.org/dress/${userId}`);
            setDressList(result.data.data.dressInfoResponses);
        } catch (error) {
            console.log("도감 조회 에러", error);
        }
    }

    useEffect(() => {
        getInitialList();
        getDressList();
    }, []);

    return (
        <div className="guide_wrapper">
            <header className="guide_header">
                <button onClick={() => navigate("/")}>
                    <BackButton />
                </button>
                <h2>도감</h2>
                <button onClick={() => navigate("/mypage")}>
                    <Guide_main />
                </button>
            </header>
            <main className="guide_main">
                <ul className="guide_main_ul">
                    <li className={selectedCategory === "cloth" ? "active" : ""}
                        onClick={() => setSelectedCategory("cloth")}
                    >
                        옷 입히기
                    </li>
                    <li className={selectedCategory === "initial" ? "active" : ""}
                        onClick={() => setSelectedCategory("initial")}
                    >
                        초성 맞히기
                    </li>
                </ul>
                <section className="guide_main_section">
                    {selectedCategory === "cloth" ? (
                        dressList.map((item) => (
                            <div className="clothes_box">
                                <img className="accessory" src={item.accessory} alt="" />
                                <img className="singleDress" src={item.singleDress} alt="" />
                                <img className="skinColor" src={item.skinColor} alt="" />
                            </div>
                        ))
                    ) : (
                        initialList.map((item) => (
                            <div key={item.initialConsonantId} className="guide_main_section_initial_container">
                                <p>{item.question}</p>
                                <br />
                                <p>: {item.explanation}</p>
                            </div>
                        ))
                    )}
                </section>
            </main>

        </div>
    )
}

export default Guide