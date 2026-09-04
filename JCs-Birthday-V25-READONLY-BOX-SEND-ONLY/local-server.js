const http=require("http"),fs=require("fs"),path=require("path");
const root=__dirname,port=8080;
const types={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".jpg":"image/jpeg",".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".sql":"text/plain; charset=utf-8",".txt":"text/plain; charset=utf-8"};
http.createServer((req,res)=>{
  try{
    let u=decodeURIComponent((req.url||"/").split("?")[0]);
    if(u==="/")u="/index.html";
    const f=path.normalize(path.join(root,u));
    if(!f.startsWith(root)){res.writeHead(403);return res.end("Forbidden")}
    fs.stat(f,(err,st)=>{
      if(err||!st.isFile()){res.writeHead(404);return res.end("Not found")}
      res.writeHead(200,{"Content-Type":types[path.extname(f).toLowerCase()]||"application/octet-stream","Cache-Control":"no-store"});
      fs.createReadStream(f).pipe(res);
    });
  }catch(e){res.writeHead(500);res.end("Server error")}
}).listen(port,"127.0.0.1",()=>console.log(`JC's Birthday local test server: http://localhost:${port}`));
