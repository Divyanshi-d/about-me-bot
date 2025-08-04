const input=document.getElementById("user-input");
const button=document.getElementById("send-button");
button.addEventListener("click",sendmessage);
input.addEventListener("keydown", function(e){
    if(e.key==="Enter")sendmessage();})
        function sendmessage(){
    const message= input.value.trim();
    if (message===""){
        return;
    }
    const messagediv=document.createElement("Div");
     messagediv.textContent=message;
     messagediv.className="user-message";

     const chatbox= document.getElementById("chatbox");
     chatbox.appendChild(messagediv);

     input.value="";

 setTimeout(function(){
const botreplydiv=document.createElement("Div");
botreplydiv.className="bot-message";
const msg= message.toLowerCase();
if(msg.includes("skill")){
    botreplydiv.textContent="Divyanshi is skilled in full stack development and programming language Java";
}
else if(msg.includes("contact")||msg.includes("email")){
    botreplydiv.textContent="You can reach Divyanshi at divyanshi@example.com";
}
else if(msg.includes("education")){
    botreplydiv.textContent="Divyanshi has done her schooling from ICSE board and has completed her graduation in btech from computer science.";
}
else if(msg.includes("projects")){
    botreplydiv.textContent="Divyanshi has done many minor and major projects like AI image generator app, english dictionary App, AI careerPath recommender,Online tuition website, i (Ai-chatbot) was also developed by her !!";
}
else{
    botreplydiv.textContent=" I'm still learning, try asking about skills , education, or divyanshi's contact";
}

const chatbox=document.getElementById("chatbox");
chatbox.appendChild(botreplydiv);
chatbox.scrollTop=chatbox.scrollHeight;
},1000);
        }
document.addEventListener("DOMContentLoaded",function(){
    const welcomediv= document.createElement("Div");
    welcomediv.className="bot-message";
    welcomediv.textContent="👋 Hi! I'm Divyanshi’s portfolio assistant.\nAsk me about her projects, skills or how to contact her.";
    setTimeout(function(){
        const chatbox=document.getElementById("chatbox");
        chatbox.appendChild(welcomediv);
    },500);
})
