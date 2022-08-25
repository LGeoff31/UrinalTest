import urinal1 from "./UrinalPhotos/urinal1.JPEG";
import peePuddle from "./peePuddple.png";
const Level1 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 1</h1>
      <div className="format">
        <p className="instruction">
          Which urinal should you pee in in this situation?
        </p>
        <div className="sevenUrinal">
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onWin}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
        </div>
        <img className="urinalPicture" src={urinal1} alt="" />
        <img className="pee" src={peePuddle} alt="" />
      </div>
    </div>
  );
};

export default Level1;
