const dictionar = [];
let indexWord = 0;

// INSERT
document.getElementById("insertWord_input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addWord();
  }
});

function addWord() {
	dictionar[indexWord] = document.getElementById("insertWord_input").value;
	document.getElementById("status").innerHTML = "Cuvantul '" + dictionar[indexWord] + "' a fost inserat.";
	++indexWord;
}

// SEARCH
document.getElementById("searchWord_input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchWord();
  }
});

function searchWord() {
	const word = document.getElementById("searchWord_input").value;
	if (dictionar.includes(word)) {
		document.getElementById("status").innerHTML = "Cuvantul '" + word + "' a fost gasit in lista.";
	} else {
		document.getElementById("status").innerHTML = "Cuvantul '" + word + "' nu exista in lista.";
	}
}
