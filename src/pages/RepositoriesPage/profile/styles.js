import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  /* breakpoint for tablets */
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  margin-top: 0;
  margin-bottom: 10px;
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  margin-bottom: 0;
  margin-top: 0;
  align-items: center;
  line-height: 1.5;
  svg {
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    color: rgb(100, 102, 107);
  }
`;
