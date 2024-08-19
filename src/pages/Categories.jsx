import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/categoryThunk";
import { useEffect } from "react";

export const Categories = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories = useSelector(state => state.product.categories);


  console.log("categories:" + categories + "length:" + categories.length);

  return (
    <div className="flex">
      <div id="left" className="bg-white w-1/2 h-screen flex items-center justify-center">
        <h2 className="text-3xl text-black">Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
      <div id="right" className="bg-gray-300 w-1/2 h-screen">
      </div>
    </div>
  );
};

