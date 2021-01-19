const username = document.getElementById("username");
const saveScoreBtn= document.getElementById("saveScoreBtn");



username.addEventListener("keyup", ()=> {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});


 

saveHighScore = e => {
  e.preventDefault();  
};