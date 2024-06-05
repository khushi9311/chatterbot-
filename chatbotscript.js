
const chatbot= document.getElementById("chatbot");
bot=document.getElementById("chat-bot");
const closes=document.getElementById("close");

chatbot.addEventListener("click",()=>chat());
closes.addEventListener("click",()=>closebutton());

function chat(){ 
         bot.style.right="3%";
         bot.style.transition="1s";
         bot.style.zIndex="999";

}
function closebutton(){
    bot.style.right="-100%";
}

