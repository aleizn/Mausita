let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*โก ๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด:* ${pesan}`
let teks = `*๐ฆโบ๐ธ ๐ฝ ๐ ๐พ ๐ฒ ๐ฐ ๐ฝ ๐ณ ๐พ - ๐ถ ๐ ๐ ๐ฟ ๐พโบ๐ฆ*\n\nโ ${oi}\n\nโ *โก ๐ด๐๐ธ๐๐๐ด๐๐ฐ๐:*\n`
for (let mem of participants) {
teks += `โฃโฅ @${mem.id.split('@')[0]}\n`}
teks += `โ๐๐๐ฎ๐ฌ๐ข๐ญ๐๐๐จ๐ญ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
