module.exports = {
  async afterCreate(event) {
    const { result, params } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "cesarcarone@cardieri.com.br",
        from: "social@cardieri.com.br",
        cc: "giulia.cardieri@gmail.com",
        subject: "Contato Site Cardieri - Não responda esse email diretamente!",
        html: `Nome: ${result.Nome}<br>Email: ${result.Email}<br>Assunto: ${result.Assunto}<br>Telefone: ${result.Telefone}<br>Mensagem: ${result.Mensagem}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
