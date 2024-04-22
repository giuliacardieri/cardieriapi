module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "giulia.cardieri@gmail.com",
        from: "social@cardieri.com.br",
        cc: "giulia.cardieri@gmail.com",
        replyTo: result.Email,
        subject: "Contato Site Cardieri - Não responda esse email diretamente!",
        html: `Nome: ${result.Nome}<br>Email: ${result.Email}<br>Assunto: ${result.Assunto}<br>Telefone: ${result.Telefone}<br>Mensagem: ${result.Mensagem}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
