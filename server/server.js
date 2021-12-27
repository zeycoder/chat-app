const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

let users = [];
let messages =[];

io.on('connection',socket=>{
    console.log('bir kullanıcı bağlandı')
    socket.on('new_user',(name)=>{
        users.push({
            id: socket.id,
            name
        });
        io.emit('users',users);
        io.emit('messages',messages)
    });

    socket.on('new_message',(message)=>{
        messages.push("<b>"+message.name+":</b>"+message.message);
        io.emit('messages',messages)
    });

    socket.on('disconnect', () =>{
        console.log('bir kullanıcı ayrıldı')
        const index = users.indexOf(socket.id);
        users.splice(index,1);
        io.emit('users',users);
    });
});