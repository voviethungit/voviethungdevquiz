import React from "react";
import { Link } from "react-router-dom";
import question from "./question";
 
const Result = ({ answer }) => {
  function giveResult() {
    let cnt = 0;
    for (let i = 0; i < 40; i++) {
      if (answer[i] === question[i].ans) cnt++;
    }
    return cnt;
  }
 
  return (
    <div className="container welcome_box">
      <div className="row box">
        <h2>Hoàn Thành </h2>
        <p>Điểm của em là? {giveResult()} / 40</p>
        <Link to="/">
          <button class="btn btn-success px-4 py-2 fw-bold">Trang chủ</button>
        </Link>
      </div>
    </div>
  );
};
 
export default Result;