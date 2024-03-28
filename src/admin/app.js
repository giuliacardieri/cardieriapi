import logo from "./extensions/logo.jpg";

const config = {
  locales: ["pt-BR"],
  auth: {
    logo: logo,
  },
  menu: {
    logo: logo,
  },
  translations: {
    ptBR: {
      "Content Manager": "Gestão de Conteúdo",
      "Content Type Builder": "Criador de Tipos de Conteúdo",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
