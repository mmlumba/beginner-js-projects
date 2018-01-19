var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

var CatFacts = {
  '1': "The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
  '2': "Cats share 95.6% of their DNA with tigers.",
  '3': "Cats are asleep for 70% of their lives.",
  '4': "Cat kidneys are super efficient, they can rehydrate by drinking seawater.",
  '5': "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet."
}

var factNumber;

function randomFact(){
  return CatFacts[factNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*5)+1;
  factPlaceholder.textContent = randomFact();
});
