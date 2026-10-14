const http=require('node:http'),fs=require('node:fs'),path=require('node:path'),{createHandler}=require('./server/answer.cjs');
if(fs.existsSync('.env.local'))process.loadEnvFile('.env.local');
const handler=createHandler({documents:JSON.parse(fs.readFileSync('knowledge.json','utf8'))});
const base=path.join(__dirname,'dist'),port=Number(process.env.PORT||4189);
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.woff2':'font/woff2','.svg':'image/svg+xml'};
http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://127.0.0.1:'+port);
  if(url.pathname==='/api/chat'){
   const request=new Request(url,{method:req.method,headers:req.headers,...(!['GET','HEAD'].includes(req.method)?{body:req,duplex:'half'}:{})});
   const result=await handler(request);res.writeHead(result.status,Object.fromEntries(result.headers));res.end(Buffer.from(await result.arrayBuffer()));return;
  }
  const pathname=decodeURIComponent(url.pathname)==='/'?'/index.html':decodeURIComponent(url.pathname),file=path.resolve(base,'.'+pathname);
  if(!file.startsWith(base+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end('Not found');return;}
  res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});fs.createReadStream(file).pipe(res);
 }catch{res.writeHead(500);res.end('Request failed');}
}).listen(port,'127.0.0.1',()=>console.log('Studio Launch: http://127.0.0.1:'+port));
