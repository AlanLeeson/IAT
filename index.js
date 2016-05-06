"use strict";

(function(){
	
	var words = [];
	var category = "";
	
	window.onload = function(){
		console.log("Started");
		addWord("Alan");
		addWord("Maria");
		addWord("Bob");
		
		$("#quiz_word").text(getWord());
		
		$(".select_button").bind('click',function(){
			$("#quiz_word").text(getWord());
		});
		
	}
	
	function addWord(word){
		words.push(word);
	}
	
	function getWord(){
		if(words.length > 0){
			return words.splice(Math.random()*words.length,1)[0]
		}else{
			return "Done.";
		}
	}
	
})();
