import Mypage from "../../assets/img/main_mypage.svg";
import Back from "../../assets/img/icon_backBtn.svg";
import { Link } from "react-router-dom";

const Topbar = ({ title }) => {
  return (
    <div className="Topbar_wrap">
      <div className="header">
        <div>
          <Link to="/">
            <img src={Back} />
          </Link>
        </div>

        <div>{title}</div>

        <Link to="/mypage">
          <img src={Mypage} alt="mypage" />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
