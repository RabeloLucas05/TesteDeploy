import axios from "axios";
import { langColors } from "./config";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// define daonde vai buscar as informações que estão na MOCK da API (db.json & routes.json)
// URL definido no ".env" e adicionado a segunda parte com o login (`/users/${login}`)
export const getUser = async (login) => api.get(`/users/${login}`);
// https://api.github.com/users/devsamurai/repos
export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export default api;

export const getLangsFrom = (repositories) => {
  let stats = repositories
    .map(
      (repository) =>
        //
        repository.language
    )
    .reduce(
      (data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      []
    );
  // A função reduce recebe dois parâmetros: o acumulador (data) e o elemento atual (language). A cada iteração, o trecho de código { ...data, [language]: (data[language] || 0) + 1 } é executado. Ele cria um novo objeto, espalhando o objeto data (valores acumulados anteriormente) e adicionando uma nova propriedade com a linguagem atual. Se a linguagem já existe como chave em data, seu valor é incrementado em 1; caso contrário, é inicializado como 1. O resultado é atribuído de volta ao acumulador.

  delete stats.null;
  // Posso chamar e modificar assim pois foi definido como "let" e nao const
  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
  // Fazum map para retornar objetos com name, count e color baseado no stats e na importação de langColors. "sort" bota na ordem de maior aparições para menor
};
