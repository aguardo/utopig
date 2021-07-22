## Utopig Games

Hola! Me presento, mi nombre es PIGGY y soy la CEO de Utopig Studio, ¿cómo estás? ¡Es un placer conocerte! Si has llegado hasta aquí quiere decir que a mi gran amigo y presi Willi le has caído genial y le gustaría incorporarte a nuestro equipo. ¡Es todo un logro!

Te voy a confesar una cosa: yo de todo esto de programación no tengo ni pajolera idea, yo a lo que me dedico es a hacer feliz a mi equipo. Es por eso que te voy a proponer un reto a ver si me puedes ayudar.

A la mayoría del equipo le gustan los videojuegos (yo no se que le ven a eso de sentarse en una silla y darle a botones pero bueno...) y me gustaría que podamos compartir los juegos que tiene cada uno de ellos. Pedí ayuda a Maria, Antonio, Llorenç y Willi para desarrollar esta herramienta, en su momento me la dieron pero se quedaron a medias :( y ahora siempre me dicen lo mismo, que tienen mucho trabajo y no están para tonterias :( Tú seguro que me puedes ayudar, ¿a que sí? :D

## Objetivos

Los objetivos a los cuales me gustaría llegar son los siguientes:

- Listar los videjuegos de la tabla 'games' en la página principal con su imagen, título y los primeros 100 caracteres de la descripción.
- Cada videojuego tiene un botón de view y otro de delete, me gustaría que apretando al botón view, te dirigiese a una nueva página y mostrase los datos completos de ese juego (el blade ya está creado en game-detail.blade.php). Por otro lado, haciendo click en el botón delete, me gustaría que apareciera una confirmación de si estás seguro de borrar el juego y en caso afirmativo borrarlo de la base de datos y refrescar la lista.
- En la página de detalles del videojuego verás que hay información que aún no existe en la base de datos. Añade los campos con una migración nueva que rellene los campos de juegos existentes con datos aleatorios.
- En la página de detalle, al hacer click en el botón back, debemos dirigirmos a la página principal.

## Normas del reto

- No dediques más de 2 horas para superar este reto.
- Clona el repo, trabaja en tu local, súbelo a tu github o gitlab personal y haznos llegar la url.

## Opcional

- El listado lo puedes hacer con un componente JS (Vue, React...) y que al eliminar se actualice el listado de juegos sin tener que refrescar la página, pero hazlo solo si tienes tiempo y te apetece.

## Requisitos

- PHP 7.2 o superior

## Instrucciones de instalación

Es un Laravel 6 normal y corriente, pero por si acaso:

- Clona el repo en tu pc.
- Crea una base de datos para el proyecto.
- Crea el archivo .env en la raíz del proyecto y rellena los datos de tu base de datos para poder ejecutar las migraciones.
- Ejecuta los siguientes comandos en la raíz del proyecto:
    - php artisan key:generate
    - composer install
    - php artisan migrate --seed
    - npm install
    - npm run dev
    - php artisan serve (o usa tu servidor web preferido)
