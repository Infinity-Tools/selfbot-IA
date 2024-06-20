import { Client } from 'discord.js-selfbot-v13';
import { chatGPT } from "free-chatgpt-3.5-turbo-api";
const client = new Client();
client.on('ready', async () => {
    console.log(`${client.user.username} ta online!`);
})
client.on('messageCreate', async message => {
    if (message.author.id === client.user.id) return;
    if (message.guildId) return;

    message.reply({ content: "Digitando..." }).then(async res => {
        const msg = await chatGPT({ prompt: `Responda de forma grosseira a seguinte pergunta. Pergunta: ${message.content}` });
        return res.edit({ content: String(msg) });
    });

})



client.login('TOKEN DA SUA CONTA');