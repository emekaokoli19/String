
var sentence = "maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar"

//function reverses letter cases of sentences
case_reverse = () => {

    var indices = []
    sentence = sentence.split("")
    for(i=0; i<sentence.length; i++){
        if(sentence[i] == sentence[i].toUpperCase()){
            indices.push(i)
            sentence[i] = sentence[i].toLowerCase()
        }
    }
    
    for(i=0; i<sentence.length; i++){
        if(indices.includes(i) == false){
            sentence[i] = sentence[i].toUpperCase()
        }
    }
    sentence = sentence.join("")
    sentence = sentence.split(" ")
    console.log(sentence)
}


//function detects words ending with 'ing'
end_ing = () => {

    ing_words = []
    sentence = sentence.split(" ")
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
    sentence = sentence.toLowerCase()
    sentence = sentence.split(" ")
    palindrome_word = ""
    palindrome = []
    for(i=0; i<sentence.length; i++){
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

console.log(result)
