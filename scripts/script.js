
const devLinks = [
  "https://github.com/CDman814",
  "https://github.com/StudentZilla",
  "https://github.com/jacobsanders7",
];

const devNames = [
  "Curtis",
  "Adam",
  "Jacob",
];

let eLen = devLinks.length;
let devText = "<ul>";
for (let j = 0; j < eLen; j++) {
  devText += "<li>" + "<a href = " + devLinks[j] + ">" + devNames[j] + "<a/>" + "</li>";
}
devText += "</ul>";

document.getElementById("devLinks").innerHTML = devText;
