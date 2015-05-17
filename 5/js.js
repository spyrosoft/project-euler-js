for (number = 40; true; number+=20) {
    number_divisible = true;
    for (counter = 20; counter > 1; counter--) {
        if (number % counter != 0) {
            number_divisible = false;
            break;
        }
    }
    if (number_divisible) {
        $('guess').value = number;
        break;
    }
}