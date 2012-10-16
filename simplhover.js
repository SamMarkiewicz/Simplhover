(function($){

    $.fn.extend({
        Simplhover: function(options) {

          // Define global variables
          var simplhover = $('#simplhover').children('li, div, a')

          // Add an class "element" on the children you choose for simplhover
          simplhover.addClass('element');
          var element = $('.element')

          // Basic configuration
          var defaults = {
            markUp: 'p', // You are free to add your own markup, by default it will a be <p>, but you can add an <h> if you want
            background: 'rgba(0,0,0, .8)', // Choose dynamically a background color for hover - Using of rgba recommended
            timer: '500', // Set the timer for the effect
            width: 'auto', // Set a max-width
            linkToName: 'Read More'
          };

          var options = $.extend(defaults, options);

          return this.each(function() {

            var o = options;

            // Create the markup dynamically for eache .element

            element.each(function(){

              var img_alt = $(this).find('img').attr('alt')
              var href = $(this).children('img').attr("data-url")
              var name = $(this).children('img').attr("data-name")
              var desc = $(this).children('img').attr("data-desc")

              // Building the markup
              $(this).append(
                '<div class="inner"><'
                + o.markUp +
                '>'
                + img_alt +
                '</'
                + o.markUp +
                '></div>'
              )

              // Check if data-url is set to create a link around your alt attribute
              if ($(this).children('img')
                         .attr("data-url")) {
                $(this).children('div')
                       .wrapInner('<a href="' + href + '" />');
              } else {

              }

              // Check if data-desc is set to add a description
              if ($(this).children('img')
                         .attr("data-desc")) {
                $(this).find('a')
                       .append('<p>' + desc + '<br/><a href="' + href + '">' + o.linkToName + '</a></p>');
              } else {

              }


              element.css('max-width', o.width); // Define max-width for your container

              element.find('div')
                    .stop(false, true)
                    .css('background-color', o.background); // Define the background color on simplhover

              element.on('mouseenter', function(){
                $(this).children('div')
                      .fadeIn(o.timer);
                $(this).children('img')
                      .stop(false, true)
                      .addClass('blur');
              });

              element.on('mouseleave', function(){
                $(this).children('div')
                      .fadeOut(o.timer);
                $(this).children('img')
                      .stop(false, true)
                      .removeClass('blur');
              });
            })
          });
        }
    });
})(jQuery);
