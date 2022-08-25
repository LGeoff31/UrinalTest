import urinal2 from "./UrinalPhotos/urinal2.JPEG";
const Level2 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 2</h1>
      <div className="format">
        <p className="instruction">Which urinal would you pee-pee in?</p>
        <div className="sevenUrinal">
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onLose}></div>
          <div className="eachUrinal" onClick={onWin}></div>
        </div>
        <img className="urinalPicture" src={urinal2} alt="" />
      </div>
    </div>
  );
};

export default Level2;
