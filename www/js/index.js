
var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        // app.checkConnection();


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // checkConnection: function() {
    //     var networkState = navigator.connection.type;
    //     var states = {};
    //     states[Connection.UNKNOWN]  = 'Unknown connection';
    //     states[Connection.ETHERNET] = 'Ethernet connection';
    //     states[Connection.WIFI]     = 'WiFi connection';
    //     states[Connection.CELL_2G]  = 'Cell 2G connection';
    //     states[Connection.CELL_3G]  = 'Cell 3G connection';
    //     states[Connection.CELL_4G]  = 'Cell 4G connection';
    //     states[Connection.CELL]     = 'Cell generic connection';
    //     states[Connection.NONE]     = 'No';

    //     if (states[networkState] == "no") {
    //       alert("Verifique sua conexão com a internet");
    //     }
        
    // }
};
