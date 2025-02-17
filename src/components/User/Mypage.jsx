import React from "react";
import Topbar from "../Topbar/Topbar";
import MypageImg from "../../assets/img/main_mypage.svg";

export const USER = {
  result: {
    data: [
      {
        image: "",
        nickname: "이땃쥐",
        score: 999999999,
      },
    ],
  },
};

const Mypage = () => {
  return (
    <div className="Mypage_wrap">
      {/* 탑바 */}
      <Topbar title={"내 정보"} />

      <div className="Mypage_container">
        {/* 사진 및 닉네임 */}
        <div className="userInfo">
          <div>
            <img src={MypageImg} />
          </div>
          <p>{USER.result.data[0].nickname}</p>
        </div>

        {/* 점수 */}
        <div className="score">
          <p>얻은 점수</p>
          <p className="score_txt">{USER.result.data[0].score.toLocaleString()}점</p>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
