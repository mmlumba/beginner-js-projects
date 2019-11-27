const facts = [
    "Contrairement aux humains, les chats ne peuvent pas détecter la douceur, ce qui explique probablement pourquoi ils ne sont pas du tout attirés par ce goût.",
    "Les chats tigrés roux peuvent avoir des taches de rousseur autour de la bouche et sur les paupières !",
    "Un chat a parfois le pouvoir de se guérir en ronronnant. Le ronronnement d'un chat domestique a une fréquence comprise entre 25 et 150 Hertz, qui est la fréquence à laquelle les muscles et les os se développent et se réparent le mieux.",
    "Les chats n'utilisent leurs miaulements que pour parler aux humains, pas entre eux. Le seul moment où ils miaulent pour communiquer avec d'autres félins, c'est quand ils sont des chatons pour faire signe à leur mère.",
    "Des études indiquent que les chats sont en fait intolérants au lactose et devraient l'éviter complètement.",
    "Le plus long chat vivant jamais vu selon le Livre Guinness appartient au regretté Crème Puff d'Austin, Texas, qui a vécu jusqu'à l'âge mûr de 38 ans et 3 jours !",
    "La Cat Fanciers Association (CFA) reconnaît 44 races de chats.",
    "Sir Isaac Newton est crédité d'avoir créé le concept de la porte pour animaux de compagnie que de nombreux chats utilisent aujourd'hui pour voyager en plein air."
];

function showFact() {
    const fact = pickRandomFact();
    const elementCatFact = document.getElementById("cat-fact");
    elementCatFact.innerHTML = fact
}

function pickRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
}


const elementShowFact = document.getElementById("show-fact");
elementShowFact.onclick = showFact;
