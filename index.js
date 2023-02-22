var quantity = new Array(12).fill(0);

// for(var i=1;i<12;i++){
//     var buy=".buy"+i;
//     var plus=".plus"+i;

//     $(buy,plus).click(function(){
//         plus(i);
//     })
// }

// for(var i=1;i<12;i++){
//     var minus=".minus"+i;
//     $(minus).click(function(){
//         minus(i);
//     })
// }

// var buy = [];
// var plus = [];
// var minus = [];

// for (var i = 1; i < 12; i++) {
//     buy.push(".buy" + i);
//     plus.push(".plus" + i);
//     minus.push(".minus" + i);
// }

// $("buy, plus").each(click, function (i) {
//     i.plus(i);
// })

$(".buy1, .plus1").click(function () {
    plus(1);
});
$(".buy2, .plus2").click(function () {
    plus(2);
});
$(".buy3, .plus3").click(function () {
    plus(3);
});
$(".buy4, .plus4").click(function () {
    plus(4);
});
$(".buy5, .plus5").click(function () {
    plus(5);
});
$(".buy6, .plus6").click(function () {
    plus(6);
});
$(".buy7, .plus7").click(function () {
    plus(7);
});
$(".buy8, .plus8").click(function () {
    plus(8);
});
$(".buy9, .plus9").click(function () {
    plus(9);
});
$(".buy10, .plus10").click(function () {
    plus(10);
});
$(".buy11, .plus11").click(function () {
    plus(11);
});

$(".minus1").click(function () {
    minus(1);
});
$(".minus2").click(function () {
    minus(2);
});
$(".minus3").click(function () {
    minus(3);
});
$(".minus4").click(function () {
    minus(4);
});
$(".minus5").click(function () {
    minus(5);
});
$(".minus6").click(function () {
    minus(6);
});
$(".minus7").click(function () {
    minus(7);
});
$(".minus8").click(function () {
    minus(8);
});
$(".minus9").click(function () {
    minus(9);
});
$(".minus10").click(function () {
    minus(10);
});
$(".minus11").click(function () {
    minus(11);
});

function cart_value() {
    var sum = 0;
    for (var i = 0; i < 11; i++) {
        sum += quantity[i];
    }
    return sum;
}

function plus(item_no) {
    quantity[item_no]++;
    $(".item-no" + item_no).html(quantity[item_no]);
    $(".cart p").html(cart_value());
    $(".item" + item_no).css("display", "unset");
    $(".buy" + item_no).css("display", "none");
    $(".cart p").css("display", "inline-block");
    $(".cart i").css("border-right", "3px solid #3C6255");
    $(".cart i").css("padding", ("5px 10px"));
}

function minus(item_no) {
    quantity[item_no]--;
    $(".item-no" + item_no).html(quantity[item_no]);
    $(".cart p").html(cart_value());
    $(".item" + item_no).css("display", "unset");
    $(".buy" + item_no).css("display", "none");
    if (quantity[item_no] == 0) {
        $(".item" + item_no).css("display", "none");
        $(".buy"+item_no).css("display", "unset");
        $(".cart p").css("display", "none");
        $(".cart i").css("padding", "10px")
        $(".cart i").css("border-right", "none");
    }
}