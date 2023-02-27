import React from "react";
import Logo from "../1inch.svg";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";
import { useDisconnect } from "wagmi";

function Header(props) {
  const { address, isConnected, connect } = props;
  const { disconnect } = useDisconnect();

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div
          className="connectButton"
          onClick={() => (isConnected ? disconnect() : connect())}
        >
          {isConnected
            ? address.slice(0, 6) + "..." + address.slice(-4)
            : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header;
