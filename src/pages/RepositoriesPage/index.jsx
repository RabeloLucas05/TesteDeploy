import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Profile from "./profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import { Loading, Container, Sidebar, Main } from "./styles";

import { getRepos, getUser, getLangsFrom } from "../../services/api";

// eslint-disable-next-line react/function-component-definition
const RepositoriesPage = () => {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  // useState para o filter poder ser selecionado
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);
  // substitui os arrays estático de usuário e repositórios que existiam previamente. Agora puxa do db.json
  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);
      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLangsFrom(repositoriesResponse.data));

      setLoading(false);
    };
    loadData();
  }, []);

  // puxa do api.js

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }
  return (
    <Container>
      <Sidebar>
        {/* passa a constante "user" para ser usada no Profile index.jsx */}
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
