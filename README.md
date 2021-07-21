## Utopig Games

Hola! Me presento, mi nombre es PIGGY y soy la CEO de Utopig Studio, como estas? Es un placer conocerte! Si has llegado hasta aquí quieres decir que a mi gran amigo y presi Willi le has caido genial y le gustaría incoporarte a nuestro equipo! Es todo un logro!

Te voy a confesar una cosa, yo de todo esto de programación no tengo ni pajolera idea, yo lo que me dedico es ha hacer feliz a los miembros de mi equipo, es por eso que te voy a proponer un reto a ver si me puedes ayudar.

La mayoria del equipo le gustan los videjuegos (yo no se que le ven a eso de sentarse en una silla y darle a botones pero bueno...) y me gustaría que podamos compartir los juegos que tiene cada uno de ellos. Pedí ayuda a Maria, Antonio, Llorenç y Willi para desarrollar esta herramienta, en su momento me la dieron pero se quedaron a medias :( y ahora siempre me dicen lo mismo, que tienen  mucha faena y no estan para tonterias :( Tú seguro que me puedes ayudar a que si? :D

## Objetivos

Los objetivos a los cuales me gustaría llegar son los siguientes:
 
- Listar los videjuegos en la pagina principal con su imagen, título y descripción.
- Poder agregar videjuegos de forma random solo haciendo click en el botón 'Add a random game' y refrescar los datos por ajax sin refrescar la página.
- Cada videojuego tiene un botón de view y otro de delete, me gustaría que apretando al botón view, te dirigiese a una nueva pagina y mostrase los datos completos de ese videjuego (el blade ya esta creado). Por otro lado, haciendo click en el botón delete, me gustaría que apareciera una confirmación de si estas seguro de borrar el juego y en caso afirmativo borrarlo de la base de datos.
- En la pagina de detalles del videjuego verás que hay información que no existe en la base de datos, tendrás que añadirla para cada juego (puede ser inventada).
- En la página de detalle, al hacer click en el boton back, debemos dirigirmos a la página principal.

## Normas del reto

- Me encataría que el front se desarrollara con un framework de JS (Angular, Vue o React). Puedes usar los blades pero desde ellos tienes que llamar a los componentes de uno de estos frameworks.
- Seria ideal que tardaras X horas para poder superar este reto. Esque soy muy impaciente.
- Deberas clonarte el repo, trabajar en tu local y subirlo a tu github, gitlab... personal, indicandonos las instruciones para poder clonarlo en nuestro repo y disfrutar de tu obra maestra.

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


