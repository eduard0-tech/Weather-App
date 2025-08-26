# Weather App

> Um card de clima moderno e animado que exibe informações meteorológicas, construído com React e estilizado com CSS moderno, incluindo efeitos de vidro (glassmorphism) e um fundo "aurora" animado.

---

## ✨ Funcionalidades
-   **Interface Moderna**: Design com efeito de vidro (glassmorphism) que se destaca sobre um fundo animado.
-   **Animações Suaves**: Efeitos de entrada em cascata para os elementos e um ícone de clima flutuante para uma experiência de usuário mais agradável.
-   **Busca de Dados**: Integração com a [WeatherAPI.com](https://www.weatherapi.com/) para obter dados meteorológicos.
-   **Responsivo**: Layout adaptado para uma boa visualização em dispositivos móveis.

---

## 💻 Tecnologias Utilizadas

-   **React**: Biblioteca principal para a construção da interface.
-   **Vite**: Ferramenta de build para um desenvolvimento rápido.
-   **CSS3**: Estilização avançada com animações, Flexbox e Grid Layout.
-   **WeatherAPI.com**: Fonte dos dados meteorológicos.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
-   Um gerenciador de pacotes como [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    ```

2.  **Acesse o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    -   Crie um arquivo chamado `.env` na raiz do projeto.
    -   Dentro dele, adicione sua chave da API, como no exemplo abaixo.
    -   Você pode obter uma chave gratuita no site [WeatherAPI.com](https://www.weatherapi.com/).

    ```env
    VITE_API_KEY="SUA_CHAVE_DE_API_AQUI"
    ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada no seu terminal).

---

## ⚠️ Aviso Sobre a Precisão dos Dados

**Atenção:** Este projeto utiliza a camada gratuita (*free tier*) da API [WeatherAPI.com](https://www.weatherapi.com/) para buscar as informações climáticas.

Devido às limitações comuns em planos gratuitos, **as informações exibidas podem não ter uma precisão de 100%** ou podem ter um pequeno atraso na atualização em comparação com serviços meteorológicos premium. O projeto é ideal para fins de estudo, portfólio e desenvolvimento, mas não é recomendado para aplicações críticas que dependam de dados meteorológicos de alta precisão.

---

