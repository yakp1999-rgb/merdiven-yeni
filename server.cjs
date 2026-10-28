const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname,port=Number(process.env.PORT||4174);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml; charset=utf-8','.md':'text/plain; charset=utf-8','.skp':'application/octet-stream','.skb':'application/octet-stream'};
const server=http.createServer((req,res)=>{let filename;try{let u=new URL(req.url,'http://localhost');filename=path.resolve(root,'.'+decodeURIComponent(u.pathname));if(filename===root)filename=path.join(root,'index.html');if(!filename.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden')}}catch{res.writeHead(400);return res.end('Bad request')}
fs.stat(filename,(err,stat)=>{if(err||!stat.isFile()){res.writeHead(404);return res.end('Not found')}res.setHeader('Content-Type',types[path.extname(filename)]||'application/octet-stream');res.setHeader('Content-Length',stat.size);res.setHeader('X-Content-Type-Options','nosniff');if(/\.sk[bp]$/.test(filename))res.setHeader('Content-Disposition','attachment; filename="'+path.basename(filename)+'"');if(req.method==='HEAD'){res.writeHead(200);return res.end()}fs.createReadStream(filename).pipe(res)})});
server.listen(port,'127.0.0.1',()=>console.log(`Merdiven 3D: http://localhost:${port}`));
server.on('error',e=>{console.error(e.message);process.exitCode=1});

