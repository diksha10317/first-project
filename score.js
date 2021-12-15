
const p1={
    button:document.querySelector('#p1Button'),
    text:document.querySelector('#p1Display'),
    score:0
}
const p2={
    button:document.querySelector('#p2Button'),
    text:document.querySelector('#p2Display'),
    score:0
}
const reset=document.querySelector('#reset');
const rounds=document.querySelector('#playto');
let win=3;
let gameOver=false;
rounds.addEventListener('change',function(){
    win=parseInt(this.value);
}

)
function update(player,opponent){
    if(!gameOver)
    {
        player.score+=1;
        if(player.score==win)
        {
            gameOver=true;
            player.text.classList.add('has-text-success');
            opponent.text.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
      player.text.textContent=player.score;
    }
}
p1.button.addEventListener('click',function()
{   update(p1,p2);
    
    
})
p2.button.addEventListener('click',function()
{ update(p2,p1);
})
reset.addEventListener('click',resetFun)
function resetFun(){
    gameOver=false;
    for(p of [p1,p2])
    {
        p.score=0;
        p.text.textContent=0;
        p.text.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;

    }
 
}