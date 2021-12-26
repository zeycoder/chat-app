const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);
io.on('connection',socket=>{
    console.log('bir kullanıcı bağlandı');

    socket.on('disconnect', () =>{
        console.log('bir kullanıcı ayrıldı')
    });
});