import "./App.css";
import React, { useState } from "react";
import Level1 from "./level1.js";
import Level2 from "./level2.js";
import Level3 from "./level3.js";
import Level4 from "./level4.js";
import Level5 from "./level5.js";
import Level6 from "./level6.js";
import Level7 from "./level7.js";
import Level8 from "./level8.js";
import correct from "./correct.mp3";
import wrong from "./wrong.mp3";
import IntroPage from "./introPage.js";
import ResultPage from "./resultPage.js";
const App = () => {
  const pages = {
    INTRO: "INTRO",
    LEVEL1: "LEVEL1",
    LEVEL2: "LEVEL2",
    LEVEL3: "LEVEL3",
    LEVEL4: "LEVEL4",
    LEVEL5: "LEVEL5",
    LEVEL6: "LEVEL6",
    LEVEL7: "LEVEL7",
    LEVEL8: "LEVEL8",
    RESULT: "RESULT",
  };
  const [currentPage, setCurrentPage] = useState(pages.INTRO);
  const nextPage = () => {
    switch (currentPage) {
      case pages.INTRO:
        setCurrentPage(pages.LEVEL1);
        break;
      case pages.LEVEL1:
        setCurrentPage(pages.LEVEL2);
        break;
      case pages.LEVEL2:
        setCurrentPage(pages.LEVEL3);
        break;
      case pages.LEVEL3:
        setCurrentPage(pages.LEVEL4);
        break;
      case pages.LEVEL4:
        setCurrentPage(pages.LEVEL5);
        break;
      case pages.LEVEL5:
        setCurrentPage(pages.LEVEL6);
        break;
      case pages.LEVEL6:
        setCurrentPage(pages.LEVEL7);
        break;
      case pages.LEVEL7:
        setCurrentPage(pages.LEVEL8);
        break;
      case pages.LEVEL8:
        setCurrentPage(pages.RESULT);
        break;
      default:
        setCurrentPage(pages.LEVEL1);
        break;
    }
  };
  var correctEffect = new Audio(correct);
  var wrongEffect = new Audio(wrong);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const onWin = () => {
    setCorrectAnswers((previousNum) => {
      return previousNum + 1;
    });
    correctEffect.play();
    console.log(`YOU CHCOOSE RIGHT, counter:${correctAnswers}`);
    nextPage();
  };
  const onLose = () => {
    wrongEffect.play();
    console.log("YOU CHOOSE WRONG");
    nextPage();
  };
  return (
    <div className="App">
      {(() => {
        switch (currentPage) {
          case pages.INTRO:
            return <IntroPage nextPage={nextPage} onWin={onWin} />;
          case pages.LEVEL1:
            return <Level1 onWin={onWin} onLose={onLose} />;
          case pages.LEVEL2:
            return <Level2 onWin={onWin} onLose={onLose} />;
          case pages.LEVEL3:
            return <Level3 onWin={onWin} onLose={onLose} />;
          case pages.LEVEL4:
            return <Level4 onWin={onWin} onLose={onLose} />;
          case pages.LEVEL5:
            return <Level5 onWin={onWin} onLose={onLose} />;
          case pages.LEVEL6:
            return <Level6 onWin={onWin} onLose={onLose} />;
          case pages.LEVEL7:
            return <Level7 onWin={onWin} onLose={onLose} />;
          case pages.LEVEL8:
            return <Level8 onWin={onWin} onLose={onLose} />;
          case pages.RESULT:
            return <ResultPage correctAnswers={correctAnswers} />;
          default:
            return <div>error</div>;
        }
      })()}
    </div>
  );
};

export default App;
