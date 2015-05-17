limit = 1000;
total = 0;
for (counter = 1; true; counter++) {
    if (counter * 3 < limit) {
        if ( (counter * 3) % 5 != 0) {
            total += counter * 3;
        }
    } else {
        break;
    }
}
for (counter = 1; true; counter++) {
    if (counter * 5 < limit) {
        total += counter * 5;
    } else {
        break;
    }
}
total;