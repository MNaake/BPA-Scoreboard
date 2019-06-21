

//Connect Options
var options = {
  timeout: 3,
  //Gets Called if the connection has sucessfully been established
  onSuccess: function () {
   client.subscribe('SetScoreboard', {qos: 2});
      alert("Connected");
  },
  //Gets Called if the connection could not be established
  onFailure: function (message) {
      alert("Connection failed: " + message.errorMessage);
  }
 };
 
 //Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
 var publish = function (payload, topic, qos) {
  //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
  var message = new Messaging.Message(payload);
  message.destinationName = topic;
  message.qos = qos;
  client.send(message);
 }



function fetch(){
  publish(js,'SetScoreboard',2);
  
}

function showdata(js){
document.getElementById("toplist").innerHTML = "";
var obj = JSON.parse(js);
var i;
for (i=0;i<obj.length;i++){
    var j = i + 1;
    var str =  
    "<li data-rank=\"" + j + "\">" +
             "<div class=\"thumb\">" + 
              
             "<img src=\"img/avatars/" + obj[i].avatar + ".png\" width=\"55\" height=\"55\">"+
                "<span class=\"name\">" + obj[i].score + "</span>" +
                "<span class=\"stat\"><b>";
                str += obj[i].name;
                str += "</b>Wins</span>" +
              "</div>"+
            "</li>";
   document.getElementById("toplist").innerHTML +=str;          
}


}

