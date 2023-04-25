const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io').listen(server);
const port = 3000;

io.on("connection", socket => {  
    /**Customers' connections */
    //recieving ride requests from customers

    socket.on("request", (msg, callback) => {
        callback();

        request = "";
        socket.emit(msg.rider_contact + "rider", msg, function(response) {
            request = "true";
        });

        setTimeout(() => {
            if (request != "true") {
                socket.emit(msg.rider_contact + "rider", msg, function(response){});
            }
        }, 3000);
    }); 


    //cancelling a ride by client
    socket.on("client_cancel", (msg, callback) =>{
        callback();

        client_cancel = "";
        socket.emit(msg.contact + "rider", msg, function(response){
            client_cancel = "true";
        });

        setTimeout(() => {
            if (client_cancel != "true") {
                socket.emit(msg.contact + "rider", msg, function(response){});
            }
        }, 3000);
    });


    //emit the mode of payment
    socket.on("mode", (msg, callback) =>{ 
        callback();

        mode = "";
        socket.emit(msg.contact + "rider", msg, function(response){
            mode = "true";
        });

        setTimeout(() => {
            if (mode != "true") {
                socket.emit(msg.contact + "rider", msg, function(response){});
            }
        }, 3000);

    });

    
    /**Riders' connections*/
    //Rider comfirming ride
    
    socket.on("scheduled", (msg, callback) =>{
        callback();

        scheduled = "";
        socket.emit(msg.contact + "client", msg, function(response){
            scheduled = "true";
        });

        setTimeout(() => {
            if (scheduled != "true") {
                socket.emit(msg.contact + "client", msg, function(response){});
            }
        }, 3000);

    });


    //Rider comfirming ride
    socket.on("confirm", (msg, callback) =>{
        callback();

        confirm = "";
        socket.emit(msg.contact + "client", msg, function(response){
            confirm = "true";
        });

        setTimeout(() => {
            if (confirm != "true") {
                socket.emit(msg.contact + "client", msg, function(response){});
            }
        }, 3000);

    });

 
    //listening to rides starting
    socket.on("start", (msg, callback) =>{ 
        callback(); 

        start = "";
        socket.emit(msg.contact + "client", msg, function(response){
            start = "true";
        });

        setTimeout(() => {
            if (start != "true") {
                socket.emit(msg.contact + "client", msg, function(response){});
            }
        }, 3000);

    });


    //Rider finishing ride
    socket.on("finish", (msg, callback) =>{
        callback();

        finish = "";
        socket.emit(msg.contact + "client", msg, function(response){
            finish = "true";
        });

        setTimeout(() => {
            if (finish != "true") {
                socket.emit(msg.contact + "client", msg, function(response){});
            }
        }, 3000);

    });

    
    //Rider confirming payment
    socket.on("paid", (msg, callback) =>{
        callback();

        paid = "";
        socket.emit(msg.contact + "client", msg, function(response){
            paid = "true";
        });

        setTimeout(() => {
            if (paid != "true") {
                socket.emit(msg.contact + "client", msg, function(response){});
            }
        }, 3000);

    });


    //Rider reloads
    socket.on("reload", (msg, callback) =>{
        callback();

        reload = "";
        socket.emit(msg.contact + "rider", msg, function(response){
            reload = "true";
        });

        setTimeout(() => {
            if (reload != "true") {
                socket.emit(msg.contact + "rider", msg, function(response){});
            }
        }, 3000);

    });

    
    //Rider location
    socket.on("location", (msg, callback) =>{
        callback();

        location = "";
        socket.emit(msg.contact + "client", msg, function(response){
            location = "true";
        });

        setTimeout(() => {
            if (location != "true") {
                socket.emit(msg.contact + "client", msg, function(response){});
            }
        }, 3000);

    });

    
    //cancelling a ride by client
    socket.on("rider_cancel", (msg, callback) =>{
        callback();

        rider_cancel = "";
        socket.emit(msg.contact + "client", msg, function(response){
            rider_cancel = "true";
        });

        setTimeout(() => {
            if (rider_cancel != "true") {
                socket.emit(msg.contact + "client", msg, function(response){});
            }
        }, 3000);

    });

}); 

server.listen(process.env.PORT || 5000 /*() => console.log("server running on" + " " + port)*/);