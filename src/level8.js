import urinal8 from "./UrinalPhotos/urinal8.JPEG";
const Level8 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 8</h1>
      <div className="format">
        <p className="instruction">
          Quick! Make a snap decision... Where are you weeing!!
        </p>
        <div className="sevenUrinal">
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onWin}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onWin}></div>
          <div className="eachUrinal" onClick={onLose}></div>
        </div>
        <img className="urinalPicture" src={urinal8} alt="" />
      </div>
    </div>
  );
};

export default Level8;
