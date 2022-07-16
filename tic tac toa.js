let condition=[];
let player =document.querySelector('.player');
function winner()
{
    for(let i=1;i<10;i++)
    {
        condition[i]=document.getElementById('item'+i).innerHTML;
    }
    if(condition[1]==condition[2] && condition[2]==condition[3] && condition[1]!='' && condition[2]!='')
    {
        player.innerHTML=`The winner is : ${condition[1]}`;
        document.getElementById('item1').style.color='#8fd865'
        document.getElementById('item2').style.color='#8fd865'
        document.getElementById('item3').style.color='#8fd865'
    }
    else if(condition[4]==condition[5] && condition[5]==condition[6]&& condition[4]!='' && condition[5]!='')
    {
        player.innerHTML=`The winner is : ${condition[4]}`;
        document.getElementById('item4').style.color='#8fd865'
        document.getElementById('item5').style.color='#8fd865'
        document.getElementById('item6').style.color='#8fd865'
    }
    else if(condition[7]==condition[8] && condition[8]==condition[9]&& condition[7]!='' && condition[7]!='')
    {
        player.innerHTML=`The winner is : ${condition[7]}`;
        document.getElementById('item7').style.color='#8fd865'
        document.getElementById('item8').style.color='#8fd865'
        document.getElementById('item9').style.color='#8fd865'
    }
    else if(condition[1]==condition[4] && condition[4]==condition[7]&& condition[1]!='' && condition[4]!='')
    {
        player.innerHTML=`The winner is : ${condition[1]}`;
        document.getElementById('item1').style.color='#8fd865'
        document.getElementById('item4').style.color='#8fd865'
        document.getElementById('item7').style.color='#8fd865'
    }
    else if(condition[2]==condition[5] && condition[5]==condition[8]&& condition[2]!='' && condition[5]!='')
    {
        player.innerHTML=`The winner is : ${condition[2]}`;
        document.getElementById('item5').style.color='#8fd865'
        document.getElementById('item2').style.color='#8fd865'
        document.getElementById('item8').style.color='#8fd865'
    }
    else if(condition[3]==condition[6] && condition[6]==condition[9]&& condition[3]!='' && condition[6]!='')
    {
        player.innerHTML=`The winner is : ${condition[3]}`;
        document.getElementById('item3').style.color='#8fd865'
        document.getElementById('item6').style.color='#8fd865'
        document.getElementById('item9').style.color='#8fd865'
    }
    else if(condition[1]==condition[5] && condition[5]==condition[9]&& condition[1]!='' && condition[5]!='')
    {
        player.innerHTML=`The winner is : ${condition[1]}`;
        document.getElementById('item1').style.color='#8fd865'
        document.getElementById('item5').style.color='#8fd865'
        document.getElementById('item9').style.color='#8fd865'
    }
    else if(condition[3]==condition[5] && condition[5]==condition[7]&& condition[3]!='' && condition[5]!='')
    {
        player.innerHTML=`The winner is : ${condition[3]}`;
        document.getElementById('item3').style.color='#8fd865'
        document.getElementById('item5').style.color='#8fd865'
        document.getElementById('item7').style.color='#8fd865'
    }
    else if(condition[1]!='' &&condition[2]!='' &&condition[3]!='' &&condition[4]!='' 
    &&condition[5]!='' &&condition[6]!='' &&condition[7]!='' &&condition[8]!='' &&condition[9]!='' )
    {
        player.innerHTML=`Tie`;
    }
}


let turn='X';
player.innerHTML=`Turn of : X`;
function jouer(id)
{
    let item=document.getElementById(id);
    if (turn==='X' && item.innerHTML=='')
    {
        item.innerHTML='X';
        player.innerHTML=`Turn of : O`;
        turn='O';
    }
    
    else if(turn==='O' && item.innerHTML=='')
    {
        item.innerHTML='O';
        player.innerHTML=`Turn of : X`;
        turn='X'
    }
    winner();
}
let content=[];
function reset()
{
    for(let i=1;i<10;i++)
    {
        condition[i]=document.getElementById('item'+i).innerHTML;
        condition[i].innerHTML='';
    }
}