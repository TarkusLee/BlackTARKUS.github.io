  // Punch input
document.addEventListener('DOMContentLoaded', function() {

var instance = new Mark(document.querySelector(".container"));
instance.markRegExp(/(?<![\|\>\#])(\bc\.P\b|\bf\.P\b|\bj\.P\b|\bj\.[0-9]+P\b(?!})|\b[0-9]+P\b(?!}))/gim, {
    "element": "span",
    "className": "p-highlight",
    "acrossElements": true
});
instance.markRegExp(/(?<![\|\>\#])(\bc\.K\b|\bf\.K\b|\bj\.K\b|\bj\.[0-9]+K\b(?!})|\b[0-9]+K\b(?!}))/gim, {
    "element": "span",
    "className": "k-highlight",
    "acrossElements": true
});
instance.markRegExp(/(?<![\|\>\#])(\bc\.S\b|\bf\.S\b|\bj\.S\b|\bj\.[0-9]+S\b(?!})|\b[0-9]+S\b(?!}))/gim, {
    "element": "span",
    "className": "s-highlight",
    "acrossElements": true
});
instance.markRegExp(/(?<![\|\>\#])(\bc\.H\b|\bf\.H\b|\bj\.H\b|\bj\.[0-9]+H\b(?!})|\b[0-9]+H\b(?!}))/gim, {
    "element": "span",
    "className": "h-highlight",
    "acrossElements": true
});
instance.markRegExp(/(?<![\|\>\#])(\bc\.D\b|\bf\.D\b|\bj\.D\b|\bj\.[0-9]+D\b(?!})|\b[0-9]+D\b(?!}))/gim, {
    "element": "span",
    "className": "d-highlight",
    "acrossElements": true
});
}, false);