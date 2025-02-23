import React, { useEffect, useState } from "react";
import Topbar from "../Topbar/Topbar";
import MypageImg from "../../assets/img/main/main_mypage.svg";
import ChangeImg from "../../assets/img/mypage_changeImg.png";

import axios from "axios";
import { useParams } from "react-router-dom";

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
  const [userData, setUserData] = useState(null); // 회원 정보 관리
  const [uploadImg, setUploadImg] = useState(""); // 업로드한 이미지 url
  const { id } = useParams();

  useEffect(() => {
    const getMemberInfo = async () => {
      try {
        const response = await axios.get(`https://kavatar-api.duckdns.org/members/3`); // id로 수정 예정
        setUserData(response.data);
      } catch (error) {
        console.log("회원 정보 조회 중 에러 발생", error);
      }
    };

    getMemberInfo();
  }, []);

  const handleImgChange = (event) => {
    if (event.target.files) {
      const file = event.target.files[0]; // 사용자가 선택한 파일

      const reader = new FileReader();
      reader.onload = function (e) {
        const imgURL = e.target?.result; // 텍스트로 변환된 이미지
        setUploadImg(imgURL);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="Mypage_wrap">
      {/* 탑바 */}
      <Topbar title={"내 정보"} />

      <div className="Mypage_container">
        {/* 사진 및 닉네임 */}
        <div className="userInfo">
          {/* 사진 */}
          <div className="userProfile">{uploadImg ? <img src={uploadImg} /> : <img src={MypageImg} />}</div>

          {/* 사진 변경 */}
          <div className="uploadBtn">
            <label htmlFor="file-input">
              <div>
                <img src={ChangeImg} /> {/* 이미지 변경 버튼 */}
              </div>
            </label>
            <input id="file-input" accept="image/png, image/jpeg" type="file" onChange={handleImgChange}></input>
          </div>

          <p>{userData?.data.nickname}</p>
        </div>

        {/* 점수 */}
        <div className="score">
          <p>얻은 점수</p>
          <p className="score_txt">{userData?.data.point.toLocaleString()}점</p>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
