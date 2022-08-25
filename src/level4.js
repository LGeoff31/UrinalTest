import urinal4 from "./UrinalPhotos/urinal4.JPEG";
const Level4 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 4</h1>
      <div className="format">
        <p className="instruction">Which urinal is the best pee-pee option?</p>
        <div className="sevenUrinal">
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onWin}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
        </div>
        <img className="urinalPicture" src={urinal4} alt="" />
      </div>
    </div>
  );
};

export default Level4;
