const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },
{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];
const usedFruits = [];
for (const i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        letfruitIndex = Math.floor(Math.random()*fruits.length);
        while
        (usedFruits.includes(fruits[fruitIndex])){
            fruitIndex = Math.floor(Math.random() * fruits.length);
        }
        foodSchedule[i].name = fruits[fruitIndex];
        usedFruits.push(fruits[fruitIndex]);
        console.log(foodSchedule);
        }
   }