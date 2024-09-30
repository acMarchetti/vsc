document;
const html = document.documentElement;
const body = html.children[1];
console.log(body);
const ul = body.children[0];
console.log(ul.parentElement);
console.log(ul.children[1]);
console.log(ul.children[1].nextElementSibling);
console.log(ul.children[1].previousElementSibling);
