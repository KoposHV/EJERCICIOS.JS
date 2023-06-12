const addamsFamily = [];

const characters = ["Miercoles" , "Fetido" , " Gomez" , " Cosa" , "Eso" , "Morticia" ];

for(let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const newName = character + " Addams";
    addamsFamily.push(newName);

}
console.log(addamsFamily);