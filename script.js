const ulElem1 = document.querySelectorAll(".skills-list")[0];
const ulElem2 = document.querySelectorAll(".skills-list")[1];
const ulElem3 = document.querySelectorAll(".skills-list")[2];
const skills1 = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "RESTful APIs",
    "React",
    "CI/CD",
];
const skills2 = ["C", "C++", "PHP", "SQL", "GraphQl", "HTML", "CSS"];
const skills3 = [
    "Linux",
    "MongoDb",
    "Git",
    "Blender3D",
    "Unity",
    "Unreal Engine",
    "Adobe products",
    "Juggling",
];
function addNewSkill(skill, ulElem) {
    const liElem = document.createElement("li");
    liElem.className = "skill";
    liElem.textContent = skill;
    ulElem.appendChild(liElem);
}
skills1.forEach(function (s) {
    addNewSkill(s, ulElem1);
});
skills2.forEach(function (s) {
    addNewSkill(s, ulElem2);
});
skills3.forEach(function (s) {
    addNewSkill(s, ulElem3);
});
