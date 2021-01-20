//import e from "cors";
import { useRef, useState } from "react";
import "./dropDown.css";
import { useHistory } from "react-router-dom";

//create category state
let diff;
let cate;

const Select = () => {
  const [category, setCategory] = useState({
    category: "",
  });

  const setData = (e) => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value,
    });
  };

  const [difficulty, setDifficulty] = useState({
    difficulty: "",
  });

  const setDif = (e) => {
    setDifficulty({
      ...difficulty,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();
  const handleClick = () => {
    console.log(diff);
    console.log(cate);
    history.push("/quiz");
  };
  diff = difficulty.difficulty;
  cate = category.category;

  console.log(category.category);
  console.log(difficulty.difficulty);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  // const dropdownRef = useRef(null);
  const [isDifActive, setIsDifActive] = useState(false);
  const onClickDif = () => setIsDifActive(!isDifActive);
  let finalCat = "";
  let finalDif = "";

  if (category.category == 9) {
    finalCat = "General Knowledge";
  } else if (category.category == 18) {
    finalCat = "Science: Computers";
  } else if (category.category == 15) {
    finalCat = "Entertainment: Video Games";
  } else if (category.category == 22) {
    finalCat = "Geography";
  } else if (category.category == 23) {
    finalCat = "History";
  } else if (category.category == 25) {
    finalCat = "Art";
  } else if (category.category == 28) {
    finalCat = "Vehicles";
  } else if (category.category == 27) {
    finalCat = "Animals";
  } else if (category.category == 21) {
    finalCat = "Sports";
  } else if (category.category == 20) {
    finalCat = "Mythology";
  }

  console.log(category.category);

  if (difficulty.difficulty === "easy") {
    finalDif = "Easy";
  } else if (difficulty.difficulty === "medium") {
    finalDif = "Medium";
  } else if (difficulty.difficulty === "hard") {
    finalDif = "Hard";
  }

  return (
    <div className="main">
      <h2>Welcome user</h2>

      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Select Category</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <button name="category" value={9} onClick={setData}>
                General Knowledge
              </button>
            </li>
            <li>
              <button name="category" value={18} onClick={setData}>
                Science: Computers
              </button>
            </li>
            <li>
              <button name="category" value={15} onClick={setData}>
                Entertainment: Video Games
              </button>
            </li>
            <li>
              <button name="category" value={22} onClick={setData}>
                Geography
              </button>
            </li>
            <li>
              <button name="category" value={23} onClick={setData}>
                History
              </button>
            </li>
            <li>
              <button name="category" value={25} onClick={setData}>
                Art
              </button>
            </li>
            <li>
              <button name="category" value={28} onClick={setData}>
                Vehicles
              </button>
            </li>
            <li>
              <button name="category" value={27} onClick={setData}>
                Animals
              </button>
            </li>
            <li>
              <button name="category" value={21} onClick={setData}>
                Sports
              </button>
            </li>
            <li>
              <button name="category" value={20} onClick={setData}>
                Mythology
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-container2">
        <button onClick={onClickDif} className="menu-trigger2">
          <span>Select Difficulty</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu2 ${isDifActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <button name="difficulty" value={"easy"} onClick={setDif}>
                Easy
              </button>
            </li>
            <li>
              <button name="difficulty" value={"medium"} onClick={setDif}>
                Medium
              </button>
            </li>
            <li>
              <button name="difficulty" value={"hard"} onClick={setDif}>
                Hard
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="options">
        <h2>Quiz Selection</h2>
        <p>You have selected</p>
        <p className="cat">{finalCat}</p>
        <p>Difficulty Level</p>
        <p className="dif">{finalDif}</p>

        <button onClick={handleClick} type="button" className="quizBut">
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export { diff, cate };
export default Select;
