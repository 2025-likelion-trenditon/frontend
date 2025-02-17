import {useNavigate} from "react-router-dom";
import {ReactComponent as Guide_main} from "../../assets/img/main/main_mypage.svg";
import {ReactComponent as BackButton} from "../../assets/img/guide/BackButton.svg";
import {useState} from "react";

const initialDummy = [
    {initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요."},
    {initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요."},
    {initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요."},
    {initial: "다낭", content: "다낭은 아름다운 해변과 바나힐, 용다리로 유명한 베트남 휴양 도시에요."},
];

const Guide = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("cloth");

    return (
        <div className="guide_wrapper">
            <header className="guide_header">
                <button onClick={() => navigate("/")}>
                    <BackButton/>
                </button>
                <h2>도감</h2>
                <button onClick={() => navigate("/mypage")}>
                    <Guide_main/>
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
                        <div></div>
                    ) : (
                        initialDummy.map((item, index) => (
                            <div key={index} className="guide_main_section_initial_container">
                                <p>{item.initial}</p>
                                <br/>
                                <p>: {item.content}</p>
                            </div>
                        ))
                    )}
                </section>
            </main>

        </div>
    )
}

export default Guide