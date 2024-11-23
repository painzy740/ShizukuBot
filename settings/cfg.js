/*

 * Simple base bot whatsapp
 * Created by Anggazyy ZcoderX
 * Support by ChatGPT Assistant
 * Jangan delete credit ya ^^
 
 Contact Support:
 📞 Whatsapp : wa.me/6288804148639
 ☎ Telegram : t.me/anggazyydev
 
*/

global.owner = [
  "6288804148639", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.nomorbot = '62xxx'
global.urlfoto = 'https://'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})