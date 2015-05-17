sum_of_squares = 0;
for (counter = 1; counter <= 100; counter++) {
    sum_of_squares += (counter * counter);
}
sum = 0;
for (counter = 1; counter <= 100; counter++) {
    sum += counter;
}
square_of_sum = sum * sum;
$('guess').value = square_of_sum - sum_of_squares;