function check(string) {
    const arr = ['a', 'e', 'i', 'o', 'u', 'y'];
    let counter = 0;
    string.split('').forEach((lit) => {
        if (arr.indexOf(lit) !== -1) counter ++;
    });
    return counter;
}