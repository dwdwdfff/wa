import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[Mody V1]───╮
│╭────────────────────
┴│👋 Hi there, ${conn.getName(m.sender)}!
⬡│🤖 I'm Mody Bot\n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│ M o D y
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Mohammed Mahmoud 🇪🇬
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/01069401225
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing Ikratos-MD-v1! 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler