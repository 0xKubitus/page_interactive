<h1>1ère page intéractive 100% JavaScript !</h1>
<br>


<h3>Fonctionnalité 1 :</h3>
lorsque l'utilisateur va cliquer sur le footer, afficher le mot "clique" en console.

Fonctionnalité 1-bis :
lorsque l'utilisateur va cliquer sur le footer, afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

Indice : Rien de très compliqué par rapport à la version précédente : déclare une variable qui va servir de compteur et incrémente-la quand l'évènement a lieu !



<h3>Fonctionnalité 2 :</h3>
Si on clique sur Hamburger Menu, l'élément HTML portant l'Id navbarHeader perd sa classe 'collapse'.

<h3>Fonctionnalité 2-bis :</h3>
Si on clique à nouveau dessus, la classe collapse est rajoutée à nouveau à l'élément portant l'Id navbarHeader.



<h3>Fonctionnalité 3 :</h3>
Si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). 



<h3>Fonctionnalité 4 :</h3>
a) Si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert.

b) Si on re-clique dessus, il redevient comme avant !



<h3>Fonctionnalité 5 :</h3>
Si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît..

Si possible, rends cette fonctionnalité réversible.



<h3>Fonctionnalité 6 :</h3>
si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. 
Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. 

Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !



<h3>Fonctionnalité 7 :</h3>
si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !


<h3>Fonctionnalité 8 :</h3>
si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.

À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈


<h3>Fonctionnalité 9 :</h3>
La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.

