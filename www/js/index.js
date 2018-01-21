
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
        app.checkConnection();
    },
    checkConnection: function() {
        // var networkState = navigator.connection.type;
        // var states = {};
        // states[Connection.UNKNOWN]  = 'Unknown connection';
        // states[Connection.ETHERNET] = 'Ethernet connection';
        // states[Connection.WIFI]     = 'WiFi connection';
        // states[Connection.CELL_2G]  = 'Cell 2G connection';
        // states[Connection.CELL_3G]  = 'Cell 3G connection';
        // states[Connection.CELL_4G]  = 'Cell 4G connection';
        // states[Connection.CELL]     = 'Cell generic connection';
        // states[Connection.NONE]     = 'No';

        // if (states[networkState] == "no") {
        //     alert("Verifique sua conexão com a internet");
        // }else{
            setTimeout(function() {
                    $("#loadAPP").animate({ height: "0px", opacity: "0", overflow: 'hidden' });
            }, 5000);
        // }
         
        //  alert("Connection type: " + states[networkState]);
    }
};
