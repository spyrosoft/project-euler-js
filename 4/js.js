largest_palindrome = 0;
for (x = 999; x > 99; x--) {
    for (y = 999; y > 99; y--) {
        current_number = x*y;
        if (current_number == current_number.toString().split('').reverse().join('')) {
            if (current_number > largest_palindrome) { largest_palindrome = current_number; }
        }
    }
}
$('guess').value = largest_palindrome;