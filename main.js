const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NjY5ODA2NDEwNDQ3NTg1Mjkw.XipuVg.r0LadPXisvP_TlV_Ra-chpoin1Q';
client.on('ready', () => {
	console.log('ready...');
});

let https = require('https');
let data = [];
const url = "https://asia-northeast1-sheetstowebapi.cloudfunctions.net/api?id=13JTqg4UV3SyBEGhlLHsG5M9ilrIJaRfm8our0mmBW7U&range=シート1!A1:H100"



client.on('message', message => {
	if (message.author.bot) {
		return;
	}

	let number = []

	for (i = 1; i <= 5; i++) {
		number.push(i);
	}

	if (message.content === `?<1><` + number[0] + `>`) {
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				data.push(chunk);
			}).on('end', function () {

				let funcNumber = number[0] - 1;
				const events = Buffer.concat(data);
				const r = JSON.parse(events);


				let channel = message.channel;
				let author = message.author.username;
				let reply_text_1 = r[funcNumber].締め切り;
				let ready_text_2 = "エラー";
				let ready_text_3 = "エラー";
				let ready_text_4 = "エラー";
				let ready_text_5 = r[funcNumber].総合;
				let ready_text_6 = r[funcNumber].感想;
				let ready_text_7 = r[funcNumber].名前;
				message.reply(`\n名前:${ready_text_7}\n締め切り:${reply_text_1}\nデザイン性(/5):${ready_text_2}\n使いやすさ(/5):${ready_text_3}\n完全性(/5):${ready_text_4}\n総合:${ready_text_5}\n感想:${ready_text_6}`)


			});
		});
	}
	if (message.content === `?<1><` + number[1] + `>`) {
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				data.push(chunk);
			}).on('end', function () {

				let funcNumber = number[1] - 1;
				const events = Buffer.concat(data);
				const r = JSON.parse(events);


				let channel = message.channel;
				let author = message.author.username;
				let reply_text_1 = r[funcNumber].締め切り;
				let ready_text_2 = "エラー";
				let ready_text_3 = "エラー";
				let ready_text_4 = "エラー";
				let ready_text_5 = r[funcNumber].総合;
				let ready_text_6 = r[funcNumber].感想;
				let ready_text_7 = r[funcNumber].名前;
				message.reply(`\n名前:${ready_text_7}\n締め切り:${reply_text_1}\nデザイン性(/5):${ready_text_2}\n使いやすさ(/5):${ready_text_3}\n完全性(/5):${ready_text_4}\n総合:${ready_text_5}\n感想:${ready_text_6}`)


			});
		});
	}
	if (message.content === `?<1><` + number[2] + `>`) {
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				data.push(chunk);
			}).on('end', function () {

				let funcNumber = number[2] - 1;
				const events = Buffer.concat(data);
				const r = JSON.parse(events);


				let channel = message.channel;
				let author = message.author.username;
				let reply_text_1 = r[funcNumber].締め切り;
				let ready_text_2 = "エラー";
				let ready_text_3 = "エラー";
				let ready_text_4 = "エラー";
				let ready_text_5 = r[funcNumber].総合;
				let ready_text_6 = r[funcNumber].感想;
				let ready_text_7 = r[funcNumber].名前;
				message.reply(`\n名前:${ready_text_7}\n締め切り:${reply_text_1}\nデザイン性(/5):${ready_text_2}\n使いやすさ(/5):${ready_text_3}\n完全性(/5):${ready_text_4}\n総合:${ready_text_5}\n感想:${ready_text_6}`)


			});
		});
	}
	if (message.content === `?<1><` + number[3] + `>`) {
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				data.push(chunk);
			}).on('end', function () {

				let funcNumber = number[3] - 1;
				const events = Buffer.concat(data);
				const r = JSON.parse(events);


				let channel = message.channel;
				let author = message.author.username;
				let reply_text_1 = r[funcNumber].締め切り;
				let ready_text_2 = "エラー";
				let ready_text_3 = "エラー";
				let ready_text_4 = "エラー";
				let ready_text_5 = r[funcNumber].総合;
				let ready_text_6 = r[funcNumber].感想;
				let ready_text_7 = r[funcNumber].名前;
				message.reply(`\n名前:${ready_text_7}\n締め切り:${reply_text_1}\nデザイン性(/5):${ready_text_2}\n使いやすさ(/5):${ready_text_3}\n完全性(/5):${ready_text_4}\n総合:${ready_text_5}\n感想:${ready_text_6}`)


			});
		});
	}
	if (message.content === `?<1><` + number[4] + `>`) {
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				data.push(chunk);
			}).on('end', function () {

				let funcNumber = number[4] - 1;
				const events = Buffer.concat(data);
				const r = JSON.parse(events);


				let channel = message.channel;
				let author = message.author.username;
				let reply_text_1 = r[funcNumber].締め切り;
				let ready_text_2 = "エラー";
				let ready_text_3 = "エラー";
				let ready_text_4 = "エラー";
				let ready_text_5 = r[funcNumber].総合;
				let ready_text_6 = r[funcNumber].感想;
				let ready_text_7 = r[funcNumber].名前;
				message.reply(`\n名前:${ready_text_7}\n締め切り:${reply_text_1}\nデザイン性(/5):${ready_text_2}\n使いやすさ(/5):${ready_text_3}\n完全性(/5):${ready_text_4}\n総合${ready_text_5}\n感想:${ready_text_6}`)


			});
		});
	}

});
client.login(token);