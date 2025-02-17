import { RANK } from "../../data/rank";
import rankTop3Icon from "../../assets/img/rank_rankTop3Icon.svg";
import rankIcon from "../../assets/img/rank_rankIcon.svg";
import { useState } from "react";

const RankCard = () => {
  return (
    <>
      {RANK.result.data.map((item) => {
        const rankImg = item.rank <= 3 ? rankTop3Icon : rankIcon;
        return (
          <div className="Rank_card" key={item.rank}>
            {/* 순위 */}
            <div className="Rank_img">
              <img src={rankImg} />
              <p>{item.rank}</p>
            </div>

            {/* 사진 및 닉네임 */}
            <div className="Info_wrap">
              {item.image ? <img src={item.image} /> : <div className="Img_box"></div>}
              <p>{item.nickname}</p>
            </div>

            {/* 점수 */}
            <div className="Score_wrap">
              <p>{item.score.toLocaleString()}점</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RankCard;
