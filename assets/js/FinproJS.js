(function ($) {
	
	"use strict";

  // Acc
    $(document).on("click", ".Rectangle .menu div", function() {
      var numberIndex = $(this).index();

      if (!$(this).is("active")) {
          $(".Rectangle .menu div").removeClass("active");
          $(".Rectangle ul li").removeClass("active");

          $(this).addClass("active");
          $(".Rectangle ul").find("li:eq(" + numberIndex + ")").addClass("active");

          var listItemWidth = $(".Rectangle ul")
            .find("li:eq(" + numberIndex + ")")
            .innerHeight();
          $(".Rectangle ul").heighy(listItemWidth + "px");
        }
    });
})(window.jQuery);