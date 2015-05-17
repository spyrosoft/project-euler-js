final_answer = false;
for (a = 1; a < 1000; a++) {
    for (b = 1; b < 1000; b++) {
        c = Math.sqrt( (a*a) + (b*b) );
        if (c == parseInt(c)) {
            if ( ( a + b + c ) == 1000) {
                final_answer = a*b*c;
                break;
            }
        }
    }
    if (final_answer) {
        break;
    }
}
$('guess').value = final_answer;