import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝒀𝑼𝑴𝑰𝑲𝑶-𝑴𝑫', body: '𝑺𝑶𝑵𝑮&𝑺𝑯𝑨𝑵𝑲𝑺', sourceUrl: `https://youtube.com/@SHANGMD`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
