import { CustomContext } from "../types/customContext.type";

async function code(ctx: CustomContext) {
  const replyMsg = `
This bot is updated by KTUNOTES.IN 🌐

Visit our website  <a href="https://www.ktunotes.in">Ktunotes.in</a>.

Download KTU Study materials,Question Papers etc
`;
  await ctx.replyWithHTML(replyMsg);
}

export default code;
