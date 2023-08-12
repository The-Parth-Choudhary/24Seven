var quantity = new Array(12).fill(0);

// Handle plus button click
$(".buy, .plus").click(function () {
    var item_no = parseInt($(this).attr("class").match(/\d+/)[0]);
    plus(item_no);
});

// Handle minus button click
$(".minus").click(function () {
    var item_no = parseInt($(this).attr("class").match(/\d+/)[0]);
    minus(item_no);
});

function cart_value() {
    var sum = 0;
    for (var i = 0; i < 12; i++) {
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
    $(".cart i").css("padding", "5px 10px");
}

function minus(item_no) {
    quantity[item_no]--;
    $(".item-no" + item_no).html(quantity[item_no]);
    $(".cart p").html(cart_value());
    $(".item" + item_no).css("display", "unset");
    $(".buy" + item_no).css("display", "none");
    if (quantity[item_no] === 0) {
        $(".item" + item_no).css("display", "none");
        $(".buy" + item_no).css("display", "unset");
        $(".cart p").css("display", "none");
        $(".cart i").css("padding", "10px");
        $(".cart i").css("border-right", "none");
    }
}