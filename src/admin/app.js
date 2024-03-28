import logo from "./extensions/logo.jpg";

const config = {
  locales: ["pt-BR"],
  auth: {
    logo: logo,
  },
  menu: {
    logo: logo,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
