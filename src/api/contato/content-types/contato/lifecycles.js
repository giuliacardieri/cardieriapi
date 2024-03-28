module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "cesarcarone@cardieri.com.br",
        from: "social@cardieri.com.br",
        cc: "giulia.cardieri@gmail.com",
        subject: "Contato Site Cardieri - Não responda esse email diretamente!",
        html: `Nome: ${event.Nome}<br>Email: ${event.Email}<br>Assunto: ${event.Assunto}<br>Telefone: ${event.Telefone}<br>Mensagem: ${event.Mensagem}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
