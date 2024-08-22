import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/categoriesThunk";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories); // Assuming categories is under product reducer

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]); // Add dependencies if necessary

  const [dropDownState, useDropDownState] = useState("closed")

  return (
    <div className="flex flex-col items-center">
      <button onClick={() => useDropDownState(dropDownState === "closed" ? "opened" : "closed")}>
        Categories <i className="fa-solid fa-chevron-down"></i>
      </button>
      <ul className={`flex flex-col ${dropDownState === "opened" ? "" : "hidden"}`} >
        {categories.map((category) => {
          let link;
          if (category === "men's clothing") {
            link = `/men/clothing`;
          } else if (category === "women's clothing") {
            link = `/women/clothing`;
          } else {
            link = `/category/${category}`;
          }
          return (
            <li key={category}>
              <Link to={link}>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};