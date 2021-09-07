

$("#test").on('click', function() {
  
    $.fancybox.open({
      src  : '#hidden-content',
      type : 'inline',
      opts : {
        afterShow : function( instance, current ) {
          console.info('done!');
        }
      }
    });
    
  });