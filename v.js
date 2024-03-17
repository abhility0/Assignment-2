function VowelsConsonants() {
    let str = document.getElementById('input').value.toLowerCase();
    let vowels = 0, consonants = 0;

    for (var i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u")
            vowels++;
        else
            consonants++;
    }
    
    let r = document.getElementById('result');
    r.value = `Vowels = ${vowels}   &   Consonants = ${consonants}`;
}
