import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [input, setInput] = useState("");
  const navigate=useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/"+ input);
    
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <InputWrapper >
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </InputWrapper>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;


const InputWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 70%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
