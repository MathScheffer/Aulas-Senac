

$('#log').on('mousedown',function(){
    $(this).css('box-shadow','3px 3px 0px -2px #cbc6b9, 3px 3px 0 0px #f2edb5');
    $(this).css('border','1px solid #f2edb5');
});
$('#log').on('mouseup',function(){
    $(this).css('box-shadow','5px 5px 0px -2px #cbc6b9, 5px 5px 0 0px #f2edb5');
});
$('#log').on('focus',function(){
    $(this).css('outline','1px solid #f2edb5');
});