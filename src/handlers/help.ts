import { CustomContext } from "../types/customContext.type";

async function help(ctx: CustomContext) {
  const helpMessage = `
<b>Available Commands:</b>

/start - Start the bot

/help - Show this help message

/result - Fetch your exam results

/cancel - Cancel the result lookup

/notifications - Get the latest KTU notifications

/subscribe - Subscribe to recieve new KTU notifications

/unsubscribe - Unsubscribe from receiving new KTU notifications

/code - Get the source code of this bot


<b>Inline Query</b>:

Use the inline query feature to live search for notifications. 

Simply type @notesktubot followed by a keyword you want to search for.

eg: <code>@notesktubot</code>


If you encounter any issues, please visit the <a href="https://instagram.com/ktunotes.in">Instagram</a>.

Thanks for using this bot!
`;

  await ctx.replyWithHTML(helpMessage);
}

export default help;
