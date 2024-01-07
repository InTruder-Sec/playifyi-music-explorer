import React, { useContext } from "react";
import "./Nav-Bar.css";
import { MainWindow } from "./Main";

function NavBar() {
  const setWindow = useContext(MainWindow);

  function PreWindow() {
    setWindow(() => {
      return {
        home: true,
        playwin: false,
      };
    });
    document.getElementById("prev--arrow").style.opacity = "0.5";
    document.getElementById("prev--arrow").style.cursor = "not-allowed";
  }

  return (
    <div className="NavBar">
      <div className="change--display">
        <div className="change--arrow" id="prev--arrow" onClick={PreWindow}>
          {"<"}
        </div>
        <div
          className="change--arrow"
          id="next--arrow"
          style={{ display: "none" }}
          // onClick={ForwardWindow}
        >
          {">"}
        </div>
      </div>
      <div className="nb--account">
        <div className="sign-in--btn">Sign up</div>
        <div className="login--btn">Log in</div>
      </div>
    </div>
  );
}

export default NavBar;
