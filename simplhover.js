(function($){

  $.fn.extend({
    Simplhover: function(options) {
      // Basic configuration
      var defaults = {
        elementsSelector: 'li, div, a',
        contentMarkup:    'p', // You are free to add your own markup, by default it will a be <p>, but you can add an <h> if you want
        background:       'rgba(0,0,0, .8)', // Choose dynamically a background color for hover - Using of rgba recommended
        timer:            '500', // Set the timer for the effect
        width:            'auto', // Set a max-width
        linkToName:       'Read More'
      };

      var options = $.extend(defaults, options);

      var simplhoverElements = $(this).children(options.elementsSelector);
      simplhoverElements.addClass('simplhover-element');

      return this.each(function() {
        simplhoverElements.each(function(){
          simplhoverElement     = $(this);

          var simplhoverImage   = simplhoverElement.children('img');
          var img_alt           = simplhoverImage.attr('alt');
          var href              = simplhoverImage.attr('data-url');
          var name              = simplhoverImage.attr('data-name');
          var desc              = simplhoverImage.attr('data-desc');

          var simplhoverContent = $('<' + options.contentMarkup + '></' + options.contentMarkup + '>');
          simplhoverContent.addClass('simplhover-element-content');
          simplhoverContent.text(img_alt);

          // Building the markup
          simplhoverElement.append(simplhoverContent);

          // Check if data-url is set to create a link around your alt attribute
          if (href) {
            simplhoverContent.wrapInner('<a href="' + href + '" />');
          }

          // Check if data-desc is set to add a description
          if (desc) {
            simplhoverElement.find('a').append(
              '<p>' +
                desc +
                '<br/>' +
                '<a href="' + href + '">' + options.linkToName + '</a>' +
              '</p>'
            );
          }

          simplhoverElement.css('max-width', options.width); // Define max-width for your container

          simplhoverContent.css('background-color', options.background); // Define the background color on simplhover

          simplhoverElement.on('mouseenter', function(){
            simplhoverContent.stop(false, true).fadeIn(options.timer);
            simplhoverImage.addClass('blur');
          });

          simplhoverElement.on('mouseleave', function(){
            simplhoverContent.stop(false, true).fadeOut(options.timer);
            simplhoverImage.removeClass('blur');
          });
        })
      });
    }
  });
})(jQuery);
