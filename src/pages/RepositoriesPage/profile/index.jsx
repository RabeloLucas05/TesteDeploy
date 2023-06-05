import React from "react";

import PropTypes from "prop-types";

import { MdLocationCity, MdWork, MdLink, MdGroup } from "react-icons/md";

import { Avatar, Container, Data, Header, Inner, Login, Name } from "./styles";

// eslint-disable-next-line react/function-component-definition
const Profile = ({ user }) => (
  // foi passado o array {user } pra cá
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    {/* resposivo para não aparecer em telas menores */}
    <Inner>
      <Data>
        <MdGroup size={20} />
        {user.followers}&nbsp; <i>seguidores</i> &middot;&nbsp; {user.following}
        &nbsp; <i>seguindo</i>
      </Data>
      {/* uses the && to verify if user.company exists and only then renders <Data> */}
      {user.company && (
        <Data>
          <MdWork size={20} /> {user.company}
        </Data>
      )}
      {user.location && (
        <Data>
          <MdLocationCity size={20} />
          {user.location}{" "}
        </Data>
      )}
      {user.location && (
        <Data>
          <MdLink size={20} />
          &nbsp;
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </Data>
      )}
    </Inner>
  </Container>
);

// necessário quando importo propriedades que estão em outra página. Essa estava na Repositories page "user" e então defino o shape delas como abaixo:
Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;
