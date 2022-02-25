function solution(a, b) {
    if (a.length == b.length && !(/[^a-zA-Z]/.test(a) || (/[^a-zA-Z]/.test(b)))) {
        a = a.split("").sort();
        b = b.split("").sort();
        return JSON.stringify(a) === JSON.stringify(b);
    } else {
        return false;
    }
}