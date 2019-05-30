/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10125, function(sym, e) {
         sym.stop();
         //sym.$("btnHistory").click(function() {
         //sym.$('historySource').fadeToggle();
         //sym.$('historyOn').toggle();
         //sym.$('radioBoxOn').toggle();
         //});
         //sym.$("radioBox").click(function() {
         //sym.$('historySource').fadeToggle();
         //sym.$('historyOn').toggle();
         //sym.$('radioBoxOn').toggle();
         //});
         //sym.$("radioBox2").click(function() {
         //sym.stop("age");
         //sym.$('radioBoxOn2').toggle();
         //sym.$('historyAge').fadeToggle();
         //})
         
         //sym.$("btnCandidates").click(function() {
         //sym.$('outAge').fadeToggle();
         //sym.$('radioBoxOn').toggle();
         //sym.$('outOn').toggle();
         //});

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
         var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
         var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         var parentWidth = stage.parent().width(); // Get the parent of the stage width
         var parentHeight = $(window).height(); // Get the browser window height
         var stageWidth = stage.width(); // Get the stage width
         var stageHeight = stage.height(); // Get the stage height
         var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
         var desiredHeight = Math.round(parentHeight * 1); // Set the new height of the stage as it scales
         var rescaleWidth = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         var rescaleHeight = (desiredHeight / stageHeight); // Set a variable to calculate the new height of the stage as it scales
         var rescale = rescaleWidth;
         
         if (stageHeight * rescale > desiredHeight) // Do not scale larger than the height of the browser window
         rescale = rescaleHeight;
         
         // Rescale the stage!
         
         stage.css('transform', 'scale(' + rescale + ')');
         stage.css( '-o-transform', 'scale(' + rescale + ')');
         stage.css('-ms-transform', 'scale(' + rescale + ')');
         stage.css('-webkit-transform', 'scale(' + rescale + ')');
         stage.css('-moz-transform', 'scale(' + rescale + ')');
         stage.css('-o-transform', 'scale(' + rescale + ')');
         parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){
         scaleStage();
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
         scaleStage();
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'details'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("outOn").hide();
         sym.$("historyOn").hide();
         sym.$("historySource").hide();
         sym.$("outSource").hide();
         sym.$("age").hide();
         sym.$("history").hide();
         sym.$("outAge").hide();
         sym.$("radioBoxSourceOn").hide();
         sym.$("radioBoxAgeOn").hide();
         sym.$("whiteBG").hide();
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radioBoxAge}", "click", function(sym, e) {
         sym.play("age");
         // Show an Element.
         sym.$("radioBoxAgeOn").show();
         sym.$("age").show();
         sym.$("radioBoxSourceOn").hide();
         //sym.$("whiteBG").show();
         sym.$("btn_ver1On").hide();
         sym.$("btn_ver2On").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${radioBoxSource}", "click", function(sym, e) {
         sym.play("source");
         sym.$("radioBoxSourceOn").show();
         sym.$("source").show();
         sym.$("radioBoxAgeOn").hide();
         sym.$("whiteBG").show();
         sym.$("btn_ver1On").hide();
         sym.$("btn_ver2On").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnCandidates}", "click", function(sym, e) {
         sym.$("outOn").toggle();
         sym.$("outAge").toggle();
         sym.$("outSource").toggle();
         //if( sym.$("outSource").is(":visible") ) { 
          // sym.$("outSource").hide();
         //} 
         //else { 
          // sym.$("outSource").show();
         //}
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btnHistory}", "click", function(sym, e) {
         sym.$("historyOn").toggle();
         if( sym.$("history").is(":visible") ) { 
           sym.$("history").hide();
         } 
         else { 
           sym.$("history").show();
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_ver2}", "click", function(sym, e) {
         sym.play("age");
         //sym.$("radioBoxSourceOn").show();
         sym.$("radioBoxAgeOn").show();
         sym.$("age").show();
         sym.$("whiteBG").show();
         sym.$("btn_ver2On").toggle();
         sym.$("btn_ver1On").toggle();
         sym.$("history").show();
         sym.$("historyOn").toggle();
         sym.$("outSource").show();
         sym.$("outAge").show();
         sym.$("outOn").show();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_ver1}", "click", function(sym, e) {
         sym.play("start");
         sym.$("whiteBG").hide();// insert code for mouse click here

      });
      //Edge binding end

   })("details");
   //Edge symbol end:'details'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-7349787");