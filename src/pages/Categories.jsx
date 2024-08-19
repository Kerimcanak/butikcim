import axios from "axios"
import { useEffect, useState } from "react";
export const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('../backend/categories.json');
            setCategories(response.data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      return (
        <div className="flex">
          {/* Left side */}
          <div id="left" className="bg-white w-1/2 h-screen flex items-center justify-center">
            <h2 className="text-3xl text-black">Categories</h2>
            {Array.isArray(categories) && categories.length > 0 && ( // Check if categories is an array and has elements
              <ul>
                {categories.map((category) => (
                  <li key={category.category}>{category.category}</li>
                ))}
              </ul>
            )}
          </div>
          {/* Right side */}
          <div id="right" className="bg-gray-300 w-1/2 h-screen">
          </div>
        </div>
      );
}
