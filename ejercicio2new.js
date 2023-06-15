const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },
{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
 //Reemplazar comida no vegana por una fruta no duplicada
 let randomFruitIndex = Math.floor(Math.random() * fruits.length); 
 let randomFruit = fruits[randomFruitIndex];
 foodSchedule[i].name = randomFruit;
 //Remover la fruta del array para evitar duplicados
 fruits.splice(randomFruitIndex, 1);
     }
   }
   console.log(foodSchedule);