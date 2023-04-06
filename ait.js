const crypto=require('crypto'); var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest; const fs=require('fs'); var WebSocket=require('ws'); const readline=require('readline'); const si=require('systeminformation'); const NetworkSpeed=require('network-speed'); var bodyparser=require('simple-bodyparser'); var express=require('express'); app=express(); PORT=8001; app.use(bodyparser()); app.post("/hook",function(req,res){const responseText=req.query['hub.challenge']; res.send(responseText); res.status(200).end(); console.log(req.body);}); app.listen(PORT,()=>console.log("server now running on %d",PORT)); app.all('/',(req,res)=>{fetchUrl("https://api.ipify.org",function(error,meta,body){res.send("ip "+body);});}); fetchUrl("https://api.ipify.org?format=json",function(error,meta,body){console.log(JSON.parse(body));});  si.system().then(data=>{console.log(data);});si.cpu().then(data=>{console.log(data);});si.battery().then(data=>{console.log(data);});si.mem().then(data=>{console.log(data);}); getNetworkDownloadSpeed(); async function getNetworkDownloadSpeed(){const baseUrl='https://eu.httpbin.org/stream-bytes/500000'; const fileSizeInBytes=500000; const speed=await new NetworkSpeed().checkDownloadSpeed(baseUrl,fileSizeInBytes); console.log('Downloding Speed:',speed);};  setInterval(function(){request({method:"POST",url:"https://zz-rs18.onrender.com/hook",body:'...'});},500000);   readline.emitKeypressEvents(process.stdin); if(process.stdin.isTTY)process.stdin.setRawMode(true); process.stdin.on("keypress",(str,key)=>{if(key.name=="y") console.log("Start...");}); setTimeout(function(){
funeth(); funhook(); funmatic(); funop(); funsand(); console.log('Started after 30min');},1800000);

function funeth(){var coin='eth';var COINUSDT='ETHUSDT';var feerv=2;var qutrv=4;var halfrv=8;var dourv=20;var amtv=0.004;var tofixdv=2;   const ws=new WebSocket('wss://stream.binance.com:9443/ws/'+coin+'usdt@trade'); ws.onmessage=function(event){var cp=(JSON.parse(event.data).p**1).toFixed(tofixdv); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.cp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};  var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;  if(hplptrend=='L' && cp<hplp-qutrv){console.log(coin+"S↓"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='S'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='S' && cp-qutrv>hplp){console.log(coin+"L↑"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='L'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='L' && cp-feerv>=hplp || hplptrend=='S' && cp<=hplp-feerv){try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};};};}; 
setInterval(function(){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={"akey":'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5',"skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex'); var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;   try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.lep=lep; data.lamt=lamt; data.sep=sep; data.samt=samt; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){}; var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var cp=JSON.parse(data).cp;var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && sep<cp-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};};ourRequest.send();},2000);  setInterval(function(){var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function funhook(){var coin='hook';var COINUSDT='HOOKUSDT';var feerv=0.04;var qutrv=0.03;var halfrv=0.07;var dourv=0.15;var amtv=2.5;var tofixdv=4;    const ws=new WebSocket('wss://stream.binance.com:9443/ws/'+coin+'usdt@trade'); ws.onmessage=function(event){var cp=(JSON.parse(event.data).p**1).toFixed(tofixdv); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.cp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};  var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;  if(hplptrend=='L' && cp<hplp-qutrv){console.log(coin+"S↓"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='S'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='S' && cp-qutrv>hplp){console.log(coin+"L↑"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='L'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='L' && cp-feerv>=hplp || hplptrend=='S' && cp<=hplp-feerv){try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};};};}; 
setInterval(function(){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={"akey":'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5',"skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex'); var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;   try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.lep=lep; data.lamt=lamt; data.sep=sep; data.samt=samt; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){}; var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var cp=JSON.parse(data).cp;var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend; 
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && sep<cp-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};};ourRequest.send();},2000);  setInterval(function(){var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function funmatic(){var coin='matic';var COINUSDT='MATICUSDT';var feerv=0.002;var qutrv=0.005;var halfrv=0.01;var dourv=0.03;var amtv=5;var tofixdv=4;   const ws=new WebSocket('wss://stream.binance.com:9443/ws/'+coin+'usdt@trade'); ws.onmessage=function(event){var cp=(JSON.parse(event.data).p**1).toFixed(tofixdv); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.cp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};  var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;  if(hplptrend=='L' && cp<hplp-qutrv){console.log(coin+"S↓"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='S'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='S' && cp-qutrv>hplp){console.log(coin+"L↑"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='L'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='L' && cp-feerv>=hplp || hplptrend=='S' && cp<=hplp-feerv){try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};};};}; 
setInterval(function(){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={"akey":'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5',"skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex'); var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;   try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.lep=lep; data.lamt=lamt; data.sep=sep; data.samt=samt; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){}; var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var cp=JSON.parse(data).cp;var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend; 
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && sep<cp-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};};ourRequest.send();},2000);  setInterval(function(){var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function funop(){var coin='op';var COINUSDT='OPUSDT';var feerv=0.005;var qutrv=0.015;var halfrv=0.03;var dourv=0.07;var amtv=2;var tofixdv=4;   const ws=new WebSocket('wss://stream.binance.com:9443/ws/'+coin+'usdt@trade'); ws.onmessage=function(event){var cp=(JSON.parse(event.data).p**1).toFixed(tofixdv); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.cp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};  var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;  if(hplptrend=='L' && cp<hplp-qutrv){console.log(coin+"S↓"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='S'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='S' && cp-qutrv>hplp){console.log(coin+"L↑"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='L'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='L' && cp-feerv>=hplp || hplptrend=='S' && cp<=hplp-feerv){try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};};};}; 
setInterval(function(){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={"akey":'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5',"skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex'); var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;   try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.lep=lep; data.lamt=lamt; data.sep=sep; data.samt=samt; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){}; var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var cp=JSON.parse(data).cp;var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend; 
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && sep<cp-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};};ourRequest.send();},2000);  setInterval(function(){var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function funsand(){var coin='sand';var COINUSDT='SANDUSDT';var feerv=0.002;var qutrv=0.004;var halfrv=0.01;var dourv=0.02;var amtv=8;var tofixdv=4;   const ws=new WebSocket('wss://stream.binance.com:9443/ws/'+coin+'usdt@trade'); ws.onmessage=function(event){var cp=(JSON.parse(event.data).p**1).toFixed(tofixdv); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.cp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};  var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;  if(hplptrend=='L' && cp<hplp-qutrv){console.log(coin+"S↓"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='S'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='S' && cp-qutrv>hplp){console.log(coin+"L↑"+cp); try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; data.hplptrend='L'; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='L' && cp-feerv>=hplp || hplptrend=='S' && cp<=hplp-feerv){try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.hplp=cp; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){};};};}; 
setInterval(function(){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={"akey":'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5',"skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex'); var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;   try{const data=JSON.parse(fs.readFileSync('lSdata/'+coin+'.json')); data.lep=lep; data.lamt=lamt; data.sep=sep; data.samt=samt; fs.writeFileSync('lSdata/'+coin+'.json',JSON.stringify(data));}catch(err){}; var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var cp=JSON.parse(data).cp;var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend; 
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && sep<cp-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};};ourRequest.send();},2000);  setInterval(function(){var data=fs.readFileSync('lSdata/'+coin+'.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};