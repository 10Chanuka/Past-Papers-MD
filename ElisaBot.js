require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
 

module.exports = ElisaBotMd = async (ElisaBotMd, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ElisaBotMd.decodeJid(ElisaBotMd.user.id)
    	const nimanumber = "94719574492"
        const isCreator = [botNumber,nimanumber ,...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isNima = m.sender == "94715166712@s.whatsapp.net" ? true : false
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await ElisaBotMd.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    	
	    
        //member\\
        	
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
case 'start':{
    const menu=`Past-Papers-OL-bot🎓 
    By Pasindu Sandaruwan
    
    Thank you for using This bot🎓
    This is the one and Only Past papers Whatsapp bot🎓
    
    මෙම බොට්ව භාවිතා කිරීම පිළිබදව ස්තූතිය..!
    මෙය වට්සැප් හරහා ධාවනය වන එකම පාස්ට්පේපර් බොට් වේ..!
    
    Do you want to use this bot?
    send me *'menu'* command..!💓
    
    ඔබට පසුගිය සාමාන්‍යපෙල විභාග ප්‍රශ්නපත්‍ර ලබාගැනීමට අවශ්‍ය නම්
    *'menu'* යන විධානය භාවිත කරන්න..! 💓
    
    About Us...!✊
    අප ගැන...!
    *'about_us'*
    
    My youtube Channel💞
    යූටියුබ් නාලිකාව...!
    *'youtube'*
    
    Group Links...!🎲
    සමූහ වල Links..!
    *'g_links'*
    
    Credits..!♣
    *'credits'*
    
    
    Owner Pasindu Sandaruwan🎁
    wa.me/94716338723
    @pastpapersolbot 👈On Telegram`


    ElisaBotMd.sendText(m.chat,menu)

 }

 break


 
case 'menu':{
    const menu=`ඔබට අවශ්‍ය විශයය තෝරන්න..!😇

    🔴බුද්ධ_ධර්මය *buddhism*
    🔴සිංහල *sinhala*
    🔴English *english*
    🔴ගණිතය *maths*
    🔴විද්‍යාව *science*
    🔴ඉතිහාසය *history*
    🔴පළමු_කාණ්ඩය *bas1*
    🔴දෙවන_කාණ්ඩය *bas2*
    🔴තෙවන_කාණ්ඩය *bas3*
    
    
    Past-Papers-OL-bot🎓 By Pasindu Sandaruwan
    t.me/pastpapersolbot 👈On Telegram`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 
 
 
 case 'about_us':{
    const menu=`අප ගැන...!😁

    අපි ගැන හැදින්වීමක් කලොත් 
    මේ Botව හදන මම පසිදු සදරුවන්.😉
    
    මම 2K21 වල O/L කලා..😁. මගේ සහෝදර සහෝදරියන්ට 
    O/L Past-Papers ටික ගොඩක් වැදගත් සාමාන්‍යපෙළ විභාගෙට
    ඒ නිසා ඔයාලටත් හෙල්ප් එකක් දෙන්න තමා මේ Bot හැදුවේ..!☺️
    (සෙට් එකම ගොඩයන්න ඕනේ😎 තනියෙන් ගොඩගියත් වැඩක් නෑ..😍)
    
    මම තාක්ෂණික පැතිකඩ ගැන YouTube Channel එකකුත් කරනවා😁
    youtube.com/slrealtech
    කැමතිනම් ඒකත් Subscribe කරගෙන යන්න🥰)
    
    
    ඉතින් තව අපේ Admin Crew එකක් ඉන්නවා..!👊
    
    ⭕️Pasindu Sandaruwan(මම🙃)
    
    ⭕️Nimesh Madushanka [Dark_maker] (හැමදේම කියල දීපු එකා😎)
    
    ⭕️Thasini Himanga (Adminතුමී😎 Shortnotes_lk)
    
    ⭕️Ashen Fdo (Admin OL_edu)
    
    ⭕️Mahesh Kavinda (අපේ ඉංග්‍රීසි සර්🙏😎)
    
    ⭕️Vidusha Hirushan (ඕනිම දේකට උදව්වට ඉන්න එකෙක්😎)
    
    ⭕️Nisinu Bhanula(Creative Ideas මොලේට දාන එකාහ්🤩)
    
    ⭕️Nirasha Prabodani (Bot Deploy කරන්න උදව් කරපු එකී😎)
    
    ⭕️Hirusha Dilshan(Motivation එක දීපු එකා😎)
    
    ⭕️Lahiru Madushan (Admin OL_Edu)
    
    ⭕️Sahani Sooriyarachchi(පේපර්ස් හොයන්න)
    
    
    මෙයාලගෙ උදව්වෙන් තමා මේ වැඩ ඔක්කොම කරගෙන යන්නේ..!🥳
    Whatsapp වගේම Telegram මේ බොට් ක්‍රියාත්මක වෙනවා..!
    
    ඉතින් යාලුවනේ තව යාලුවෙක්ට උදව්වක් විදියට මේ Botව share කරන්න❤️.
    
    (මේ botව පාවිච්චි කලා share කලා කියලා අපිට සල්ලි ලැබෙන්නෙ නෑ.🥲
     සහෝදර සහෝදරියන්ට උදව්වක් විදියට තමා මේ වැඩේ කලේ😊)
    
    O/L සුපිරි ගේමක් ගහන්න ඒනම්. සුභ දවසක්!✌️💪`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 case 'youtube':{
    const menu=`youtube.com/slrealtech
    👆මේ තියෙන්නෙ අපේ YouTube Channel එක... මේකෙන් ඔයාලට ගොඩක්
    තාක්ෂණික තොරතුරු දැනගන්න පුලුවන්.
    Subscribe කරන්න  ❤️
    `
    ElisaBotMd.sendText(m.chat,menu)

 }

 break


 case 'g_links':{
    const menu=`Road to Dream
    🎓Telegram https://t.me/Road_to_Dream_OL
    
    Road to Dream 2K22🎓
    🎓Group 1 https://chat.whatsapp.com/BAiJUWShLauKPrTcTh67E7
    🎓Group 2 https://chat.whatsapp.com/CVlfofJoNVj5a5fNrbSSoC
    
    
    Shortnotes.lk 🌸🤗
    https://chat.whatsapp.com/EetKz1F8sv69wNZfmxHMvv
    
    
    2022 O/L EDUCATION
    📚 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍  𝐆𝐑𝐎𝐔𝐏  🖊📚 
    
    https://chat.whatsapp.com/FFLe8EyUoCNDyshTjkEtOI
    
    https://chat.whatsapp.com/HnQ9esyEp3G83vYBi55daG
    
    https://chat.whatsapp.com/KcLli2il5rDHdysvGqL8Jz
    
    https://chat.whatsapp.com/Jer5E8ufjRTDstwK1y954W
    
    https://chat.whatsapp.com/BTVXzA790WVCLhMKiU68ov
    
    https://chat.whatsapp.com/Gdo23mtDjMuG75Z3RWm6cT
    
    https://chat.whatsapp.com/D8ExK9jL30eC31ZAeUk6CH
    
    https://chat.whatsapp.com/LpQEHiMJs3H5QHAMYrYODo`
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 case 'credits':{
    const menu=`⭕️මේ පේපර්ස් වලින් ගොඩක් ටිකක් ගත්තෙ Internet එකෙන්
    ඒත් හැම පේපරයක්ම එක වෙබ්සයිට් එකක නෑ.🤯
    එක එක ඒවා තියෙන්නෙ එක එක වෙබ් සයිට් වල.😑
    සමහර පේපර්ස් හොයාගන්නත් නැතිවුනා...☹️
    ඒව ටික හොයාගන්න  කලින් අවුරුදු වල අයියල අක්කල ටිකක් මේ වැඩේට ගොඩක් උදව් උනා.🤩🥰
    ඒ පේපර් Cam scanner එකකින් ස්කෑන් කරලා සමහර පේපර් හැදුවේ.☺️
    ඉතින් දැන් ඔයාට මේ Botව පාවිච්චි කරලා සියලුම OL පේපර්ස් ගැනීමේ හැකියාව ලබාදීලා තියනවා..😍
    ඉතින් යාලුවනේ ඔයාලා ඔයාගෙ යාලුවො ඔක්කොටම මේක Share කරලා එයාලට හෙල්ප් එකක් දෙන්න.👽
    මෙන්න මේ Website වලින් තමා ගොඩක් පේපර්ස් ගත්තේ..🙃(වෙන සයිට්වලින් ගත්තු ඒවත් ඇති😬)
    
    
    pastpapers.wiki
    pastpapers.lk
    olevelapi.com
    paperslanka.com
    agaram.lk
    e-thaksalawa.moe.gov.lk
    tamil.agaram.lk
    teachmore.lk
    
    
    මේටික ඔක්කොම ඩවුන්ලෝඩ් කරලා එකතැනකට අරගෙන Bot කෙනෙක් Program කරන්න ගොඩක් මහන්සි උනා.🤯🥵
    ඒ මහන්සියෙන් ඔයාලා ලොකු ප්‍රයෝජනයක් ගනීවි කියලා හිතනවා...!😊🥰
    එහෙනම් කොල්ලනේ කෙල්ලනේ  OL සුපිරි ගේමක් ගහපල්ලා🤟💪
    මම පසිදු සදරුවන්.🤗
    

    *අන්තිමටත් කියන්න තියෙන්නෙ හැමෝටම Share කරලා එයාලටත් Help එකක් දෙන්න.!
(තනියෙන් ගොඩ ගිහින් වැඩක් නෑ. සෙට් එකත් එක්ක ගොඩ යමු)💪*

SL Real Tech (http://youtube.com/slrealtech) ඉදිරිපත් කිරීමක්!
    
    `
    ElisaBotMd.sendText(m.chat,menu)

 }

 break

 //buddhism


 case 'buddhism':{
   const menu=`වර්ෂය තෝරන්න..!😎

   2015 *bud_2015*
   2016 *bud_2016*
   2017 *bud_2017*
   2018 *bud_2018*
   2019 *bud_2019*
   2020 *bud_2020*
   
   Past-Papers-OL-bot🎓 By Pasindu Sandaruwan
   @pastpapersolbot 👈On Telegram`
   ElisaBotMd.sendText(m.chat,menu)

}

break

//

case 'bud_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2015-OL-BUDDHISM-PART-I.pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'part1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'Part2.pdf'}, { quoted: m })

}
break

case 'bud_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2016-OL-BUDDHISM-PART-I.pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2016-OL-BUDDHISM-PART-II.pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_part1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'bud_Part2.pdf'}, { quoted: m })

}
break



case 'bud_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2017-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2017.pdf'}, { quoted: m })

}
break




case 'bud_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2018-OL-BUDDHISM.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2018.pdf'}, { quoted: m })

}
break




case 'bud_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2019-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2019.pdf'}, { quoted: m })

}
break




case 'bud_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Buddhism/2020-OL-Buddhism.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'bud_2020.pdf'}, { quoted: m })

}
break



//



case 'eng_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2015-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2015.pdf'}, { quoted: m })

}
break
   

case 'eng_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2016-OL-English(ii).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2016-OL-English-(i).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2016_2.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2016_1.pdf'}, { quoted: m })

}
break



case 'eng_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2017-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2017.pdf'}, { quoted: m })

}
break


case 'eng_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2018-OL-English(i).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2018-OL-English(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2018_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'eng_2018_2.pdf'}, { quoted: m })

}
break





case 'eng_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2019-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2019.pdf'}, { quoted: m })

}
break





case 'eng_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/English/2020-OL-English.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'eng_2020.pdf'}, { quoted: m })

}
break
   



//


case 'sin_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2015-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2015.pdf'}, { quoted: m })

}
break
   
   
case 'sin_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2016-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2016.pdf'}, { quoted: m })

}
break



case 'sin_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2017-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2017.pdf'}, { quoted: m })

}
break



case 'sin_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2018-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2018.pdf'}, { quoted: m })

}
break


case 'sin_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2019-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2019.pdf'}, { quoted: m })

}
break


case 'sin_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/Sinhala/2020-OL-Sinhala%20(i%2Cii%2Ciii).pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'sin_2020.pdf'}, { quoted: m })

}
break


//

case 'his_2015': {
 
   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2015-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2015.pdf'}, { quoted: m })

}
break



case 'his_2016': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2016-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2016.pdf'}, { quoted: m })

}
break


case 'his_2017': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2017-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2017-OL-History(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2017_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2017_2.pdf'}, { quoted: m })

}
break


case 'his_2018': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2018-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2018.pdf'}, { quoted: m })

}
break



case 'his_2019': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2019-OL-History(i).pdf'
   let PAPER2 = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2019-OL-History(ii).pdf'

   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2019_1.pdf'}, { quoted: m })
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER2 }, mimetype: 'application/pdf', fileName: 'his_2019_2.pdf'}, { quoted: m })

}
break



case 'his_2020': {

   let PAPER = 'https://github.com/slrealtech/Past-Papers-MD/raw/main/Past-Paper%20BOT/History/2020-OL-History.pdf'
   ElisaBotMd.sendMessage(m.chat, { document: { url:PAPER }, mimetype: 'application/pdf', fileName: 'his_2020.pdf'}, { quoted: m })

}
<<<<<<< HEAD
break
=======
break
>>>>>>> eb1583cdf617fbe7f91fbf722f1b8f02a2869b03
