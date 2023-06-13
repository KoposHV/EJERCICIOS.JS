const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
] 
const finalsmallmovie = []  
const finalmediummovie = []
const finallargemovie = []
for (let i = 0; i < movies.length; i++) {
    const list = movies[i];
 if (movies.durationInMinutes < 100) {
        finalsmallmovie.push(movies) };
        console.log(finalsmallmovie);
 }
 for (let i = 0; i < movies.length; i++) {
    const list = movies[i];
 if (movies.durationInMinutes > 100 && movies.durationInMinutes < 200) {
        finalmediummovie.push(movies) };
        console.log(finalmediummovie);
 } 
 for (let i = 0; i < movies.length; i++) {
    const list = movies[i];     

    if (movies.durationInMinutes > 200) {
        finallargemovie.push(movies)};
        console.log(finallargemovie);    
 }
    
    
