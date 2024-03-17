function checkPalindrome() {
    let n = parseInt(document.getElementById('input').value);
    let p = isPalindrome(n);

    if (p) {
        document.getElementById('result').value = 'Palindrome: Yes';
    } else {
        document.getElementById('result').value = 'Palindrome: No';
    }
}

function isPalindrome(n) {
    let reverse = 0;
    let x = n;

    while (n > 0) {
        let d = n % 10;
        reverse = reverse * 10 + d;
        n = Math.floor(n / 10);
    }

    return reverse === x;
}
