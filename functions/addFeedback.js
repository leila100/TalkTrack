require("dotenv").config();
const Trello = require("trello");
const trello = new Trello(
  process.env.TRELLO_APPLICATION_KEY,
  process.env.TRELLO_USER_TOKEN
);

exports.handler = async function(event, context, callback) {
  const body = JSON.parse(event.body);
  const { email, feedback, rating, cardId } = body;
  const comment = `${rating} | ${feedback} ${!!email ? email : ""}`;

  try {
    await trello.addCommentToCard(cardId, comment);

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: "Thanks for the feedback!" }),
    };
  } catch (ex) {
    console.error(ex);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "Failed to send email." }),
    };
  }
};
