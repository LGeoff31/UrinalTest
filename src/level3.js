import urinal3 from "./UrinalPhotos/urinal3.JPEG";
const Level3 = (props) => {
  const onWin = props.onWin;
  const onLose = props.onLose;
  return (
    <div>
      <h1 className="topLabel">Level 3</h1>
      <div className="format">
        <p className="instruction">
          Which urinal is most socially acceptable to use in this instance?
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
        <img className="urinalPicture" src={urinal3} alt="" />
      </div>
    </div>
  );
};

export default Level3;
