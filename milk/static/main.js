
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
    cluster.innerText=Number(qty)-0.5;
    CalculatePrice();
    }
}
function CalculatePrice(){
    var qty=document.getElementById("qty").innerText;
    var choiceAll=document.getElementById("choice");
    var choice=choiceAll.options[choiceAll.selectedIndex].value;
    var price;
    switch(choice){
        case "Taaza": price=44;
        break;
        case "Buffalo": price=56;
        break;
        case "Cow": price=47;
        break;
        default:price=44;
    }
    document.getElementById("price").innerText=Number(qty)*Number(price);
}
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
            alert("Please Paytm/Google Pay on 9321612921");

            // document.getElementById("post-form").reset();
            // $(".posts").prepend('<div class="col-md-6">'+
            //     '<div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">' +
            //         '<div class="col p-4 d-flex flex-column position-static">' +
            //             '<h3 class="mb-0">' + json.qty + '</h3>' +
            //             '<p class="mb-auto">' + json.name + '</p>' +
            //         '</div>' +
            //     '</div>' +
            // '</div>' 
            // )
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
    });
});


// $(document).on('submit', '#post-form',function(e){
//     $.ajax({
//         type:'POST',
//         url:'retrieve',
//         data:{
//             choice:$('#choice').val(),
//             qty:$('#qty').html(),
//             price: $('#price').html(),
//             csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
//             action: 'post'
//         },
//         success:function(json){
//             alert("Please Paytm/Google Pay on 9321612921");
//         },
//         error : function(xhr,errmsg,err) {
//         console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
//     }
//     });
// });


$(document).ready(function () {
$("div.clickable-row").click(
    function () {
        id = $(this).attr("id");
        Pay(id);
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
            alert("Paid")
            location.reload();
        },
        error : function(xhr,errmsg,err) {
        console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
    });
}
