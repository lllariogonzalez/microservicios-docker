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

# Docker Compose

Docker Compose es una herramienta que facilita la orquestación y gestión de aplicaciones basadas en contenedores Docker. Proporciona una forma sencilla y declarativa de definir y ejecutar servicios compuestos por múltiples contenedores.

Cuando trabajamos con aplicaciones modernas, es común tener componentes que se ejecutan de forma independiente, pero que necesitan comunicarse y colaborar entre sí. Por ejemplo, una aplicación web puede constar de un servidor web, una base de datos y un servidor de cache.

Docker Compose nos permite describir y definir estos componentes en un archivo YAML, especificando cómo se deben configurar y cómo se comunican entre sí.

Con Docker Compose, puedes crear un archivo de configuración llamado **docker-compose.yml**, en el cual se definen los servicios, volúmenes, redes y otras opciones de configuración necesarias para ejecutar la aplicación.

Cada servicio se define como un contenedor Docker independiente, con su propia imagen, variables de entorno, puertos expuestos y configuración de red.

Al utilizar Docker Compose, puedes aprovechar su sintaxis sencilla y legible para definir las dependencias y relaciones entre los servicios de tu aplicación. Por ejemplo, puedes indicar que un servicio depende de otro y que debe esperar hasta que el servicio dependiente esté en funcionamiento antes de iniciarse.

Esto garantiza que todos los componentes de tu aplicación se ejecuten correctamente y se comuniquen entre sí de manera adecuada.

## Ventajas de Docker Componse

1. Simplifica la administración de aplicaciones en entornos de desarrollo, pruebas y producción.

2. Permite crear y arrancar todos los contenedores definidos en el archivo de configuración con comandos simples.

3. Facilita la detención y eliminación de todos los contenedores y recursos asociados.

4. Es portátil, lo que permite compartir el archivo de configuración con otros miembros del equipo.

5. Permite la colaboración y la replicación del entorno de desarrollo en diferentes máquinas.

6. Es compatible con diferentes plataformas.

7. Se integra fácilmente con otras herramientas de Docker, como Docker Swarm o Kubernetes.

8. Permite gestionar entornos de producción más complejos.

> Puedes utilizar comandos como docker-compose up para crear y arrancar todos los contenedores definidos en el archivo de configuración, o docker-compose down para detener y eliminar todos los contenedores y recursos asociados.


## Maquina Virtual

Una máquina virtual (VM, por sus siglas en inglés) es una representación virtual de un sistema informático completo, que incluye hardware y software, y que se ejecuta en un entorno aislado dentro de un host físico. 

En otras palabras, es un software que simula una computadora independiente, lo que permite ejecutar múltiples sistemas operativos y aplicaciones en un solo servidor físico.

El concepto de máquinas virtuales se basa en la idea de dividir los recursos de hardware de una computadora en múltiples entornos virtuales. Cada máquina virtual tiene su propio sistema operativo, aplicaciones y recursos asignados, pero comparte el mismo conjunto de hardware subyacente.

Esto permite la consolidación de varios servidores físicos en una sola máquina física, lo que resulta en una mejor utilización de los recursos y una mayor eficiencia.

### Componentes principales

Una máquina virtual consta de dos componentes principales: el hipervisor y la imagen de la máquina virtual.
<br>
---
<details>
  <summary>Hipervisor</summary>
  El hipervisor, también conocido como monitor de máquina virtual, es el software responsable de gestionar y controlar las máquinas virtuales en el host físico. Puede haber hipervisores de tipo 1, que se ejecutan directamente sobre el hardware, o hipervisores de tipo 2, que se ejecutan sobre un sistema operativo existente.
</details>

---
<details>
  <summary>Imágen de máquina virtual</summary>
  La imagen de la máquina virtual es un archivo que contiene todos los componentes necesarios para ejecutar un sistema operativo y aplicaciones dentro de la máquina virtual.

  Esta imagen incluye el sistema operativo invitado, archivos de configuración, aplicaciones instaladas y cualquier otra configuración personalizada. Se puede crear una imagen de la máquina virtual desde cero o utilizar imágenes preconfiguradas proporcionadas por proveedores de virtualización.
</details>

---

<br>
Las máquinas virtuales se utilizan ampliamente en entornos de servidores para consolidar infraestructuras, mejorar la flexibilidad, facilitar la migración y aumentar la eficiencia energética. También son útiles para el desarrollo y la prueba de aplicaciones, ya que permiten la creación de entornos aislados y reproducibles.

## Actividad

Dividiremos nuestra actividad en los siguientes pasos:

1. Configuración de Docker Compose en entorno local

2. Subida de nuestro proyecto a un repositorio remoto

3. Creación y configuración de una máquina virtual en un servicio en la nube, ejecución de nuestro proyecto en la máquina virtual y pruebas finales

```yml
# version de docker compose
version: '3'
# servicios
services:
  gateway:
    container-name: gateway
    restart: always
    build: ./gateway
    ports:
      - '8000:8000'

  characters:
    container-name: characters
    restart: always
    build: ./characters
    ports:
      - ':8001' # podemos no exponerlos, pero se requiere para el deploy
```

```bash
# construir el compose de containers creando las imagenes de todos los servicios
docker-compose build
# levantar todos los servicios del compose
docker-compose up
```

¡Finalmente llegó el momento de crear nuestra VM! Lo cual será bastante sencillo. El dolor de cabeza aquí estará en configurarla. 🤭

# Google Cloud

1. Creamos una MV maquina virtual, instancia nueva.

> Debemos permitir conexiones http y https

2. Abrimos la consola, actualizamos e instalamos git, docker y docker-compose.

```bash
sudo apt update

sudo apt install git

sudo apt install docker.io

sudo apt install docker-compose
```

3. Obtenemos nuestra clave ssh

```bash
# creamos nuestra clave
ssh-keygen -t ed25519 -C "email"
# recibiremos algunas preguntas, directorio para guardar clave, frase que identifique (no necesario)

# leemos la clave ssh creada
cat ~/.ssh/id_ed25519.pub

# la clave la utilizaremos en github settings SSH and GPG keys, add new ssh key, name "api", key type, y en key pegamos nuestra clave ssh
```

4. Clonamos nuestro repositorio con SSH

```bash
git clone git@github.com:..../nameapissh
```

5. Creamos las .env necesarias para el proyecto

```bash
# nos movemos a la carpeta database que requiere env de MongoDB
cd database/
# creamos un archivo .env con la "data"
echo "MONGO_URI:mongodb+srv://admin:admin@cluster0.74....." > .env
# comprobamos el archivo creado
ls -a
```

6. Entramos al repositorio, construimos las imagenes y levantamos los servicios

```bash
cd .. # si venimos de database o
cd reponame/
# construimos las imagenes
sudo docker-compose build
# levantamos los servicios
sudo docker-compose up
```

7. Tenemos desplegada y funcionando nuestra app en la Maquina Virtual

Debemos tener en cuenta los datos de interfaces de red, entramos en **default** > para configurar **firewall** > **default-allow-http** 
Editar puertos, 80 por 8000 nuestro puerto principal del gateway y guardamos
Copiamos la IP externa pública la cual expone nuestros servicios.

