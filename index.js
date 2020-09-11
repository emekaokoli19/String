
var sent_ence = "maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar"
sentence = sent_ence.split(" ")
console.log(sentence)

//function reverses letter cases of sentences
case_reverse = () => {

    var indices = []
    sent_ence = sent_ence.split("")
    for(i=0; i<sent_ence.length; i++){
        if(sent_ence[i] == sent_ence[i].toUpperCase()){
            indices.push(i)
            sent_ence[i] = sent_ence[i].toLowerCase()
        }
    }
    
    for(i=0; i<sent_ence.length; i++){
        if(indices.includes(i) == false){
            sent_ence[i] = sent_ence[i].toUpperCase()
        }
    }
    sent_ence = sent_ence.join("")
    sent_ence = sent_ence.split(" ")
    console.log(sent_ence)
}


//function detects words ending with 'ing'
end_ing = () => {

    ing_words = []
    for(i=0; i<sentence.length; i++){
        sentence[i] = sentence[i].toLowerCase()
        if(sentence[i].charAt(sentence[i].length - 3) == "i" && 
        sentence[i].charAt(sentence[i].length - 2) == "n" && 
        sentence[i].charAt(sentence[i].length - 1) == "g"){
            ing_words.push(sentence[i])
        }
    }
    console.log(ing_words)
}


//function checks for palidromes in sentence
palindrome_checker = () => {

    palindrome_word = ""
    palindrome = []
    for(i=0; i<sentence.length; i++){
        sentence[i] = sentence[i].toLowerCase()
        if(sentence[i].length % 2 == 0){
            for(j=0; j<sentence[i].length; j++){
                if(sentence[i][j] == sentence[i].charAt(sentence[i].length - (j + 1))){
                    palindrome_word += sentence[i][j]
                }
                else{palindrome_word = ""}
            }
            if(sentence[i].length == palindrome_word.length){
                palindrome.push(palindrome_word)
                palindrome_word = ""
            }
        }
        else{
            mid = Math.floor(sentence[i].length / 2)
            for(j=0; j<mid; j++){
                if(sentence[i][j] == sentence[i].charAt(sentence[i].length - (j + 1))){
                    palindrome_word += sentence[i][j]
                    if(palindrome_word.length == mid){
                        palindrome.push(sentence[i])
                        palindrome_word = ""
                    }
                }
            }
        }
    }
    console.log(palindrome)
}

result = {
    uppercased:case_reverse(),
    ing:end_ing(),
    palindromeWords:palindrome_checker()
}

const answer = {}