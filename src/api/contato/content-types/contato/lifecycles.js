module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "cesarcarone@cardieri.com.br",
        from: "social@cardieri.com.br",
        cc: "giulia.cardieri@gmail.com",
        subject: "Contato Site Cardieri - Não responda esse email diretamente!",
        html: `Nome: ${Nome}<br>Email: ${
          E - mail
        }<br>Assunto: ${Assunto}<br>Telefone: ${Telefone}<br>Mensagem: ${Mensagem}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
