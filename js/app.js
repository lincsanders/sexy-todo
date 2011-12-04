$(function(){
    var duration = 300;

    $('input').keyup(function(e){
        var $input = $(this);

        // only execute the script when hitting [return] and make sure the input isn't blank
        if(e.keyCode != 13 || $input.val() == '')
            return;
        
        var $list = $('#todo-list').css('visibility', 'visible');

        $input
            .after('<li class="moving-item">'+ $input.val() +'</li>')
            .val('');

        $list.animate({
           paddingTop: 41 
        }, duration)
        .find('li').animate({
            position: 'relative',
            top: 31
        }, duration);

        $('.moving-item').animate({
            top: 120
        }, duration, function(){
            $listItem = $(this);

            $(this).prependTo($list).removeClass('moving-item');
            $list.css('padding-top', 10);
        });
    });
});