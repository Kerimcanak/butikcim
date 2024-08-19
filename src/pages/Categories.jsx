import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/categoryThunk";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import electronicsCategory from "/electronicsCategory.png";
import clothesCategoryWomens from "/clothesCategory.png";
import clothesCategoryMens from "/clothesCategoryMens.png";

export const Categories = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categories = useSelector(state => state.product.categories);



  console.log("categories:" + categories + "length:" + categories.length);

  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const setCategoriesOpenNow = () => {
    setCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="flex h-[169vh]">
      <div id="left" className="bg-white w-full">
        <div className="flex flex-col items-center justify-center ">
          <button className="text-3xl text-black slidedowncategories:slide-in-bck-center duration-500" onClick={setCategoriesOpenNow}>
            Categories<i class="fa-solid fa-angle-down"></i>
          </button>
          <div className={`${isCategoriesOpen ? "flex flex-col gap-4" : "hidden"}`}>
            {categories.map((category, index) => (
              <Link key={index} to={`/categories/${category === "women's clothing" ? "women/clothing" : category === "men's clothing" ? "men/clothing" : category}`} 
              className="bg-no-repeat bg-center bg-cover flex justify-center items-center  rounded-lg hover:opacity-75 w-[500px] h-[300px]" 
              style={{backgroundImage: category === "electronics" ? `url(${electronicsCategory})` : category === "women's clothing" ? `url(${clothesCategoryWomens})` : category === "men's clothing" ? `url(${clothesCategoryMens})` : `url(https://picsum.photos/510/300?random=${index})`}}>
                <div className="flex flex-col items-start">
                  <h2 className="text-4xl font-bold text-slate-800">{category}</h2>
                  <div className="text-2xl text-orange-500">Your Space</div>
                  <div className="underline text-2xl text-slate-800">Explore items</div>
                </div>
              </Link>
            ))}
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

