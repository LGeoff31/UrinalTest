import introUrinalPicture from "./introUrinalPicture.jpeg";
const IntroPage = (props) => {
  const nextPage = props.nextPage;
  const onWin = props.onWin;
  return (
    <div className="firstPage">
      <h1 className="title"> Welcome to the Urinal Test </h1>
      <p>This Test will Determine your Urinal Ettiquette </p>
      <p>Turn on your volume! 🔊</p>
      <button onClick={nextPage}>Start</button>
      <br></br>
      <br></br>
      <img className="introUrinal" src={introUrinalPicture} alt="" />
      <p className="credit">By Geoffrey and Inspired by BuzzFeed</p>
    </div>
  );
};

export default IntroPage;
