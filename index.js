const crypto=require('crypto'); var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest; const fs=require('fs'); const readline = require('readline'); const si = require('systeminformation'); const NetworkSpeed = require('network-speed'); var bodyparser=require('simple-bodyparser');  app=require('express')(); app.all('/',(req,res)=>{fetchUrl("https://api.ipify.org",function(error,meta,body){res.send("ip "+body); });});  app.post("/hook",function(req,res){res.send(req.query['hub.challenge']); res.status(200).end(); console.log(req.body);}); app.listen(PORT="8000",()=>console.log("server now running on %d",PORT,"  press 'y' to start"));  fetchUrl("https://api.ipify.org?format=json",function(error,meta,body){console.log(JSON.parse(body));});  si.system().then(data=>{console.log(data);});si.cpu().then(data=>{console.log(data);});si.battery().then(data=>{console.log(data);});si.mem().then(data=>{console.log(data);}); getNetworkDownloadSpeed(); async function getNetworkDownloadSpeed(){const baseUrl='https://eu.httpbin.org/stream-bytes/500000'; const fileSizeInBytes=500000; const speed=await new NetworkSpeed().checkDownloadSpeed(baseUrl,fileSizeInBytes); console.log('Downloding Speed:',speed);};  setInterval(function(){request({method:"POST",url:"https://ait-s3b0.onrender.com/hook",body:'...'});},500000);   readline.emitKeypressEvents(process.stdin); if(process.stdin.isTTY)process.stdin.setRawMode(true); process.stdin.on("keypress",(str,key)=>{if(key.name=="y") console.log("Start..."); 
       });

funeth(); function funeth(){var coin='eth'; var COINUSDT='ETHUSDT'; var feerv=2; var qutrv=4; var halfrv=8; var dourv=20; var amtv=0.004; var tofixdv=0;  setInterval(function(){fs.readFile('ls/'+coin+'hplp.json','utf8',(err,data)=>{if(err){console.log(err);return;}; var hplp=data; fs.readFile('ls/'+coin+'hplptrend.json','utf8',(err,data)=>{if(err){console.log(err);return;}; var hplptrend=data; console.log(hplptrend+hplp); fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"",function(error,meta,body){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now(); var keys={"akey":'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5',"skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex'); var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY',keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;  
// if(lep!=0 &&(hplptrend=='S' || cp<lep-qutrv)){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" ma3"+ma3+" ma15"+ma15+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 &&(hplptrend=='L' || sep+qutrv<cp)){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L' && ma15<ma3){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S' && ma3<ma15){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};ourRequest.send();});});});},2000);  
setInterval(function(){fs.readFile('ls/'+coin+'hplp.json','utf8',(err,data)=>{if(err){console.log(err);return;}; var hplp=data; fs.readFile('ls/'+coin+'hplptrend.json','utf8',(err,data)=>{if(err){console.log(err);return;}; var hplptrend=data; console.log(hplptrend+hplp); fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt; if(hplp+feerv<cp && hplptrend=='L' || cp<hplp-feerv && hplptrend=='S'){fs.writeFile('ls/'+coin+'hplp.json',cp,(err)=>{if(err){console.log(err);return;};});}; if((hplp+++dourv)<cp && hplptrend=='S'){console.log(coin+"L↑"+cp); fs.writeFile('ls/'+coin+'hplp.json',cp,(err)=>{if(err){console.log(err);return;};}); fs.writeFile('ls/'+coin+'hplptrend.json','L',(err)=>{if(err){console.log(err);return;};});}; if(cp<hplp-dourv && hplptrend=='L'){console.log(coin+"S↓"+cp); fs.writeFile('ls/'+coin+'hplp.json',cp,(err)=>{if(err){console.log(err);return;};}); fs.writeFile('ls/'+coin+'hplptrend.json','S',(err)=>{if(err){console.log(err);return;};});};};ourRequest.send();});});});},1800);
setInterval(function(){fs.readFile('ls/'+coin+'hplp.json','utf8',(err,data)=>{if(err){console.log(err);return;}; var hplp=data; fs.readFile('ls/'+coin+'hplptrend.json','utf8',(err,data)=>{if(err){console.log(err);return;}; var hplptrend=data;  console.log(hplptrend+hplp); fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"",function(error,meta,body){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt; console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);};ourRequest.send();});});});},5000); };
