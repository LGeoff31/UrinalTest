import urinal5 from "./UrinalPhotos/urinal5.JPEG";
import peePuddle from "./peePuddple.png";
const Level5 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 5</h1>
      <div className="format">
        <p className="instruction">
          Quick! Make a snap decision... Where are you weeing!!
        </p>
        <div className="sevenUrinal">
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onWin}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="peePuddle">
            <div className="eachUrinal" onClick={onLose}></div>
            <img className="peeImage" src={peePuddle} alt="" />
          </div>
        </div>
        <img className="urinalPicture" src={urinal5} alt="" />
      </div>
    </div>
  );
};

export default Level5;
