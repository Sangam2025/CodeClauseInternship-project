const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 }); // WebSocket server listening on port 8080

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        // Broadcast the received message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
