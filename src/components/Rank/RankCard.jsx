import { RANK } from "../../data/rank";
import rankTop3Icon from "../../assets/img/rank_rankTop3Icon.svg";
import rankIcon from "../../assets/img/rank_rankIcon.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";

const RankCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getRanking = async () => {
      try {
        const response = await axios.get(`https://kavatar-api.duckdns.org/members/ranking`);
        setUserData(response.data.data.memberInfoResponses);
      } catch (error) {
        console.log(error);
      }
    };
    getRanking();
  }, []);

  return (
    <>
      {userData?.map((item, idx) => {
        const rankImg = idx < 3 ? rankTop3Icon : rankIcon;
        return (
          <div className="Rank_card" key={item.id}>
            {/* 순위 */}
            <div className="Rank_img">
              <img src={rankImg} />
              <p>{idx + 1}</p>
            </div>

            {/* 사진 및 닉네임 */}
            <div className="Info_wrap">
              {item.profileImageUrl ? <img src={item.profileImageUrl} /> : <div className="Img_box"></div>}
              <p>{item.nickname}</p>
            </div>

            {/* 점수 */}
            <div className="Score_wrap">
              <p>{item.point.toLocaleString()}점</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RankCard;
