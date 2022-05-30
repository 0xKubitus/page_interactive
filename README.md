1ère page intéractive 100% JavaScript !



Fonctionnalité 1 :
lorsque l'utilisateur va cliquer sur le footer, afficher le mot "clique" en console.

Fonctionnalité 1-bis :
lorsque l'utilisateur va cliquer sur le footer, afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

Indice : Rien de très compliqué par rapport à la version précédente : déclare une variable qui va servir de compteur et incrémente-la quand l'évènement a lieu !



Fonctionnalité 2 :
Si on clique sur Hamburger Menu, l'élément HTML portant l'Id navbarHeader perd sa classe 'collapse'.

Fonctionnalité 2-bis :
Si on clique à nouveau dessus, la classe collapse est rajoutée à nouveau à l'élément portant l'Id navbarHeader.

Indice : Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")



Fonctionnalité 3 :
Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). 

Indice : Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).
Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).
Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !



Fonctionnalité 4 :
a) Si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert.

b) Si on re-clique dessus, il redevient comme avant !

Indice : Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).
Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début :
if (secondCard.style.color === 'green'){
secondCard.style.color = '' ;
}else …



Fonctionnalité 5 :
Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS.

Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

Indice : Cherche sur Google comment désactiver le tag <link> avec JavaScript.

