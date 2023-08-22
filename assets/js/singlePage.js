// size selector 
$(document).on("click"," .size-selector",function(e) {
    let node = $(e.target);
    $(" .size-selector").removeClass("size-selector-selected");
    node.addClass("size-selector-selected");
    alert('hi');
});

$(document).on("click",".size-selector",function(e) {
    let node = $(e.target);
    $(".size-selector").removeClass("size-selector-selected");
    node.addClass("size-selector-selected");

    productid = node.data("productid");
    size = node.data("size");
    $(".btnAddToCart").data("size", size);
});