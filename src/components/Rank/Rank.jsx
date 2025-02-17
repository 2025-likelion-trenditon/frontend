import React from "react";
import Topbar from "../Topbar/Topbar";
import RankCard from "./RankCard";

const Rank = () => {
  return (
    <div className="Rank_wrap">
      {/* 탑바 */}
      <Topbar title={"최고의 마녀 순위"} />

      {/* 랭킹 */}
      <div className="Rank_container">
        <RankCard />
      </div>
    </div>
  );
};

export default Rank;
