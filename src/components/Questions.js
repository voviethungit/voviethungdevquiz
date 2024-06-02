import React, { useState } from "react";
import QuestionComp from "./QuestionComp";
import question from "./question";
import { Link } from "react-router-dom";

const Questions = ({ answer, setAnswer }) => {
  const [number, setNumber] = useState(0);

  const handleAnswer = (id, ans) => {
    let temp = [...answer];
    temp[id] = ans;
    setAnswer([...temp]);
  };

  const handleIncrement = () => {
    if (number === 39) {
      alert("Đây là câu hỏi cuối cùng!!");
      return;
    }
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12">
          <QuestionComp question={question[number]} handleAnswer={handleAnswer} />
          <div className="buttons">
            <button className="btn btn-primary px-4 py-2 fw-bold" onClick={handleDecrement}> Back </button>
            {number < 39 ? (
              <button className="btn btn-success px-4 py-2 fw-bold" onClick={handleIncrement}> Tiếp</button>
            ) : (
              <Link to="/solution">
                <button className="btn btn-info px-4 py-2 fw-bold">Hoàn Thành</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
