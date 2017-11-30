/**
 * To setup a websocket connection, and nothing more.
 */
(function() {
    "use strict";

    let websocket;
    let url = document.getElementById("connect_url");
    let connect = document.getElementById("connect");
    let protocol = document.getElementById("protocol");
    let sendMessageBtn = document.getElementById("send_message");
    let message = document.getElementById("message");
    let close = document.getElementById("close");
    let output = document.getElementById("chatLog");

    var username = prompt("Välj en alias");

    /**
     * Log output to web browser.
     *
     * @param  {string} message to output in the browser window.
     *
     * @return {void}
     */
    function outputLog(message) {
        let now = new Date();
        let timestamp = now.toLocaleTimeString();

        output.innerHTML += `${timestamp} ${message}<br>`;
        output.scrollTop = output.scrollHeight;
    }




    /**
     * Select what subprotocol to use for websocekt connection.
     *
     * @return {string} with name of subprotocol.
     */
    function setSubProtocol() {
        return protocol.value;
    }


    /**
     * What to do when user clicks Connect
     */
    connect.addEventListener("click", function( /*event*/ ) {
        if (!protocol.value) {
            websocket = new WebSocket(url.value, null);
        } else {
            websocket = new WebSocket(url.value, setSubProtocol());
        }

        websocket.onopen = function() {
            outputLog("You connected using protocol '" + websocket.protocol + "'.");
            websocket.send(username);
        };

        websocket.onmessage = function(event) {
            outputLog("" + event.data);
        };

        websocket.onclose = function() {
            outputLog("Connection closed.");
        };
    }, false);



    function sendMessage() {
        let messageText = message.value;

        if (!websocket || websocket.readyState === 3) {
            console.log("The websocket is not connected to a server.");
        } else {
            websocket.send(messageText);
            outputLog(`${username}: ` + messageText);
        }
        message.value = "";
    }


    /**
     * What to do when user clicks to send a message.
     */
    sendMessageBtn.addEventListener("click", function( /*event*/ ) {
        let messageText = message.value;

        if (!websocket || websocket.readyState === 3) {
            console.log("The websocket is not connected to a server.");
        } else {
            websocket.send(messageText);
            outputLog(`${username}: ` + messageText);
        }
    });


    document.addEventListener('keydown', (event) => {
        const keyName = event.key;

        if (keyName === 'Enter') {
            sendMessage();
        }
    }, false);


    /**
     * What to do when user clicks Close connection.
     */
    close.addEventListener("click", function( /*event*/ ) {
        websocket.close();
    });
})();
