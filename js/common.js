$(document).ready(function() {
    
    resizeContainers();
    
    $('.textarea_autosize').each(function(){
        autosize(this);
    }).on('autosize:resized', function(){
        resizeContainers();
    });
    
    $('body').on('click', '#debug_SCROLL_CHAT', function(e) {
        $('.chatbox_chat_messages').animate({scrollTop:$('.chatbox_chat_messages').height()}, 'slow');
        e.preventDefault();
    });
    
    $(".niceScroll").niceScroll();
});

$(window).on('resize', function(){
      resizeContainers();
});

function resizeContainers() {
    var sizes = {
        header: $('.header_container').outerHeight(true),
        header_navigation: $('.header_navigation_container').outerHeight(true),
        footer:  $('.footer_container').outerHeight(true),
        chatbox_toppane: $('.chatbox_top_panel').outerHeight(true),
        chatbox_form_message: $('.chatbox_form').outerHeight(true),
        content_margin: $('.content_table').innerHeight() - $('.content_table').height()
    };
    
    
    var content_block_height = sizes.header + sizes.header_navigation + sizes.footer + sizes.content_margin;
    
    var chat_messages_height = content_block_height + sizes.chatbox_toppane + sizes.chatbox_form_message;
   
    $('.chatbox_chat_messages').height($(window).height() - chat_messages_height);
    $('.contacts_block, .group_content_container').height($(window).height() - content_block_height);
    
    // Navigation msg_round positions
    
    $.each($('#navigation li'), function(i, val) {
        var block = $('<span/>').text($(val).find('a').text()).css('font',$(val).find('a').css('font'));
        $(document.body).append(block);
        var msg_position = ($(val).width() + block.width()) / 2;
        msg_position -= 6;
        $(val).find('.msg_round').css('left',msg_position);
        block.remove();
    });
}

