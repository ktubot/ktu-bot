import { CustomContext } from "../types/customContext.type";

async function search(ctx: CustomContext) {
  const replyMsg = `
Please use inline query to search for a KTU notification.

Type <code>@notesktubot query</code> in the bot chat and then choose the notification you want.

<b>Examples:</b>

<code>@notesktubot timetable</code> : To search for timetable notifications

<code>@notesktubot calendar</code> : To search for academic calendar notifications

<i>Copy the above examples and paste it in the bot chat to see the results.</i>
`;
  await ctx.replyWithHTML(replyMsg);
}
export default search;
