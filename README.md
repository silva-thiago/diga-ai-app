# Diga Aí App - Semana Fullstack Master

[![HitCount](http://hits.dwyl.com/silva-thiago/diga-ai-app.svg)](http://hits.dwyl.com/silva-thiago/diga-ai-app)

Uma versão online deste projeto pode ser encontrada em: https://palpite-box.tuliofaria.dev/.

![Preview](https://github.com/silva-thiago/diga-ai-app/../../../../public/img/diga-ai-index.png)

## Início

### Pré-requisitos:

Você precisa do NodeJS e do NPM ou Yarn instalado em sua máquina.

### Execução

Usando NPM:

```
$ npm install
$ npm run dev
```

Ou com Yarn:

```
$ yarn 
$ yarn run dev

```

## Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/).

## Colocando em produção:

Este projeto pode ser colocado em produção utilizando o Vercel. É necessário criar as variáveis de ambiente para configurar o acesso as planilhas do Google:

```
SHEET_CLIENT_EMAIL=client email do service credential
SHEET_PRIVATE_KEY=private key do service credential - lembrar de substituir \n por quebras de linha e de codificar em base 64
SHEET_DOC_ID=id da planilha
```

## Construído com:

* [NextJS](https://nextjs.org/) - The React Framework.
* [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
* [Figma](https://figma.com/) - Helps teams create, test, and ship better designs from start to finish.
* [Google Sheets](https://sheets.google.com) - You can create, edit, and collaborate wherever you are.

## Autor:

* **Thiago Silva** - [LinkedIn](https://www.linkedin.com/in/tjlsilva/)

## Licença

Este projeto é licenciado sobre a licença MIT - veja [LICENSE.md](LICENSE.md) para mais informações.

## Agradecimentos

* Este projeto foi construído durante a Semana Fullstack Master do [DevPleno](https://devpleno.com).