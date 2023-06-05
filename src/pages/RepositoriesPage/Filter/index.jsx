import React from "react";

import PropTypes from "prop-types";
import { Container, Selector, Cleaner } from "./styles";

// eslint-disable-next-line react/function-component-definition
const Filter = ({ languages, currentLanguage, onClick }) => {
  // cria função Map usando os langs ({propriedades pra não ter que ficar escrevendo lang.propriedade}). PRECISA DE KEY PRA DIFERENCIAR OS OBJETOS
  // Passa a color das const "langs" para o <Selector> que é utilizada no styles.js
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      // if ternário para se tiver selecionado e pegar as propriedades
      className={currentLanguage === name ? "selected" : ""}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {/* Assim que chama constante nos JSX */}
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
    </Container>
  );
};

// se não for isRequired embaixo precisa do default
Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

// Props validation with propTypes
Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  // precisa do default
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
