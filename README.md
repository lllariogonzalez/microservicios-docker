# Microservicios

**La arquitectura de microservicios** es un enfoque moderno para desarrollar y desplegar aplicaciones de software que se basa en la idea de construir aplicaciones como **un conjunto de servicios pequeños, autónomos y altamente escalables** que se ejecutan de forma independiente y se comunican entre sí a través de interfaces bien definidas.

> Cada microservicio se enfoca en una única funcionalidad o tarea específica y se puede desarrollar, desplegar y escalar de manera independiente, lo que permite una mayor flexibilidad y agilidad en el desarrollo de aplicaciones.

A diferencia de la **arquitectura monolítica**, donde todas las funcionalidades se encuentran integradas en una única aplicación, la arquitectura de microservicios promueve la división de la aplicación en pequeños servicios independientes que pueden ser desarrollados, desplegados y escalados de forma individual. **Cada microservicio se ejecuta en su propio entorno**, con su propia base de datos, configuración y recursos, lo que permite una mayor modularidad y autonomía.

Veamos una comparación visual del comportamiento de estas arquitecturas:

![Arquitectura monolítica vs microservicios](./images/Arquitectura%20monolitica%20vs%20microservicios.png)

Una de las principales características de la arquitectura de microservicios es la **comunicación a través de interfaces bien definidas**. Los microservicios se comunican entre sí a través de interfaces, como **API RESTful, mensajes asincrónicos o eventos**, lo que permite una mayor desacoplamiento entre los servicios y facilita la integración y evolución de la aplicación en el tiempo. 

Además, la arquitectura de microservicios fomenta el uso de tecnologías y herramientas que facilitan la automatización, el monitoreo y la gestión de los servicios, como contenedores, orquestadores, herramientas de descubrimiento de servicios, entre otros.

## Pros y contras

> Toda arquitectura de desarrollo de software tiene fortalezas (Pros), desventajas (Contras) y limitaciones dependiendo del contexto y objetivo del proyecto.

<br>

A continuación vamos a conocer cuales son las ventajas (Pros) de la arquitectura de microservicios:

<br>

---
<details>
  <summary>Escalabilidad</summary>
  Los microservicios permiten escalar cada servicio de forma independiente, lo que permite adaptar la capacidad de la aplicación a las necesidades específicas, optimizando el uso de recursos.
</details>

---
<details>
  <summary>Flexibilidad y agilidad</summary>
  Los microservicios facilitan la implementación de cambios y actualizaciones en la aplicación de manera rápida y aislada, sin afectar a otros servicios, lo que permite una mayor flexibilidad y agilidad en el desarrollo y despliegue de aplicaciones.
</details>

---
<details>
  <summary>Modularidad</summary>
  Los microservicios se enfocan en una única funcionalidad o tarea, lo que permite una mayor modularidad en el diseño y desarrollo de la aplicación. Esto facilita la reutilización, el mantenimiento y la evolución de los servicios de forma individual.
</details>

---
<details>
  <summary>Independencia tecnológica</summary>
  Los microservicios se enfocan en una única funcionalidad o tarea, lo que permite una mayor modularidad en el diseño y desarrollo de la aplicación. Esto facilita la reutilización, el mantenimiento y la evolución de los servicios de forma individual.
</details>

---
<details>
  <summary>Desacomplamiento</summary>
  Los microservicios se comunican a través de interfaces bien definidas, lo que permite un bajo acoplamiento entre los servicios. Esto facilita la integración con otros sistemas y permite una mayor evolución y compatibilidad de la aplicación en el tiempo.
</details>

---

<br>

Luego de conoces sus fortalezas, también es fundamental conocer las limitaciones o desventajas de este tipo de arquitectura:

<br>

---
<details>
  <summary>Escalabilidad</summary>
  Los microservicios permiten escalar cada servicio de forma independiente, lo que permite adaptar la capacidad de la aplicación a las necesidades específicas, optimizando el uso de recursos.
</details>

---
<details>
  <summary>Comlpejidad</summary>
  La gestión de un sistema distribuido de microservicios puede ser compleja, ya que implica la orquestación, monitorización y gestión de múltiples servicios en diferentes entornos.
</details>

---
<details>
  <summary>Mayor overhead</summary>
  La comunicación entre microservicios puede tener un overhead adicional, como la latencia de red y la necesidad de implementar mecanismos de seguridad y gestión de errores en las interfaces de comunicación.
</details>

---
<details>
  <summary>Mayor esfuerzo de desarrollo inicial</summary>
  El despliegue de microservicios puede requerir una mayor complejidad en la gestión de la infraestructura, como el uso de herramientas de orquestación de contenedores y sistemas de descubrimiento de servicios.
</details>

---
<details>
  <summary>Mayor complejidad en el despliegue</summary>
  Los microservicios se comunican a través de interfaces bien definidas, lo que permite un bajo acoplamiento entre los servicios. Esto facilita la integración con otros sistemas y permite una mayor evolución y compatibilidad de la aplicación en el tiempo.
</details>

---
<details>
  <summary>Reto en la gestión de transacciones</summary>
  La gestión de transacciones en una arquitectura de microservicios puede ser más compleja, ya que las transacciones distribuidas pueden ser difíciles de manejar entre diferentes servicios.
</details>

---

<br><br><br>

# Docker

Es una **plataforma de virtualización** a nivel de sistema operativo que permite la **creación, empaquetado y distribución de aplicaciones en contenedores**. Los contenedores Docker son aislados y encapsulan todo lo necesario **para que una aplicación se ejecute de manera consistente en cualquier entorno**, independientemente de las diferencias en la infraestructura subyacente

**Docker es una herramienta que te permite empaquetar tu aplicación Node.js, junto con todas sus dependencias y configuraciones, en un 'contenedor' portátil**. Este contenedor se asemeja a un caja virtual que contiene todo lo necesario para que tu aplicación Node.js funcione correctamente, incluyendo la versión específica de Node.js, las bibliotecas y todos los paquetes de npm necesarios.

Imagina que tu aplicación Node.js es una casa con sus propios muebles y electrodomésticos. Docker sería como una caja de mudanza que empaca todos los elementos necesarios para tu casa en un solo lugar, de manera ordenada y segura. Luego, puedes llevar esa caja de mudanza a cualquier lugar, como un nuevo servidor o el entorno de desarrollo de tu colega, y asegurarte de que todos los elementos de tu casa estén en su lugar correcto y funcionando sin problemas.



<br>

Además de los beneficios comentados en el video anterior, Docker es una herramienta extremadamente útil al trabajar con microservicios por varias razones que detallamos a continuación:

<br>

---
<details>
  <summary>Independencia de dependencias</summary>
  Los microservicios suelen ser pequeñas aplicaciones o componentes de una aplicación más grande que se ejecutan de forma independiente. Cada microservicio puede tener sus propias dependencias y configuraciones específicas. Docker permite empaquetar cada microservicio junto con sus dependencias en un contenedor independiente. Esto asegura que cada microservicio tenga su propio entorno aislado y no se vea afectado por las dependencias de otros microservicios o del sistema operativo en el que se ejecutan.
</details>

---
<details>
  <summary>Portabilidad</summary>
  Docker permite empaquetar un microservicio y todas sus dependencias en un contenedor, lo que lo hace altamente portátil. Puedes mover fácilmente el contenedor de un entorno a otro, como de desarrollo a producción, o entre diferentes servidores o plataformas en la nube. Esto facilita la implementación y despliegue de microservicios en diferentes entornos sin preocuparse por las diferencias en la configuración del sistema operativo o las dependencias.
</details>

---
<details>
  <summary>Escalabilidad</summary>
  Los microservicios suelen diseñarse para escalar horizontalmente, lo que significa que se pueden ejecutar varias instancias del mismo microservicio para manejar cargas de trabajo crecientes. Docker facilita la replicación y el escalado de microservicios al permitir la creación de múltiples contenedores a partir de la misma imagen de Docker. Esto hace que sea sencillo agregar o quitar instancias de microservicios según sea necesario para adaptarse a los cambios en la demanda.
</details>

---
<details>
  <summary>Consistencia y reproducibilidad</summary>
  Docker asegura que los microservicios se ejecuten de la misma manera en todos los entornos, lo que garantiza la consistencia en el desarrollo, prueba y producción. Además, Docker permite definir la configuración del contenedor en un archivo llamado Dockerfile, lo que facilita la reproducción del entorno de ejecución del microservicio en diferentes etapas del ciclo de vida del desarrollo de software, desde el desarrollo local hasta la producción.
</details>

---
<details>
  <summary>Facilidad en la gestión</summary>
  Docker proporciona una interfaz de línea de comandos y una interfaz gráfica de usuario que facilita la gestión de los contenedores de microservicios. Puedes iniciar, detener, reiniciar o eliminar contenedores con simples comandos o acciones de interfaz gráfica. Además, Docker tiene una amplia comunidad y un ecosistema de herramientas y servicios que facilitan la gestión y monitoreo de microservicios.
</details>

---

# Actividad

Debes lograr dividir esta aplicación en aplicaciones más pequeñas y sencillas, que involucren un único aspecto, entidad o funcionalidad del proyecto.

El objetivo es dividir nuestro proyecto en una estructura similar a la siguiente:

![Actividad 1](./images/Actividad%201.png)

Como podrás ver 👀, contaremos con una API Gateway que se encargará de redirigir las peticiones al servicio que corresponda según la petición. Este gateway no es más que una aplicación de Express que escuchará las peticiones en un puerto de tu host.

A su vez, cada uno de estos servicios será una aplicación de Express individual, que estará escuchando peticiones en un puerto distinto y que contará también con sus capas (capa de enrutado, capa de controladores, capa de datos "por el momento los .json").

Respecto a cómo la API Gateway redirigirá las peticiones, lo hará realizando nuevas peticiones HTTP a los host:port donde estén escuchando cada uno de los demás servicios.

De esta manera, el cliente realizará sus peticiones ÚNICAMENTE al API Gateway, y será este quien se encargue de comunicarse con los microservicios involucrados en cada petición. Para ello crearemos una aplicación de Express sencilla, que tendrá como única particularidad la instalación de la librería http-proxy-middleware(opens in a new tab).  

En términos sencillos, un proxy es una especie de intermediario entre el cliente y el servidor. La librería http-proxy-middleware permite crear un proxy en una aplicación Node.js para que cuando un cliente envíe una solicitud, la solicitud sea primero enviada al proxy, y luego el proxy la reenvía al servidor real. 

Para ello entonces trabajaremos nuestro módulo index.js del gateway de la siguiente manera:


```javascript

  const express = require("express")
  const {createProxyMiddleware} = require("http-proxy-middleware")

  const app = express()

  app.use("/characters", createProxyMiddleware({
    target:"http://localhost:8001",
    changeOrigin:true
  }))

  app.listen(8000)

```

> Para la utilización de estos proxys, NO ES RECOMENDABLE iniciar la aplicación con Nodemon. En su lugar, nuestro comando “start” deberá iniciar la aplicación normalmente con node.

Hemos pasado de tener una única aplicación que se encargaba de todas las funcionalidades de nuestra Rest API a tener 4 aplicaciones separadas:


[x] - Gateway (puerta de entrada a la estructura)


[x] - Characters (servicio que se encarga de manejar la información relacionada a los personajes)


[x] - Planets (servicio que se encarga de manejar la información relacionada a los planetas)


[x] - Films (servicio que se encarga de manejar la información relacionada a los films)


Ahora llegó el momento de crear nuestros contenedores de Docker e incluir dentro de los mismos a cada una de las aplicaciones que desarrollamos, manteniendo siempre una única aplicación en cada contenedor. 

Lo que debemos lograr es que estos contenedores, no solamente funcionen, sino que además puedan comunicarse entre sí.

```bash
# crear el contenedor con nombre gateway
docker build -t gateway .
# correr el contenedor creado y escuchar en el puerto 8000
docker run -p 8000:8000 gateway
# crear network para conectar containers
docker network create name
# correr dentro de la network:name y dentro de la red name=...
docker run --network=starwars --name=gateway -p 8000:8000 gateway

```

## Links útiles

https://juanlucodingbinding.wordpress.com/2020/08/22/docker-con-nodejs/

https://www.itdo.com/blog/api-gateway-en-tu-arquitectura-de-microservicios/


<br><br><br>

# DB NoSQL MongoDB and Mongoose ODM

Una **base de datos NoSQL**, también conocida como base de datos **NoSQL (Not Only SQL)**, es un tipo de base de datos diseñada para almacenar y recuperar grandes volúmenes de datos no estructurados o semi-estructurados.

> Estas bases de datos son ampliamente utilizadas en aplicaciones modernas que requieren un alto rendimiento, como aplicaciones web, sistemas de gestión de contenido, aplicaciones de Big Data y IoT (Internet de las cosas), entre otros. Algunos ejemplos populares de bases de datos NoSQL incluyen MongoDB, Cassandra, Redis, Couchbase y Neo4j. 

A diferencia de las bases de datos SQL tradicionales, las bases de datos NoSQL no utilizan el lenguaje SQL para consultar y manipular los datos, sino que **emplean diferentes modelos de datos**, como el modelo de documentos, el modelo de columnas, el modelo clave-valor o el modelo de grafos.

## SQL vs. NoSQL

Mira con atención la siguiente tabla para atender a las diferencias entre estos dos modelos de base de datos.

![Tabla comparativa](./images/SQL%20vs%20NoSQL.png)

> Las Bases de Datos No SQL suelen ser más apropiadas en algunos sistemas de microservicios por varias razones.

---
<details>
  <summary>Escalabilidad horizontal</summary>
  Las bases de datos NoSQL están diseñadas para escalar horizontalmente, lo que significa que puedes agregar más nodos o servidores para manejar el aumento de la carga de trabajo.

  Esto es especialmente importante en una arquitectura de microservicios, donde cada microservicio puede tener su propia base de datos y necesitar una capacidad de escalado independiente.

  Las bases de datos NoSQL facilitan la distribución y partición de datos entre múltiples nodos, permitiendo un escalado más eficiente.
</details>

---
<details>
  <summary>Esquema flexible</summary>
  En una arquitectura de microservicios, los microservicios pueden evolucionar de forma independiente y tener diferentes requisitos de datos. Una base de datos NoSQL proporciona una mayor flexibilidad en términos de cambios en el esquema, lo que facilita la adición, modificación o eliminación de atributos de datos sin afectar a otros microservicios.

  Esto es especialmente útil cuando se trabaja en un entorno ágil o se necesita una rápida adaptación a los cambios en los requerimientos del sistema.
  </details>

---
<details>
  <summary>Modelos de datos adecuados</summary>
  Las bases de datos NoSQL ofrecen diferentes modelos de datos, como documentos, columnas, claves-valor y grafos. Estos modelos se ajustan bien a diferentes tipos de microservicios y escenarios de uso.

  Por ejemplo, una base de datos de documentos como MongoDB es adecuada para almacenar datos semiestructurados, mientras que una base de datos de grafos como Neo4j es útil para representar relaciones complejas entre los datos. Puedes seleccionar el modelo de datos más adecuado para cada microservicio según sus necesidades específicas.
  </details>

---
<details>
  <summary>Rendimiento y velocidad</summary>
  Las bases de datos NoSQL están optimizadas para consultas rápidas y operaciones de escritura eficientes. En una arquitectura de microservicios, donde los microservicios se ejecutan de forma independiente y deben responder rápidamente a las solicitudes, una base de datos NoSQL puede ofrecer un rendimiento superior.

  Además, algunos modelos de bases de datos NoSQL, como las bases de datos en memoria (como Redis), proporcionan una latencia extremadamente baja y son ideales para casos de uso donde la velocidad es crítica.
  </details>

---
<details>
  <summary>Adaptabilidad a la escala y la variabilidad</summary>
  En una arquitectura de microservicios, los microservicios pueden tener diferentes cargas de trabajo y requerir diferentes tipos de almacenamiento de datos.

  Las bases de datos NoSQL ofrecen una variedad de opciones de almacenamiento, como bases de datos de alto rendimiento en memoria, almacenamiento en caché distribuido y almacenamiento masivo en disco. Esto permite adaptar el almacenamiento de datos según las necesidades específicas de cada microservicio y escalarlos individualmente.
  </details>

---

<br>

## MongoDB

MongoDB es una base de datos NoSQL orientada a documentos, lo que significa que almacena los datos en forma de documentos similares a JSON en lugar de utilizar tablas y filas como las bases de datos relacionales tradicionales.

**Características:**

1. Fue desarrollada con el objetivo de brindar escalabilidad, flexibilidad y rendimiento en entornos de aplicaciones modernas.

2. Utiliza un modelo de datos flexible y dinámico, lo que permite almacenar datos con estructuras variables dentro de un mismo conjunto de datos. Esto significa que no se requiere un esquema fijo y predefinido, lo que facilita la iteración y evolución de las aplicaciones.

3. Permite distribuir la carga de trabajo en múltiples servidores y manejar grandes volúmenes de datos. Esto es especialmente útil en aplicaciones con altas demandas de rendimiento y escalabilidad.

4. Ofrece una amplia gama de características y funcionalidades, como índices flexibles, consultas ad hoc poderosas, replicación automática para alta disponibilidad, fragmentación de datos (sharding) para distribuir la carga y tolerancia a fallos, y soporte para operaciones geoespaciales.

5. Se utiliza en una variedad de aplicaciones y casos de uso, desde aplicaciones web y móviles hasta sistemas de gestión de contenido, análisis de datos, IoT y muchas otras áreas donde la flexibilidad y el rendimiento son fundamentales.

### Mongo DB Atlas

MongoDB Atlas es un servicio de base de datos en la nube ofrecido por MongoDB. Proporciona una forma fácil y conveniente de alojar, administrar y escalar clústeres de bases de datos MongoDB en entornos en la nube, sin tener que preocuparse por la configuración y el mantenimiento de la infraestructura subyacente.

**Características:**

1. Los usuarios pueden crear clústeres de bases de datos MongoDB con unos pocos clics.

2. El servicio se encarga de aspectos como aprovisionamiento de hardware, configuración de la red, configuración de seguridad y respaldo de datos.

3. Permite a los desarrolladores centrarse en el desarrollo de sus aplicaciones en lugar de preocuparse por la administración de la infraestructura.

<br>

# Actividad

MongoDB es una base de datos NoSQL orientada a documentos. En lugar de utilizar tablas y filas como en las bases de datos SQL tradicionales, MongoDB almacena los datos en documentos BSON (Binary JSON).

Esta base de datos no la trabajaremos de forma local, sino que estará alojada en un cluster de MongoDB Atlas. Este es un servicio de base de datos en la nube ofrecido por MongoDB. Es una plataforma de base de datos como servicio (DBaaS) que permite a los usuarios desplegar, gestionar y escalar clústeres de bases de datos MongoDB en la nube de forma sencilla y que posee además una capa gratuita bastante robusta.

En esta actividad nos centraremos en la creación de un microservicio dedicado exclusivamente a la conexión e interacción con nuestra base de datos.

> Esto nos permitirá que nuestros microservicios de Characters, Planets y Films, puedan abstraerse de cuál es el origen de los datos o la lógica que hay detrás de su obtención, y simplemente los soliciten a este nuevo microservicio para poder responder al cliente.

Al finalizar esta actividad, tendremos una arquitectura similar a la siguiente:

![Actividad 2](./images/Actividad%202.png)

Ten en cuenta que para poder iniciar con esta actividad, es importante que hayas generado correctamente tu cluster de datos en MongoDB Atlas. 

Además, debes haber instalado en tu computadora MongoDB Compass. Esta herramienta nos servirá para poder precargar los datos que ya tenemos de forma súper sencilla, y sin tener que estar generando scripts a mano para este proceso.

Luego, importamos los datos que ya tenemos guardados en nuestros archivos JSON. De esta manera, de forma muy sencilla y sin tener que desarrollar scripts, podremos tener la precarga terminada en nuestra Base de Datos y estar listos para continuar.

1. Un buen primer paso podría ser “dockerizar” nuestro microservicio de base de datos. Lo haremos creado sus respectivos archivos “Dockerfile” y “.dockerignore”. Recuerda exponer correctamente el puerto que corresponde y construir su imagen. A partir de allí podrás correr el contenedor DENTRO DE LA RED junto con los demás contenedores.

2. Nuestros microservicios de “characters”, “planets” y “films” venían respondiendo con información de un json. ¡Eso ya es cosa del pasado! Ahora estos microservicios podrán realizar peticiones HTTP (¡Sí! Las que ya conocemos) al microservicio de datos para pedirle la información que queremos para cada microservicio.

<br>

En la última parte, finalmente llegará lo que estabas esperando:

- Docker Compose para poder orquestar nuestros contenedores de forma totalmente centralizada y marcar el comportamiento de toda la arquitectura.

- Haremos el despliegue de toda la estructura en una máquina virtual, exponiendo un único puerto del Gateway como puerta de entrada a toda nuestra red de aplicaciones.

