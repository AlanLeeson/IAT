"use strict";

(function(){
	
	var words = [];
	var blockPairingDefinitions = [];
	var currentBlock = 1;
	var category = "";
	var leftCategory = "";
	var rightCategory = "";
	
	window.onload = function(){

		if(location.hash.slice(1) == ''){
			window.location.href = window.location.href + "#1";
		}else{
			console.log(location.hash.slice(1));
			$('[name='+location.hash.slice(1)+']').show();
		}
		setUpQuiz();
		
		$("#left_category_button").text(leftCategory);
		$("#right_category_button").text(rightCategory);
		$("#quiz_word").text(getWord());
		
		$(".select_button").bind('click',function(){
			$("#quiz_word").text(getWord());
		});
		makeNewScreen();
		
		$(function(){
				$(".next ").click(function(){
					var newUrl = window.location.href.split("#");
					var id = newUrl[1];
					var newId = parseInt(id) + 1;
					window.location.href = newUrl[0] + "#"+newId;
					$('[name='+id+']').hide();
					$('[name='+newId+']').show();
				});
			});
		
	}

	function showScreen(){
		var id = location.hash.slice(1);
		var newId = id + 1;
		$("#"+location.hash.slice(1)).hide();
		$("#"+newId).show();
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
	
	function makeNewScreen(){
		var nextButton = $(document.createElement('button')).addClass("next_button").addClass("next").text("NEXT");
		$("#container").append(nextButton);
	}
	
})();
