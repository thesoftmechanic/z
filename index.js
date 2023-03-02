const crypto=require('crypto'); var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest; const fs=require('fs'); const readline = require('readline'); const si = require('systeminformation'); const NetworkSpeed = require('network-speed'); var bodyparser=require('simple-bodyparser');  app=require('express')(); app.all('/',(req,res)=>{fetchUrl("https://api.ipify.org",function(error,meta,body){res.send("ip "+body); });});  app.post("/hook",function(req,res){res.send(req.query['hub.challenge']); res.status(200).end(); console.log(req.body);}); app.listen(PORT="8001",()=>console.log("server now running on %d",PORT,"  press 'y' to start"));  fetchUrl("https://api.ipify.org?format=json",function(error,meta,body){console.log(JSON.parse(body));});  si.system().then(data=>{console.log(data);});si.cpu().then(data=>{console.log(data);});si.battery().then(data=>{console.log(data);});si.mem().then(data=>{console.log(data);}); getNetworkDownloadSpeed(); async function getNetworkDownloadSpeed(){const baseUrl='https://eu.httpbin.org/stream-bytes/500000'; const fileSizeInBytes=500000; const speed=await new NetworkSpeed().checkDownloadSpeed(baseUrl,fileSizeInBytes); console.log('Downloding Speed:',speed);};  setInterval(function(){request({method:"POST",url:"https://zz-rs18.onrender.com/hook",body:'...'});},500000);   readline.emitKeypressEvents(process.stdin); if(process.stdin.isTTY)process.stdin.setRawMode(true); process.stdin.on("keypress",(str,key)=>{if(key.name=="y") console.log("Start...");});  
setTimeout(function(){funeth(); fundoge(); funltc(); funop(); fundusk(); console.log('Started after 30min');},1800000);

function funeth(){var coin='eth'; var COINUSDT='ETHUSDT'; var feerv=2; var qutrv=4; var halfrv=8; var dourv=20; var amtv=0.004; var tofixdv=1;       setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"",function(error,meta,body){if(body!=NaN || body!=''){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-getCountryByCode('SHORT')[0].positionAmt; fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:hplp, hplptrend:hplptrend}),function(err){if(err)throw err;});
if(cp-feerv>=hplp && hplptrend=='L' || cp<=hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:hplptrend }), function(err){if(err)throw err;});};  if(cp<hplp-qutrv && hplptrend=='L'){console.log(coin+"S↓"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'S' }), function(err){if(err)throw err;});};  if(cp-qutrv>hplp && hplptrend=='S'){console.log(coin+"L↑"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'L' }), function(err){if(err)throw err;});};  };};ourRequest.send();});};},2000);
setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && cp>sep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};},2000);  setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function fundoge(){var coin='doge'; var COINUSDT='DOGEUSDT'; var feerv=0.0002; var qutrv=0.0005; var halfrv=0.001; var dourv=0.002; var amtv=70; var tofixdv=5;     setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"",function(error,meta,body){if(body!=NaN || body!=''){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=getCountryByCode('SHORT')[0].positionAmt; fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:hplp, hplptrend:hplptrend}),function(err){if(err)throw err;});
if(cp-feerv>=hplp && hplptrend=='L' || cp<=hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:hplptrend }), function(err){if(err)throw err;});};  if(cp<hplp-qutrv && hplptrend=='L'){console.log(coin+"S↓"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'S' }), function(err){if(err)throw err;});};  if(cp-qutrv>hplp && hplptrend=='S'){console.log(coin+"L↑"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'L' }), function(err){if(err)throw err;});};  };};ourRequest.send();});};},2000);
setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && cp>sep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};},2000);  setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function funltc(){var coin='ltc'; var COINUSDT='LTCUSDT'; var feerv=0.2; var qutrv=0.4; var halfrv=0.7; var dourv=1.5; var amtv=0.06; var tofixdv=4;      setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"",function(error,meta,body){if(body!=NaN || body!=''){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=getCountryByCode('SHORT')[0].positionAmt; fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:hplp, hplptrend:hplptrend}),function(err){if(err)throw err;});
if(cp-feerv>=hplp && hplptrend=='L' || cp<=hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:hplptrend }), function(err){if(err)throw err;});};  if(cp<hplp-qutrv && hplptrend=='L'){console.log(coin+"S↓"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'S' }), function(err){if(err)throw err;});};  if(cp-qutrv>hplp && hplptrend=='S'){console.log(coin+"L↑"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'L' }), function(err){if(err)throw err;});};  };};ourRequest.send();});};},2000);
setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && cp>sep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};},2000);  setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function funop(){var coin='op'; var COINUSDT='OPUSDT'; var feerv=0.005; var qutrv=0.015; var halfrv=0.03; var dourv=0.07; var amtv=2; var tofixdv=4;    setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"",function(error,meta,body){if(body!=NaN || body!=''){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=getCountryByCode('SHORT')[0].positionAmt; fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:hplp, hplptrend:hplptrend}),function(err){if(err)throw err;});
if(cp-feerv>=hplp && hplptrend=='L' || cp<=hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:hplptrend }), function(err){if(err)throw err;});};  if(cp<hplp-qutrv && hplptrend=='L'){console.log(coin+"S↓"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'S' }), function(err){if(err)throw err;});};  if(cp-qutrv>hplp && hplptrend=='S'){console.log(coin+"L↑"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'L' }), function(err){if(err)throw err;});};  };};ourRequest.send();});};},2000);
setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && cp>sep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};},2000);  setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};

function fundusk(){var coin='dusk'; var COINUSDT='DUSKUSDT'; var feerv=0.0005; var qutrv=0.002; var halfrv=0.005; var dourv=0.01; var amtv=25; var tofixdv=5;  setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"",function(error,meta,body){if(body!=NaN || body!=''){var cp=(JSON.parse(body).price**1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=getCountryByCode('SHORT')[0].positionAmt; fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:hplp, hplptrend:hplptrend}),function(err){if(err)throw err;});
if(cp-feerv>=hplp && hplptrend=='L' || cp<=hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:hplptrend }), function(err){if(err)throw err;});};  if(cp<hplp-qutrv && hplptrend=='L'){console.log(coin+"S↓"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'S' }), function(err){if(err)throw err;});};  if(cp-qutrv>hplp && hplptrend=='S'){console.log(coin+"L↑"+cp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({cp:cp, lep:lep, lamt:lamt, sep:sep, samt:samt, hplp:cp, hplptrend:'L' }), function(err){if(err)throw err;});};  };};ourRequest.send();});};},2000);
setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;
// if(lep!=0 && hplptrend=='S' || lep!=0 && cp<lep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && hplptrend=='L' || sep!=0 && cp>sep-qutrv){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv/2 && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv/2 && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---qutrv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
};},2000);  setInterval(function(){var data=fs.readFileSync('localStorage_data/'+coin+'data.json','utf8'); if(data!=''){var hplp=JSON.parse(data).hplp;var hplptrend=JSON.parse(data).hplptrend;var cp=JSON.parse(data).cp;var lep=JSON.parse(data).lep;var lamt=JSON.parse(data).lamt;var sep=JSON.parse(data).sep;var samt=JSON.parse(data).samt;console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+"  "+new Date().toLocaleString()); };},500000);};
