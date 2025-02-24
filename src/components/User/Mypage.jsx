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

  const storedData = localStorage.getItem("userData"); // localStorage에서 userData 가져오기
  const user = storedData ? JSON.parse(storedData) : null;
  const id = user?.id || 3; // id 가져오기, 없는경우 기본값 3

  const getMemberInfo = async () => {
    try {
      const response = await axios.get(`https://kavatar-api.duckdns.org/members/${id}`);
      setUserData(response.data);

      if (response.data.data.profileImageUrl) {
        setUploadImg(response.data.data.profileImageUrl);
      }
    } catch (error) {
      console.log("회원 정보 조회 중 에러 발생", error);
    }
  };

  useEffect(() => {
    getMemberInfo();
  }, []);

  const handleImgChange = async (event) => {
    if (event.target.files) {
      const file = event.target.files[0]; // 사용자가 선택한 파일

      const reader = new FileReader();
      reader.onload = function (e) {
        const imgURL = e.target?.result; // 텍스트로 변환된 이미지
        setUploadImg(imgURL);
      };

      reader.readAsDataURL(file);

      await postMemberImg(file);
    }
  };

  // 변경된 이미지 저장
  const postMemberImg = async (file) => {
    try {
      const formData = new FormData();
      formData.append("multipartFile", file);

      const response = await axios.post(`https://kavatar-api.duckdns.org/images/upload/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.data.convertImageUrl) {
        setUploadImg(response.data.data.convertImageUrl);

        await getMemberInfo();
      }
    } catch (error) {
      console.log("사진 변경 중 오류 발생 ", error);
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
