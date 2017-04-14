//for basic
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}
//end for basic

//for cloze
function ClozeCard(fullText, cloze){
	x=fullText.search(cloze); //x will be -1 if cloze not in fullText

	if (x===(-1)) { //for error
		console.log("Error");
		this.fullText="Full Text Error";
		this.cloze="Cloze Error";
		this.partial="Partial Error";
	}
	else { //if no error
		this.fullText = fullText;
		this.cloze = cloze;
		partial=fullText.replace(cloze, "...")
		this.partial = partial
	}
}
//end for cloze


//example givin for assignment

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
//console.log(firstPresidentCloze.y);



// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops"); 

//end example givin in assignment

console.log(brokenCloze.cloze+brokenCloze.partial+brokenCloze.fullText);

//my cloze test
var testCloze = new ClozeCard("Chocalate comes from cocoa, which is a tree. This makes it a plant so chocalate is a salid", "plant");

console.log(testCloze.cloze);
console.log(testCloze.partial);
console.log(testCloze.fullText);
//I am craving salid