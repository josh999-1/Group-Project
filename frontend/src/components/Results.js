import "./results.css";

const Results = () => {
  return (
    <div className="cluster">
      <div className="middle">
        <h1 className="message">
          Well played, you're done! Now lets see how you did!{" "}
        </h1>
        <a href="/table" className="link">
          Click here to view your place on our leaderboards
        </a>
      </div>
      <div className="picture">
        <img
          src="https://cdn.pixabay.com/photo/2018/12/05/08/44/win-3857339_1280.png"
          className="finish"
        ></img>
      </div>
    </div>
  );
};

export default Results;
