module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "bac.cia@cardieri.com.br",
        cc: "adm.cia@cardieri.com.br",
        bcc: "giulia.cardieri@gmail.com",
        from: "social@cardieri.com.br",
        replyTo: result.Email,
        subject: "Novo contato pelo site - Cardieri.com.br",
        html: `Nome: ${result.Nome}<br>Email: ${result.Email}<br>Assunto: ${result.Assunto}<br>Telefone: ${result.Telefone}<br>Mensagem: ${result.Mensagem}`,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
