import React, { useState } from "react";

import { MdSearch } from "react-icons/md";

// importa as const criadas na "styles.js" onde já se faz a formatação
import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

// eslint-disable-next-line react/function-component-definition
const MainPage = () => {
  // UseState para o input de busca do login
  const [login, setLogin] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Perform the same action as clicking the button
      window.location.href = `/${login}/repositories`;
    }
  };
  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />

      <Title>API Github</Title>
      <Form>
        <Input
          // define o valor para login e sempre que digitar algo aciona o onChange que vai atualizar o valor com o setLogin
          placeholder="Usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        {/* pega o valor do login e joga no repositories  */}
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} color="#fff" />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
