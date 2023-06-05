import styled from "styled-components";
// importa da biblioteca router
import { Link } from "react-router-dom";

// Cria as constantes e suas propriedades CSS que serão chamadas no "index.js"
//
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  /* Importa as propriedades da const theme que tem dentro de si "colors" e puxa
  a cor definida no "text" */
  /* FACILITA QUANDO TEM QUE FAZER ALTERAÇÕES SEM MUDAR UM POR UM NO CÓDIGO */
  color: ${(props) => props.theme.colors.text};
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  color: ${(props) => props.theme.colors.text};

  &::placeholder {
    /* Importa do themes a cor metalDark já pré definida */
    color: ${(props) => props.theme.colors.metalDark};
  }
`;

export const Button = styled(Link)`
  //troca o button daqui pelo Link
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
`;
