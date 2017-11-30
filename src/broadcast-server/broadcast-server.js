/**
 * Broadcast server using websockets running on an http server.
 */
function bcs(server) {
    "use strict";

    const WebSocket = require('ws');

    const wss = new WebSocket.Server({
        server: server,
        clientTracking: true,
        handleProtocols: handleProtocols
    });


    // Setup for websocket requests.
    // Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
    wss.on("connection", (ws, req) => {
        ws.username = false;
        console.log(`wss - Connection received from '${req.connection.remoteAddress}'`);

        ws.on("message", (message) => {
            if (ws.username === false) {
                ws.username = message;
                broadcast(ws, `${ws.username} connected.`);
            } else {
                broadcast(ws, `${ws.username}: ` + message);
            }
        });

        ws.on("error", (error) => {
            console.log(`wss - Server error: ${error}`);
        });

        ws.on("close", (code) => {
            console.log(`wss - Closing connection '${req.connection.remoteAddress}' Code:${code}`);
            broadcast(ws, `${ws.username} disconnected.`);
        });
    });


    /**
     * Broadcast data to everyone except one self (ws).
     *
     * @param {WebSocket} ws   The current websocket.
     * @param {string}    data The data to send.
     *
     * @return {void}
     */
    function broadcast(ws, data) {
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                if (ws.protocol === "json") {
                    client.send(protocolJSON(data));
                } else if (ws.protocol === "text") {
                    client.send(data);
                }
            }
        });
        // console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
    }

    /**
     * Convert data to JSON protocol.
     * @param  {dynamic} data Data to broadcasted.
     * @return {JSON}         JSON object.
     */
    function protocolJSON(data) {
        let msg = {
            timestamp: Date(),
            data: data
        };

        return JSON.stringify(msg);
    }
    /**
     * Select subprotocol to use for connection.
     *
     * @param {Array} protocols              Subprotocols to choose from, sent
     *                                        by client request.
     * @param {http.IncomingMessage} request The client HTTP GET request.
     *
     * @return {void}
     */
    function handleProtocols(protocols /*, request */ ) {
        for (var i = 0; i < protocols.length; i++) {
            if (protocols[i] === "text") {
                return "text";
            } else if (protocols[i] === "json") {
                return "json";
            } else {
                return "text";
            }
        }
        return false;
    }
}

module.exports = bcs;
