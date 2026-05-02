# 🎬 PrimeFlix - Case de Portfólio

## 🧠 Contexto

Plataformas de streaming se tornaram padrão na forma como consumimos conteúdo hoje.
Pensando nisso, desenvolvi o **PrimeFlix**, uma aplicação frontend inspirada nesse modelo, com foco em recriar uma experiência moderna de navegação e consumo de filmes.
O projeto foi construído com o objetivo de evoluir minhas habilidades em React, consumo de APIs e construção de interfaces escaláveis.

---

## 🎯 Problema

Como construir uma interface de streaming que:
- Seja rápida e responsiva
- Consuma dados externos de forma eficiente
- Escale com facilidade conforme novas funcionalidades
- Ofereça uma boa experiência ao usuário mesmo com grandes volumes de dados

---

## 💡 Solução

Para resolver esses desafios, desenvolvi uma aplicação baseada em:
- Arquitetura componentizada com React
- Consumo de API para dados dinâmicos
- Organização modular para facilitar manutenção e escalabilidade
- Interface responsiva inspirada em plataformas reais

A aplicação permite que o usuário explore filmes, busque conteúdos e visualize detalhes de forma fluida.

---

## 🧠 Decisões Técnicas

Durante o desenvolvimento, algumas decisões foram fundamentais:

### 🔹 Componentização
Separei a aplicação em componentes reutilizáveis para facilitar manutenção e reuso.

### 🔹 Consumo de API
Utilizei a API do The Movie Database (TMDB) para trabalhar com dados reais, simulando um cenário de produção.

### 🔹 Organização de Pastas
Estruturei o projeto pensando em escalabilidade, separando responsabilidades como:
- **components/**: Componentes reutilizáveis (Header, Skeleton)
- **pages/**: Páginas da aplicação
- **hooks/**: Custom hooks para logica reutilizável
- **services/**: Configuração e integração com APIs
- **utils/**: Funções utilitárias e constantes

### 🔹 Experiência do Usuário
Priorizei:
- Navegação simples
- Carregamento rápido com Skeleton Loading
- Interface limpa e intuitiva

### 🔹 Responsividade
A aplicação foi desenvolvida para funcionar bem em diferentes dispositivos.

### 🔹 Custom Hooks
Criei hooks personalizados para encapsular lógica complexa:
- `useMovies`: Gerencia listagem e busca de filmes
- `useMovieDetails`: Gerencia detalhes de um filme específico
- `useFavorites`: Gerencia sistema de favoritos com localStorage

### 🔹 Performance
Implementei busca com debounce para otimizar requisições à API.

---

## 🚀 Funcionalidades Principais

✅ **Listagem de filmes em cartaz**  
✅ **Busca de filmes com debounce**  
✅ **Visualização detalhada de filmes**  
✅ **Sistema de favoritos com localStorage**  
✅ **Skeleton Loading para melhor UX**  
✅ **Tratamento de erros com fallback UI**  
✅ **Interface responsiva**

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão |
|------------|--------|
| React | 19.2.0 |
| React Router DOM | 7.9.5 |
| Axios | 1.13.2 |
| React Toastify | 11.0.5 |

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   └── Skeleton/
├── pages/
│   ├── Home/
│   ├── Filme/
│   ├── Favoritos/
│   └── Erro/
├── hooks/
│   ├── useMovies.js
│   ├── useMovieDetails.js
│   └── useFavorites.js
├── services/
│   └── api.js
├── utils/
│   ├── constants.js
│   └── debounce.js
├── App.js
├── routes.js
└── index.js
```

---

## 🚀 Próximos Passos (Evolução do Projeto)

Para aproximar ainda mais de um cenário real, as próximas melhorias incluem:

- [ ] Otimização de performance (lazy loading e memoização)
- [ ] Implementação de testes automatizados
- [ ] Adição de autenticação de usuários
- [ ] Criação de recomendações personalizadas
- [ ] Integração com mais APIs (notícias, trailers, etc.)

Essas melhorias têm como objetivo transformar o projeto de um clone visual em um produto mais completo.

---

## 📊 Resultados e Aprendizados

Com esse projeto, desenvolvi habilidades importantes como:
- Consumo e manipulação de APIs REST
- Organização de aplicações frontend
- Criação de interfaces modernas e responsivas
- Estruturação de código escalável
- Criação de custom hooks
- Tratamento de erros e UX de loading

Além disso, o projeto reforçou minha capacidade de transformar ideias em aplicações funcionais.

---

## ▶️ Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/primeflix

# Entre na pasta do projeto
cd primeflix

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

🟢 O projeto será executado em: `http://localhost:3000`

---

## 👨‍💻 Autor

Desenvolvido por **Renan Marinho** 💙  
Projeto para estudos e evolução em React ⚛️🚀

---

> "Eu não só sei React, eu sei construir produto"
