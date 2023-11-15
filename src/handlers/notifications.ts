import { CustomContext } from "../types/customContext.type";

async function announcement(ctx: CustomContext) {
  await ctx.scene.enter("announcement-wizard");
}
  const replyMsg = `
KTUNOTES.IN 🌐

`;
export default announcement;
