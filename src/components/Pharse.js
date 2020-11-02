import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types'

const DivPhrase = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  @media (min-width: 992px) {
    margin-top: 10rem;
  }
  @media (min-width: 570px) {
    margin-top: 10rem;
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    font-weight: bold;
    color: #666;
    margin-top: 2rem;
  }

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
`;

const Phrase = ({ phrase }) => {
  return (
    <DivPhrase>
      <h2>quote: {phrase.quote}</h2>
      <p>author: {phrase.author}</p>
    </DivPhrase>
  );
};

Phrase.propTypes = {
  phrase: PropTypes.object.isRequired
}

export default Phrase;
