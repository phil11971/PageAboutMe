var wrap = $('#wrapper'),
    modal = $('.cover, .modal, .content');

$(document).ready(function(){
   
    $('#me').on('click', function(){
        imageSource = $(this).attr('src');
        $('#memodal').attr('src', imageSource);
        modal.fadeIn();
    }); 
    
    modal.click(function() {
        wrap.on('click', function(event) {
          var select = $('.content');
          if ($(event.target).closest(select).length)
            return;
          modal.fadeOut();
          wrap.unbind('click');
        });
    });
    
});