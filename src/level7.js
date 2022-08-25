import urinal7 from "./UrinalPhotos/urinal7.JPEG";
import peePuddle from "./peePuddple.png";
const Level7 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 7</h1>
      <div className="format">
        <p className="instruction">Watch Out!... Where are you weeing!!</p>
        <div className="sevenUrinal">
          <div className="eachUrinal" onClick={onWin}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="peePuddle">
            <div className="eachUrinal" onClick={onLose}></div>
            <img className="peeImage" src={peePuddle} alt="" />
          </div>
        </div>
        <img className="urinalPicture" src={urinal7} alt="" />
      </div>
    </div>
  );
};

export default Level7;
