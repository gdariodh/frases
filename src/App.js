import React,{useState, useEffect} from "react";
import Phrase from './components/Pharse'
import styled from "@emotion/styled";

const Div = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  margin-top: 3rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem 3rem;
  font-size: 2rem;
  color: #fff;
  margin-top: 3rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover{
    cursor:pointer;
    background-size:400px;
  }
`;

function App() {

  const [ phrase , savePhrase ] = useState({});

  // async await - nueva forma de hacer peticiones fetch --> remplaza a los .then
  const getPhrase = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phrase = await api.json();
    savePhrase(phrase[0]);
  }

  useEffect(()=>{
     getPhrase();
  },[])

  return (
    <Div>

      <Phrase
      phrase={phrase}
      ></Phrase>

      <Button
      onClick={() => getPhrase()}
      >
        Get Phrase
        </Button>
    </Div>
  );
}

export default App;
