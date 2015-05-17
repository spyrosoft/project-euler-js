prime_counter = 1;
primes = [];
for (number = 2; number < 10000000; number++) {
    number_is_prime = true;
    for (prime_index = 0; prime_index < primes.length; prime_index++) {
        if (number % primes[prime_index] == 0) {
            number_is_prime = false;
            break;
        }
    }
    if (number_is_prime) {
        prime_counter++;
        primes.push(number);
    }
    if (prime_counter == 10001) {
        $('guess').value = number;
        break;
    }
}
prime_counter;