console.log("RJ");

 

//const admin=require("firebase-admin"); const crypto=require('crypto'); var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest; const fs=require('fs'); const readline=require('readline'); const si=require('systeminformation'); const os=require("os"); const NetworkSpeed=require('network-speed');var geoip=require('geoip-lite'); var bodyparser=require('simple-bodyparser'); var express=require('express'); app=express(); PORT=8101; app.use(bodyparser()); app.post("/hook",function(req,res){const responseText=req.query['hub.challenge']; res.send(responseText); res.status(200).end(); console.log(req.body);}); app.listen(PORT,()=>console.log("server now running on %d",PORT)); app.all('/',(req,res)=>{fetchUrl("https://api.ipify.org",function(error,meta,body){res.send("ip "+body);});}); fetchUrl("https://api.ipify.org?format=json",function(error,meta,body){console.log(JSON.parse(body));console.log(geoip.lookup(JSON.parse(body).ip));});console.log(os.hostname()+" "+os.type()+" "+os.platform()+" mem"+os.totalmem()+" freem"+os.freemem()+" "+os.homedir()+" "+os.uptime()+"secUptime "+os.release());console.log(os.cpus());si.system().then(data=>{console.log(data);});si.cpu().then(data=>{console.log(data);});si.battery().then(data=>{console.log(data);});getNetworkDownloadSpeed(); async function getNetworkDownloadSpeed(){const baseUrl='https://eu.httpbin.org/stream-bytes/500000'; const fileSizeInBytes=500000; const speed=await new NetworkSpeed().checkDownloadSpeed(baseUrl,fileSizeInBytes); console.log('Downloding Speed:',speed);};  setInterval(function(){request({method:"POST",url:"https://ait2.onrender.com/hook",body:'...'});},500000);   readline.emitKeypressEvents(process.stdin); if(process.stdin.isTTY)process.stdin.setRawMode(true); process.stdin.on("keypress",(str,key)=>{if(key.name=="y") console.log("Start...");});

setInterval(function() {

 //const now = new Date();

//const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };

//console.log(now.toLocaleString('en-US', options));

 

 

 

 }, 5000);

 

 

 

 

 

// const Binance = require('node-binance-api');

//const binance = new Binance().options({

//  APIKEY: 'd5uu4LefMLqhJtp39yUKMfsCKOojLaWFC1p3lbhroUcCxwPf1J21TL6cXZRKHTno',

 // APISECRET: '0wSkrxQkaaDjCtIuEr1ht9OL3YKmutLkP8Sz1h7A71TH7KTYFA3WPBsdcpZCie98',

//});

//binance.futuresAccount().then((data) => {

 // console.log('Futures account data:', data);

//});

 

 

 

//const Binance = require('binance-api-node').default;

//const client = Binance({

 // apiKey: 'd5uu4LefMLqhJtp39yUKMfsCKOojLaWFC1p3lbhroUcCxwPf1J21TL6cXZRKHTno',

 

//  apiSecret: '0wSkrxQkaaDjCtIuEr1ht9OL3YKmutLkP8Sz1h7A71TH7KTYFA3WPBsdcpZCie98'

//});

const { Binance } = require('binance-api-node');

const client = Binance({

  apiKey: 'd5uu4LefMLqhJtp39yUKMfsCKOojLaWFC1p3lbhroUcCxwPf1J21TL6cXZRKHTno',

  apiSecret: '0wSkrxQkaaDjCtIuEr1ht9OL3YKmutLkP8Sz1h7A71TH7KTYFA3WPBsdcpZCie98',

});

client.getTrades({

  symbol: 'BTCUSDT'

})

  .then(trades => {

    let pnl = 0;

    trades.forEach(trade => {

      pnl += parseFloat(trade.realizedPnl);

    });

    console.log(`Total PnL for BTCUSDT: ${pnl}`);

  })

  .catch(error => {

    console.error(error);

  });

//for (let i = 1; i <= 100000000000000000000; i++) {

 // console.log(i);

//}

