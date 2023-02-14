# Cat Notes
App para tablet de notas con react. El registro se realiza con Google y Github, enlazándolo con el servicio de firebase.

![login](https://user-images.githubusercontent.com/101679628/218888313-0fda563b-f8df-45d4-a7b8-e07794e319c3.png)

Donde se tiene un renderizado condicional, si el usuario no tiene ninguna nota creada se muestra una pantalla invitandolo a crear su primer nota. 

![First Note Show Michi](https://user-images.githubusercontent.com/101679628/218888585-d4cbb0b3-b454-4c83-b544-f09d5cb6c4c0.png)

En caso de ya existir notas te muestra inmediatamente la zona de creacion y consulta de notas.Donde se hace un filtrado desde el endpoint para mostrar al usuario solo sus notas y no pueda visualizar la de otros.

![allNotes](https://user-images.githubusercontent.com/101679628/218888791-58ad379e-9bd9-45a5-9862-8e578015788f.png)

Se reutilizan componentes como el de 'renderizado de error'

![error al acceder](https://user-images.githubusercontent.com/101679628/218887986-19f82665-776d-455b-9b71-1028737b8ac2.png)


![error al crear una nota vacía](https://user-images.githubusercontent.com/101679628/218887910-cf63e6fd-9586-48d3-937e-108e4f565d65.png)

 Se trabaja con headers y peticiones Get, Post, Put, y Delete, a través del uso de fetch. Para crear, editar, eliminar notas.
 
 A través del uso de hooks, se puede hacer un cambio de color en el fondo y/o tipografía de la nota (cursiva o normal). Dicha app tambien cuenta con una barra de búsqueda, en tiempo real.

Actualmente esta en WorkingProgress... la opcion de agregar imagenes a las notas usando el servicio de firebasestorage

 >_sthiramyoga@gmail.com_  
 >Adei Cabañas