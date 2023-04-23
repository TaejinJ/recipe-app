import { useEffect, useState } from "react";

export const Popular = () => {

  const [popular, SetPopular] = useState([]);

  // useEffect(() => {
  //   getPopular();
  // }, []);


  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    SetPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  )
}
