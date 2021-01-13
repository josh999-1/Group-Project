//import e from "cors";
import { useRef, useState, setState } from "react";
import "./dropDown.css";

//create category state

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

  console.log(category.category);
  console.log(difficulty.difficulty);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div>
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>Category</span>
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
        <button onClick={onClick} className="menu-trigger">
          <span>Difficulty</span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <button name="difficulty" value={"Easy"} onClick={setDif}>
                Easy
              </button>
            </li>
            <li>
              <button name="difficulty" value={"medium"} onClick={setDif}>
                Medium
              </button>
            </li>
            <li>
              <button name="difficulty" value={"Hard"} onClick={setDif}>
                Hard
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Select;
