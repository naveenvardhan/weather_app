//console.log("File loaded");
var header = $("#heading");
console.log(header.text());
header.css('color', 'red');
header.css('background', 'black');
var list1 = $(".list");
console.log(list1.text());
list1.css('background', 'cyan');

var button = $("#btn");
button.on('click', function(){
  console.log("Clicked");  
})

var inputxt = $("#inp");
var output =  $("#output");
console.log(output);
inputxt.on('keyup', function(){
    var value = $(this).val();
//    console.log(value);
    output.html(value);
})
