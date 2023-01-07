const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '/temps') {
    // Récupération de l'heure actuelle
    const currentTime = new Date();
    // Récupération de l'heure à laquelle le compte à rebours doit s'arrêter
    const endTime = new Date('January 1, 2023 00:00:00');
    // Calcul du temps restant en milisecondes
    const timeLeft = endTime - currentTime;
    // Conversion du temps restant en heures, minutes et secondes
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    // Envoi du message au canal
    message.channel.send(`Il reste ${hours} heures, ${minutes} minutes et ${seconds} secondes avant le Nouvel An !`);
  }
});

client.login('MTA2MTQwMTMwNDU3ODEyOTk0MA.GHFIlH.gHnd4zA3zmdt8qeyw05Grv7H9SQm1z_VtwzlTE');
