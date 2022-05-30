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



Fonctionnalité 3 :
Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). 



Fonctionnalité 4 :
a) Si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert.

b) Si on re-clique dessus, il redevient comme avant !



Fonctionnalité 5 :
Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît..

Si possible, rends cette fonctionnalité réversible.



Fonctionnalité 6 :
si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. 
Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 

Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

Indice 1 : Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.

Indice 2 : Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).

Indice 3 : Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards (a priori tu as extrait la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. /!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => clique ici pour accéder à une ressource qui parle de ça.



Fonctionnalité 7 :
si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

Indice : Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

Petite remarque : tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.


Fonctionnalité 8 :
si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.

À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈

Indice 1 : Premier piège : il y a un lien HTML sur le bouton et si tu cliques dessus, une page s'ouvre ! Il faut que tu bloques ce comportement par défaut (via l'objet event - cf le cours).

Indice 2 : Deuxième piège : tu as utilisé "insertBefore" pour la fonctionnalité précédente mais il n'y a pas de "insertAfter". Une solution est de considérer qu'un "insertAfter un élément A" serait, s'il existait, équivalent à faire un "insertBefore sur le nœud APRES l'élément A". Et tu peux pointer sur un noeud APRES un élément en faisant "lastCard.nextSibling".


Fonctionnalité 9 :
La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.
Indice 1 : L'event à utiliser est "keypress", appliqué au texte "JS & Events" (ou, mieux, à une div le contenant).

Indice 2 : Pour modifier le rendu visuel de toute la page, il faut que tu joues avec les classes de <body>.

Indice 3 : Pour mettre tout sur 4 colonnes, rajoute la classe col-4. Pour les placer au milieu ou à droite, rajoute la classe offset-md-4 ou offset-md-8.

Indice 4 : Pour éviter que les classes s'accumulent, et pour que chaque touche ait un comportement propre, retire toutes les classes du <body> à chaque fois qu'un "keypress" est détecté. Ensuite seulement tu rajoutes les classes nécessaires.

