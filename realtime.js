// This file should include all of your socket.io server things
export function realtimeapp(io) {
    io.on('connection', ()=>{
        console.log('connection')
    })
}