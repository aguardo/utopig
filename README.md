## Utopig Games

Hola! Me presento, mi nombre es PIGGY y soy la CEO de Utopig Studio, ¿cómo estas? ¡Es un placer conocerte! Si has llegado hasta aquí quieres decir que a mi gran amigo y presi Willi le has caído genial y le gustaría incoporarte a nuestro equipo. ¡Es todo un logro!

Te voy a confesar una cosa: yo de todo esto de programación no tengo ni pajolera idea, yo a lo que me dedico es ha hacer feliz a los miembros de mi equipo. Es por eso que te voy a proponer un reto a ver si me puedes ayudar.

La mayoría del equipo le gustan los videjuegos (yo no se que le ven a eso de sentarse en una silla y darle a botones pero bueno...) y me gustaría que podamos compartir los juegos que tiene cada uno de ellos. Pedí ayuda a Maria, Antonio, Llorenç y Willi para desarrollar esta herramienta, en su momento me la dieron pero se quedaron a medias :( y ahora siempre me dicen lo mismo, que tienen  mucha faena y no están para tonterias :( Tú seguro que me puedes ayudar, ¿a que si? :D

## Objetivos

Los objetivos a los cuales me gustaría llegar son los siguientes:
 
- Listar los videjuegos en la página principal con su imagen, título y descripción.
- Cada videojuego tiene un botón de view y otro de delete, me gustaría que apretando al botón view, te dirigiese a una nueva página y mostrase los datos completos de ese juego (el blade ya está creado en game-detail.blade.php). Por otro lado, haciendo click en el botón delete, me gustaría que apareciera una confirmación de si estás seguro de borrar el juego y en caso afirmativo borrarlo de la base de datos y refrescar la lista.
- En la página de detalles del videjuego verás que hay información que aún no existe en la base de datos. Añade los campos con una migración nueva y mete la informacióin en el seed.
- En la página de detalle, al hacer click en el botón back, debemos dirigirmos a la página principal.

## Normas del reto

- El listado lo puedes hacer con un framework de estos modernos de JS (Angular, Vue o React), pero si quieres hacerlo solo con blade y usar javascript vanilla o jquery para el ajax del delete, también puedes.
- No me gustaría que dediques más de 2 horas para superar este reto. No me gusta hacer perder el tiempo a la gente, soy una cerdita buena.
- Haz un fork del repo y haznos un pull request con tu propuesta.

## Opcional

- El listado lo puedes hacer con un framework de JS (Vue, React) y que al eliminar se actualice el listado de juegos sin tener que refrescar la página, pero hazlo solo si tienes tiempo y te apetece.

## Requisitos

- PHP 7.2 o superior

## Instrucciones de instalación

- Clonarte nuestro repo en tu pc.
- Crearte una base de datos para el proyecto.
- Crearte el archivo .env en la raíz del proyecto y rellenar los datos de tu base de datos par poder ejecutar las migraciones.
- Ejecutar los siguientes comandos en la raíz del proyecto: 
    - composer install
    - php artisan migrate
    - php artisan db:seed
    - npm install
    - npm run watch (npm run dev)


