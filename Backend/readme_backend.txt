La structure adaptée en programmation du backend avec SpringBoot dans ce projet est composée
de 4 parties ( enveloppée dans chaque package du projet ) :

la premiére partie : on trouve la partie client ou La classe d'entité où la déclaration
des attributs et les fonctions nécessaire

la deuxiéme partie : " the Controller " ou " the requests handler " la classe qui gére
la réception des requétes et la définition des API cette classe communique avec la troisiéme
partie " The Service class ".

la troisiéme partie : " The Service Class " ici on trouve l'implémentation des fonctions
appelées dans le "Controller" cette classe communique avec le "Repository" pour avoir accés
au data.

la quatriéme partie : "The Repository " cette classe a un accées directe à la base de données
ici on a utilisé "Spring Data" qui nous a facilité la manipulation des données.
 

