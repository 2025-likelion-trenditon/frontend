import { RANK } from "../../data/rank";
import rankTop3Icon from "../../assets/img/rank_rankTop3Icon.svg";
import rankIcon from "../../assets/img/rank_rankIcon.svg";
import { useState } from "react";

const RankCard = () => {
  const [rankImg, setRankImg] = useState(rankTop3Icon);

  return (
    <>
      {RANK.result.data.map((item) => (
        <div className="Rank_card">
          {/* 순위 */}
          <div>
            <img src={rankImg} alt="tkwlsdjqtdma" />
          </div>

          {/* 사진 및 닉네임 */}
          <div className="Info_wrap">
            {item.image ? <img src={item.image} /> : <div className="Img_box"></div>}
            <p>{item.nickname}</p>
          </div>

          {/* 점수 */}
          <div className="Score_wrap">
            <p>{item.score}점</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RankCard;
