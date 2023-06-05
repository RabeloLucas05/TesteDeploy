/* eslint-disable react/function-component-definition */
import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

import Repository from "./Repository";

// puxa a const repositories do RepositoriesPage index.jsx
// Faz função map para cara um dos repositories
// Faz a função filter para aparecer somente os repositorys com currentLanguage undefined e currentLanguage = repository language (useState)
const Repositories = ({ repositories, currentLanguage }) => {
  const repos = repositories
    .filter(
      (repository) =>
        currentLanguage === undefined || repository.language === currentLanguage
    )
    .map((repository) => (
      <Repository key={repository.id} repository={repository} />
    ));

  return <Container>{repos}</Container>;
};

Repositories.defaultProps = {
  currentLanguage: undefined,
};
// validação proptypes dos repositories
Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
};

export default Repositories;
