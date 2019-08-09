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

      Symbol.bindElementAction(compId, symbolName, "${_radioBoxAge}", "click", function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_radioBoxSource}", "click", function(sym, e) {
         sym.play("source");
         sym.$("radioBoxSourceOn").show();
         sym.$("source").show();
         sym.$("radioBoxAgeOn").hide();
         sym.$("whiteBG").show();
         sym.$("btn_ver1On").hide();
         sym.$("btn_ver2On").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnCandidates}", "click", function(sym, e) {
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

      Symbol.bindElementAction(compId, symbolName, "${_btnHistory}", "click", function(sym, e) {
         sym.$("historyOn").toggle();
         if( sym.$("history").is(":visible") ) { 
           sym.$("history").hide();
         } 
         else { 
           sym.$("history").show();
         }

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_ver2}", "click", function(sym, e) {
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

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_ver1}", "click", function(sym, e) {
         sym.play("start");
         sym.$("whiteBG").hide();// insert code for mouse click here

      });
      //Edge binding end

   })("details");
   //Edge symbol end:'details'

})(jQuery, AdobeEdge, "EDGE-7349787");