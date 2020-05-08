
function AddQuantity(request){
    var cluster=document.getElementById("qty");
    var qty=cluster.innerText;
    if(qty<5){
    cluster.innerText=Number(qty)+0.5;
    CalculatePrice();
    }
}
function SubractQuantity(request){
    var cluster=document.getElementById("qty");
    var qty=cluster.innerText;
    if(qty>0.5){
    var choiceAll=document.getElementById("choice");
    var choice=choiceAll.options[choiceAll.selectedIndex].value;
    if(choice=="Dahi" || choice=="Buttermilk")
    {
        cluster.innerText=Number(qty)-1;
    }else{
        cluster.innerText=Number(qty)-0.5;
    }
    CalculatePrice();
}
}
function CalculatePrice(){

    var choiceAll=document.getElementById("choice");
    var choice=choiceAll.options[choiceAll.selectedIndex].value;
    var price;
    var flag=false;
    switch(choice){
        case "Taaza": price=45;
        break;
        case "Buffalo": price=58;
        break;
        case "Cow": price=48;
        break;
        case "Gold": price=56;
        break;
        case "Dahi": price=27;flag=true;
        break;
        case "Buttermilk": price=12;flag=true;
        break;
        default:price=45;
    }
    var qty=document.getElementById("qty").innerText;
    if(flag){  document.getElementById("qty").innerText=Math.ceil(qty); qty=Math.ceil(qty)}
    document.getElementById("price").innerText=Math.ceil(Number(qty)*Number(price));
}

$(document).on('submit', '#short-form',function(e){
    $.ajax({
        type:'POST',
        url:'post',
        data:{
            choice:$('#choice').val(),
            qty:$('#qty').html(),
            price: $('#price').html(),
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        success:function(json){
            alert("Please Paytm/Google Pay/Phonepe on 9321612921");
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
    });
});

$(document).on('submit', '#post-form',function(e){
    $.ajax({
        type:'POST',
        url:'retrieve',
        data:{
            name:$('#name').val(),
            flat:$('#flat').val(),
            mobile:$('#mobile').val(),
            choice:$('#choice').val(),
            qty:$('#qty').html(),
            price: $('#price').html(),
            society: "Sapphire",
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        success:function(json){
            alert("Please Paytm/Google Pay/Phonepe on 9321612921");
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
    });
});

$(document).ready(function () {
$(".clickable-row").click(
    function () {
        id = $(this).attr("id");
        Pay(id);
    });
$(".clickable-show").click(
    function () {
        id = $(this).attr("id");
        OrderPay(id);
    });
});

function Pay(id){
    masterId = document.getElementById(id);
    IdClass = masterId.getElementsByClassName('id');    
    Id = $(IdClass[0]).text();
    $.ajax({
        type:'POST',
        url:'pay',
        data:{
            id:Id,
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        success:function(json){
            alert('paid')
            location.reload();
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
    });
}
function OrderPay(id){
    masterId = document.getElementById(id);
    IdClass = masterId.getElementsByClassName('id');    
    Id = $(IdClass[0]).text();
    $.ajax({
        type:'POST',
        url:'orderpay',
        data:{
            id:Id,
            csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
            action: 'post'
        },
        success:function(json){
            alert('paid')
            location.reload();
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
    });
}
