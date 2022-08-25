import urinal6 from "./UrinalPhotos/urinal6.JPEG";
const Level6 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 6</h1>
      <div className="format">
        <p className="instruction">Gun to your head, where are you weeing?</p>
        <div className="sevenUrinal">
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onWin}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
        </div>
        <img className="urinalPicture" src={urinal6} alt="" />
      </div>
    </div>
  );
};

export default Level6;
