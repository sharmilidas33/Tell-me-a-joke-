let jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why do C# and Java developers keep breaking their keyboards? Because they use a strongly typed language.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why was the JavaScript developer sad? Because they didn't get a callback.",
    "Why do programmers prefer iOS development over Android development? Because on iOS, there are no Java exceptions.",
    "Why did the programmer go broke? Because they lost their domain.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why did the programmer quit their job? Because they didn't get arrays.",
    "Why was the programming language cold? It left its windows open.",
    "Why do programmers prefer dark chocolate? Because it's bitter like their code.",
    "Why was the developer unhappy with their job? They didn't get arrays.",
    "Why was the programmer cold? They left their Windows open.",
    "Why do programmers prefer dogs? Because they have a fetch method.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer get stuck in the shower? They followed the instructions on the shampoo bottle: Lather, Rinse, Repeat.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why did the programmer get kicked off the trampoline? They refused to follow the bounce instructions.",
    "Why did the programmer sit in the shade? Because they didn't want to catch any rays.",
    "Why don't programmers like to go outside? The sun causes too many reflections.",
    "Why do programmers prefer to work in groups? Because they have more byte.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the programmer go broke? Because they lost their domain.",
    "Why did the programmer get thrown out of college? They refused to take classes.",
    "Why did the programmer put their computer in the fridge? To keep it from overheating.",
    "Why did the programmer always bring a ladder to meetings? They wanted to reach the higher-level discussions.",
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Why did the programmer wear glasses to the party? They didn't want to C#.",
    "Why do programmers prefer iOS development over Android development? Because on iOS, there are no Java exceptions.",
    "Why did the programmer get kicked out of school? They refused to take classes.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer go broke? Because they lost their domain.",
    "Why do programmers prefer to work in groups? Because they have more byte.",
    "Why did the developer go broke? Because they lost their cache.",
    "Why did the programmer put their computer in the fridge? To keep it from overheating.",
    "Why did the programmer always bring a ladder to meetings? They wanted to reach the higher-level discussions.",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the programmer go broke? Because they lost their domain.",
    "Why did the programmer sit in the shade? Because they didn't want to catch any rays.",
]
function jokefunc(){
    let temp= Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").textContent= jokes[temp];
}
document.getElementById("jokebtn").addEventListener("click", function(){
    jokefunc();
});