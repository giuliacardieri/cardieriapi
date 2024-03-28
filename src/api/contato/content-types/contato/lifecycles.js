module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "cesarcarone@cardieri.com.br",
        from: "social@cardieri.com.br", // e.g. single sender verification in SendGrid
        cc: "giulia.cardieri@gmail.com",
        subject: "Contato Site Cardieri - Não responda esse email diretamente!",
        text: "${fieldName}", // Replace with a valid field ID
        html: "Nome: ${Nome}<br>Email: ${E-mail}<br>Assunto: ${Assunto}<br>Telefone: ${Telefone}<br>Mensagem: ${Mensagem}",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
