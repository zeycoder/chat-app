const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

let users = [];

io.on('connection',socket=>{
    console.log('bir kullanıcı bağlandı');

    socket.on('new_user',(name)=>{
        users.push({
            id: socket.id,
            name
        });
        io.emit('users',users);
    });

    socket.on('disconnect', () =>{
        console.log('bir kullanıcı ayrıldı')
    });
});