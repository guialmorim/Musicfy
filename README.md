# Musicfy

É um aplicativo em ReactJS que consome a [API do Spotify](https://developer.spotify.com/documentation/web-api/), listando os álbuns, músicas e playlists dos usuários, apresentando-o em uma interface limpa inspirada no Instagram

## Frontend

### Tecnologias Usadas

Uma aplicação simples em ReactJS utilizando [Styled-Components](https://styled-components.com/) para a criação dos estilos e os [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) para o gerenciamento de estados. Foi utilizado também o [Axios](https://github.com/axios/axios) para as requisições HTTP

## Backend

### Exemplo de autenticação de contas Spotify

Esse projeto contém uma demonstração básica de um fluxo de autenticação por OAuth 2.0 [autenticação pela Web API do Spotify](https://developer.spotify.com/web-api/authorization-guide/).

### Usar suas próprias credenciais

É necessário você registar seu próprio app e receber suas próprias credenciais no Dashboard do Spotify for Developers.

Para isso, vá até [seu Dashboard no Spotify for Developers](https://beta.developer.spotify.com/dashboard) e crie sua aplicação.

Uma vez que a aplicação está criada, substitua o `client_id`, `redirect_uri` e `client_secret` no exemplo com as informações que você obteve de My Applications.

### Executando o exemplo

Para executar esse exemplo simples, execute o arquivo `server.js` dentro da pasta `src`:

    $ cd src
    $ node server.js

Então, abra `http://localhost:8888` no browser.
