import React from "react";

const oldfetch = () => {
  //Metodo antiguo Fetch - actualmente se usa el await!
  const getQuote = () => {
    const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const quote = api.then((res) => res.json());
    quote.then((resultado) => console.log(resultado[0]));
  };

  return (
    <div>
      <button onClick={() => getQuote()}>Get Quote</button>
    </div>
  );
};

export default oldfetch;
