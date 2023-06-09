import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

export const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params=useParams();

  const getSearched = async (name) =>{
    /**spoonacular의 number default=10 maxresult는 내가 원하는만큼 정하기. */
    const maxResults = 100; // 최대 결과 개수 (원하는 값으로 설정 가능)
    let offset = 0;
    let allResults = [];
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const recipes = await data.json();
    const totalResults=recipes.totalResults;

    while(offset < totalResults){
      const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=${maxResults}&offset=${offset}`);
      const recipes=await data.json();
      allResults=allResults.concat(recipes.results);
      offset+=maxResults;
    }
    /**기존 10개만 갖고오는 코드. */
    // const getSearched = async (name) =>{
    //   const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    //   const recipes = await data.json();
    //   setSearchedRecipes(recipes.results);
    // };
    
    setSearchedRecipes(allResults);
  };
  useEffect(() => {
    getSearched(params.search);
    
  }, [params.search]);
  


  return (
    <Grid>
      {searchedRecipes.map((item)=>{
        return <Card key={item.id}> 
        <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt=''/>
              <h4>{item.title}</h4>
              </Link>
        </Card>
      })}
    </Grid>
  )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(20rem , 1fr));
grid-gap: 3rem;
`;
const Card=styled.div`
img{
  width: 100%;
  border-radius: 2rem;

}
a{
  text-decoration: none;
}
h4{
  text-align: center;
  padding:1rem;
}
`
