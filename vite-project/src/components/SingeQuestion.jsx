import React, { useState } from "react";
import { Minus } from "../images/icon-minus.svg";
import { Plus } from "../images/icon-plus.svg";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div>
        <div>
          <h2
            className="cursor-pointer"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <Plus />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <Minus />
                </button>
              </li>
            )}
          </ul>
        </div>

        <div>
          {showAnswer && <p>{answer}</p>}
        </div>
      </div>
    </>
  );
}