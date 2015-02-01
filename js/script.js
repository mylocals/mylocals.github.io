// Add custom JS here
$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
//  placement: 'right',
  content: function(){return '<img src="'+$(this).data('img') + '" width=420 height=320 />';}
});

// Contain the popover within the body NOT the element it was called in.
$('[data-toggle="popover"]').popover({
    container: 'body'
});
