const { Discord, MessageEmbed ,Client } = require('discord.js');
const client = new Client();
const { MessageButton } = require('discord-buttons')(client);
const moment = require('moment');
const cfg = require('./ayarlar.json');

client.on('ready', async => {
  client.user.setPresence({ activity: { name: "VANESSA ❤️ SHELBY" }, status: "dnd" });
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
 })

client.on("message", (message) => {


if (message.content !== "!recepefsanesibutton" || message.author.id === cfg.bot.BotOwner || message.author.bot) return;

// BUTONLAR
//--------------------------------\\

// Çekilis Katılımcısı
let CekilisKatılımcı = new MessageButton()
  .setStyle('green') // Rengi ayarlayabilirsiniz.
  .setLabel('🎉 Çekiliş Katılımcısı') // Adını Değiştirebilirsiniz.
  .setID('CekilisKatılımcı'); // Elleme Bunu

// Etkinlik Katılımcı
let EtkinlikKatılımcı = new MessageButton()
  .setStyle('red') // Rengi ayarlayabilirsiniz.
  .setLabel('🎉Etkinlik Katılımcısı') // Adını Değiştirebilirsiniz.
  .setID('EtkinlikKatılımcı'); // Elleme Bunu


//--------------------------------\\

/*let XpeawEmbed = new MessageEmbed()
.setAuthor("✬ V A N E S S A")
.setColor("RANDOM")
.setDescription(`

Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın.

\`>\` <@&${cfg.roles.vkrole}> 

\`>\` <@&${cfg.roles.dc}> 

\`>\` <@&${cfg.roles.gartic}> 


`)
.setFooter(`✬ V A N E S S A`)
.setTimestamp()
message.channel.send({ buttons: 
  [
    Vk, 
    Dc, 
    Gartic
  ], 
  embed: XpeawEmbed 
}); */


message.channel.send(`

\`Kayıtlı , kayıtsız olarak hepiniz bu kanalı görebilmektesiniz.Bu sunucumuzda everyone here atılmayacağından dolayı sunucunun başında tüm herkesin alabileceği rollerimizi mutlaka ama mutlaka tıklayarak almanız sizin için de bizim için de mükemmel olacaktır!\`

<@&884130989130006538> **: Rolünü alırsanız , tüm çekilişlerimizden haberdar olacak ve boş boş etiketler yemeyeceksiniz. @everyone veya @here kullanmayacağımız için çekilişlerde çekiliş katılımcısı alımını konserler ve etkinlikler için tüm herkese açtık!Kayıtsız olsanız bile mutlaka alın teşekkürler.**

<@&884131010185416735> \`: Konserler ve etkinliklerden haberdar olmak için alınan rol \`


<@&884131010185416735>  **: Bu rolümüzü çekiliş rolünü almasanız bile almalısınız çünkü konserler ve diğer turnuva , yarışmalar için bile ever here sık sık atmayacağız o yüzden çekiliş katılımcısı almasanız bile** <@&884131010185416735> **rolünü mutlaka üstünüze almanızı şiddetle önemle tavsiye ederim.Hepinize eğlenceli vakitler geçirmeniz dileğiyle ** ||@everyone||

\`>\` <@&${cfg.roles.CekilisKatılımcı}>

\`>\` <@&${cfg.roles.EtkinlikKatılımcı}>

`, { 
  buttons: [ CekilisKatılımcı, EtkinlikKatılımcı ]
});

});

client.on('clickButton', async (button) => {
  // Çekilis Katılımcısı
    if (button.id === 'CekilisKatılımcı') {
        if (button.clicker.member.roles.cache.get(cfg.roles.CekilisKatılımcı)) {
            await button.clicker.member.roles.remove(cfg.roles.CekilisKatılımcı)
            await button.think(true);
            await button.reply.edit("Cekilis Katılımcı Rolü Üzerinizden Alındı!")
        } else {
            await button.clicker.member.roles.add(cfg.roles.CekilisKatılımcı)
            await button.think(true);
            await button.reply.edit("Cekilis Katılımcı Rolü Üzerinize Verildi!")
        }
    }

  // Etkinlik Katılımcı
    if (button.id === 'EtkinlikKatılımcı') {
        if (button.clicker.member.roles.cache.get(cfg.roles.EtkinlikKatılımcı)) {
            await button.clicker.member.roles.remove(cfg.roles.EtkinlikKatılımcı)
            await button.think(true);
            await button.reply.edit(`Etkinlik Katılımcı Rolü Üzerinizden Alındı!`)
        } else {
            await button.clicker.member.roles.add(cfg.roles.EtkinlikKatılımcı)
            await button.think(true);
            await button.reply.edit(`Etkinlik Katılımcı Rolü Üzerinize Verildi!`)
        }

    }
 
});


client.login(cfg.bot.token);
