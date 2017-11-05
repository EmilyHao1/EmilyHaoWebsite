var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
      case '/':
        sendFile(res, 'index.html')
        break
      case '/index.html':
        sendFile(res, 'index.html')
         break
      case 'css/style.css':
        sendFile(res, '../css/style.css')
         break
      // case '/self_introduction.png':
      //     sendFile(res, 'self_introduction.png')
      //     break
      // case '/activities.jpeg':
      //     sendFile(res, 'activities.jpeg')
      //     break
      // case '/computer-science-jobs.png':
      //     sendFile(res, 'computer-science-jobs.png')
      //     break
      // case '/Work-Experience.jpg':
      //     sendFile(res, 'Work-Experience.jpg')
      //     break
      // case '/major.jpeg':
      //     sendFile(res, 'major.jpeg')
      //     break
      // case '/project.jpeg':
      //     sendFile(res, 'project.jpeg')
      //     break
      default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename) {

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(content, 'utf-8')
  })

}
