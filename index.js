"use strict";

(function(){
	
	var words = [];
	var blockPairingDefinitions = [];
	var currentBlock = 1;
	var category = "";
	var leftCategory = "";
	var rightCategory = "";
	
	window.onload = function(){

		setUpQuiz();
		
		$("#left_category_button").text(leftCategory);
		$("#right_category_button").text(rightCategory);
		$("#quiz_word").text(getWord());
		
		$(".select_button").bind('click',function(){
			$("#quiz_word").text(getWord());
		});
		
	}
	
	function setUpQuiz(){
		addWord("Alan");
		addWord("Maria");
		addWord("Bob");
		leftCategory = "Muslim";
		rightCategory = "Non-Muslim";
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
