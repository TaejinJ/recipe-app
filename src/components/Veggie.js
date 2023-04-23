import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { json } from 'react-router-dom';


export const Veggie = () => {

  const [veggie, SetVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);


  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      SetVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        ` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes))
      SetVeggie(data.recipes);
      console.log(data.recipes)
    }





  };

 

  return (
    <div>


      <Wrapper>
        <h3 >
          Veggie Picks
        </h3>
        <Splide
          options={{
            perPage: 3,
            arrowPath: false,
            pagination: false,
            drag: "free",
            gap: "5rem",

          }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card key={recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>


    </div>
  )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  
  img{
    border-radius: 2rem;
    
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  p{
    // recipe.title 부분 css 
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    text-align: center;
    font-weight: 600;
    height: 40%;
    justify-content: center;
    color: white;
    align-items: center;

  }
  
`;
const Gradient = styled.div`
 z-index: 3;
 position: absolute;
 width: 100%;
 height: 100%;
 background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`;
