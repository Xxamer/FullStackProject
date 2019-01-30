<h1> Proyecto FullStack </h1>


![](https://i.imgur.com/apVu95u.jpg)



1.  *Pequeña descripción de la aplicación que se va desarrollar, diagrama E/R.
    que ilustre el diseño físico correspondiente y pila tecnológica a usar.*


2.  Modelo de datos representando las clases gráficamente con UML. Usar la
    aplicación draw.io por ejemplo.


3.  Descripción de cada tabla/entidad del modelo de datos, relaciones y de cada
    uno de sus atributos de datos de datos. Ilustrar el diseño físico con el
    diagrama de las tablas y relaciones según el SGBD.


4.  Codificar una aplicación que usando un ORM gestione el CRUD de los datos de
    las entidades/objetos que se han definido en el modelo de datos.


5.  Se deberán codificar el máximo de consultas que nos permitan explotar los
    datos y estén justificadas en para la aplicación.


6.  Describir las especificaciones del sistema mediante, historias de usuario,
    casos de uso, diagramas de secuencia.


7.  Describir la implementación del código de la **API REST**. (ver anexo de
    ejemplo).


8.  Describir la implementación del código de la **App móvil** y de la **App
    Web.**


9.  Describir el funcionamiento del sistema y especificaciones técnicas para la
    aplicación del servidor y las APP´s móvil y Web ( Manual de instalación,
    Manual de uso, etc ).


10. Subir el código del proyecto completo, para su prueba y revisión si fuera
    necesario. Se deberá hacer uso profesional de una repositorio y adjuntar al
    documento enlace al Repositorio del proyecto en Internet.



1.- Descripción del proyecto que se va a realizar, diagrama E/R y pila tecnológica a usar
=


Descripción del proyecto
------------------------


>   *El objetivo del proyecto será la creación de un sistema de gestión
>   hipotecaria que permita registrar la firma de una hipoteca. La aplicación
>   permitirá crear un apoderado, el banco para el que trabaja, la oficina en la
>   que se realizó la firma, el cliente que firma y la firma en sí.*


Diagrama E/R básico
-------------------


>   *En este diagrama básico se muestra las clases que van a existir y las
>   relaciones que hay entre ellas.*


![](https://i.imgur.com/mM8FVWM.png)


Pila tecnológica a usar
-----------------------


![](https://i.imgur.com/EuAdLaF.jpg)


**Base de datos:**


| Logo                                       | Nombre          | Descripción                                                                                                                                                                                                                                                        |
|--------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://i.imgur.com/0Q6yu1v.png) | MySQL           | MySQL es un sistema de gestión de bases de datos relacional y está considerada como la base datos de código abierto más popular del mundo y una de las más populares en general junto a Oracle y Microsoft SQL Server, sobre todo para entornos de desarrollo web. |
| ![](https://i.imgur.com/MIiFbZu.png)  | MySQL Workbench | MySQL Workbench es una herramienta visual de diseño de bases de datos que integra desarrollo de software, Administración de bases de datos, diseño de bases de datos y gestión y mantenimiento para el sistema de base de datos MySQL                              |
| ![](https://i.imgur.com/hIpALme.png)  | SQLite          | SQLite es un sistema de gestión de bases de datos relacional , contenida en una relativamente pequeña biblioteca escrita en C. SQLite es un proyecto de dominio público                                                                                            |


**Servidor**:


| Logo                                       | Nombre           | Descripción                                                                                                                                                                                          |
|--------------------------------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://i.imgur.com/lYBP58r.png) | Eclipse IDE      | Eclipse es una plataforma de software compuesto por un conjunto de herramientas de programación de código abierto multiplataforma para desarrollar lo que el proyecto.                               |
| ![](https://i.imgur.com/oPQ3arw.png)  | Spring Framework | Spring es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java.                                                           |
| ![](https://i.imgur.com/oegs77N.png)  | Java             | Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos, que fue diseñado específicamente para tener tan pocas dependencias de implementación como fuera posible. |



**Cliente**:


| Logo                                         | Nombre        | Descripción                                                                                                                                                                                                                     |
|----------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://i.imgur.com/iU2QmGF.png  )                                  | HTML          | HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto                         |
| ![](https://i.imgur.com/RoJLhL9.png)  | CSS           | CSS (siglas en inglés de Cascading Style Sheets), en español "Hojas de estilo en cascada", es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado |
| ![](https://i.imgur.com/L6dgbJR.png) | Ionic         | Ionic es un Kit de desarrollo de sistemas de código abierto para el desarrollo de web y aplicaciones móviles híbridas.                                                                                                          |
| ![](https://i.imgur.com/F2CeZja.png)  | Visual Studio | Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux y macOS. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código,fragmentos y refactorización de código. 
   **Control de versiones**


| Logo                                         | Nombre    | Descripción                                                                                                                                                                                                                                                                                                                                                      |
|----------------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://i.imgur.com/auKWTd5.png)  | Git       | Git es un software de control de versiones pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando éstas tienen un gran número de archivos de código fuente. Su propósito es llevar registro de los cambios en archivos de computadora y coordinar el trabajo que varias personas realizan sobre archivos compartidos |
| ![](https://i.imgur.com/ELgbzCI.png) | Github    | GitHub es una plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de computadora.                                                                                                                                           |
|  ![](https://i.imgur.com/xEllU4D.png) | GitKraken | GitKraken es una potente y elegante interfaz gráfica multiplataforma para git desarrollada con Electron. De forma muy sencilla podemos llevar el completo seguimiento de nuestros repositorios, ver ramas, tags, crear nuevos, todo el historial de nuestro trabajo, commits                                                                                     |


**2.- Modelo de clases representado con UML**


![](https://i.imgur.com/GFuth3B.png)


**3.- Descripción de cada tabla del modelo de datos, relaciones y atributos de datos.**


1.  *Modelo E/R de la base de datos*.


![](https://i.imgur.com/HrdC5wU.png)


>   En principio mi base de datos contará con 8 tablas en las cuales se
>   recogerán estos datos:


   **Banco**: *Nombre, Sede, País*


  **Apoderados**: El banco al que pertenece (*Id_Banco*), Número de Apoderado
  (*NumApoderado*), *Nombre, Apellido1 y Apellido 2*.


  **Oficinas**: El banco al que pertenece (*Id_Banco*), Nombre, Dirección y Horario.


  **Firma**: El apoderado que firma (Id_Apoderado), la oficina en la que se
 firmó (Id_Oficinas), el número de la escritura (*NumEscritura*), Fecha,
   Precio de la vivienda (*Precio_Vivienda*), Número de caras del documento
   (*Num_Caras*), si tiene garaje (*Garaje*), si tiene trastero (*Trastero*) y
   cuantas personas firman (*Num_Persona*).


 **Firma_Cliente**: Esta tabla recogerá el ID que se genera con la firma y el
   ID del cliente que firma.


   **Cliente**: Nombre, Apellido1, Apellido2 y NIF.


  **User**: Username y Password para permitir el login.


   **Role:** El nombre del Role (rol) y la foreign key del Id que se autogeneral  en el usuario


1.  *Tipos de relaciones*


  La tabla **Banco** tendrá una relación uno a muchos con las tablas
   **Oficinas y Apoderados**, ya que un solo banco puede contratar a muchos
   Apoderados y un solo banco puede poseer muchas oficinas. Así que el ID del
   banco pasará a estas tablas


   Las tablas **Oficinas y Apoderados** tienen una relación uno a muchos con la
   tabla **Firma** así que los ID de estas dos tablas pasarán a esta.


 La tabla **Cliente y Firmas** tienen una relación muchos a muchos así que se  creará otra tabla en la que se almacenarán los ID de ambos.


>   Las tablas **User y Role** tienen una foreign key que va de User a Role.


![](media/3165d5caceb417bd6fff570510aa11f3.png)


**4. Implementación del ORM en el servidor.**


**Vista general**


![](https://i.imgur.com/sZqcstS.png)


>   Al usar Spring como framework el mapeo de objetos relacional (ORM) se
>   realiza con sus propias anotaciones y referenciando al nombre de la tabla.


>   \@Entity es para decir que el archivo será una entidad


>   \@Table sirve para definir el nombre de la tabla que se va a utilizar


>   \@Id y \@GeneratedValue es para definir que el campo siguiente (en este caso
>   Id_Banco) va a ser un valor auto incremental.


>   \@NotEmpty con esta notación declaramos que ese campo no va a poder estar
>   vacio, en la Base de Datos esto equivaldría a “Not Null”.


>   \@OneToMany con esto declaramos que el Id_Banco va a ser un valor que vamos
>   a pasar a otras tablas, en este caso el Id_Banco como expliqué en
>   **“**[Tipos de relaciones](#_bookmark10)**”** va a ser una clave foránea de
>   Apoderados y Oficinas.


>   *Bancos*


![](https://i.imgur.com/w7j4k0A.png)


>   En el resto de archivos que utilizan el ORM es igual salvo en la manera de
>   declarar el Many to One


>   \@ManyToOne se utiliza para referencia a una clave foránea de otra tabla, en
>   este caso se llama a la clave Id_Banco.


>   \@NotNull es igual que la notación “\@NotEmpty” pero esta acepta
>   String(Carácteres) e Int (Números)


>   *Oficinas*


![](https://i.imgur.com/4qt8ISK.png)


>   *Clientes*


![](https://i.imgur.com/DLzUSY7.png)


>   *Apoderados*


![](https://i.imgur.com/NwU9AdM.png)


>   *Firmas*


![](https://i.imgur.com/zuOnLnL.png)


>   *Firmas de clientes*


![](https://i.imgur.com/mcjtfWB.png)


>   *Usuarios*


![](https://i.imgur.com/gJo0TmC.png)


>   *Roles*


![](https://i.imgur.com/QAanKao.png)


**6.- Especificaciones del sistema mediante historias de usuario y casos de uso.**


**6.1Mockups versión móvil e historias de usuario\*:**
*Los mockups difieren de la aplicación final pero esta es la idea principal.


| **Vista de Login.**                                                                                                                                                                                                     | **Vista de home del usuario.**                                                                                                                                                                                      |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![](https://i.imgur.com/vaZH3WI.png)| ![](https://i.imgur.com/hgg8cZE.png)                                                                                                                                                                       |
| La pantalla de Login en la versión final contará con un solo botón de login pero en función del rol asignado entrará en una vista u otra con permisos distintos.                                                        | La pantalla de inicio del usuario (en general serán apoderados de un banco) tendrá unas pequeñas instrucciones sobre como usar la aplicación.                                                                       |
| **Vista de home del administrador.**                                                                                                                                                                                    | **Vista de bancos**                                                                                                                                                                                                 |
| ![](https://i.imgur.com/cAqwPR5.png )                                                                                                                                                                |!![](https://i.imgur.com/ePoKCG2.png)                                                                                                                                                                         |
|                                                                                                                                                                                                                         | La vista de bancos mostrará todos los datos almacenados en la base de datos pertenecientes a la tabla de bancos y permitirá modificarlos, crearlos con el botón “+” mostrado en la barra de título y borrarlos.     |
| **Vista de clientes.**                                                                                                                                                                                                  | **Vista de oficinas.**                                                                                                                                                                                              |
| ![Imgur](https://i.imgur.com/tB9zQRe.png)                                                                                                                                                                            | ![Imgur](https://i.imgur.com/eFh3xty.png)                                                                                                                                                                     |
| La vista de clientes mostrará todos los datos almacenados en la base de datos pertenecientes a la tabla de clientes y permitirá modificarlos, crearlos con el botón “+” mostrado en la barra de título y borrarlos.     | La vista de oficinas mostrará todos los datos almacenados en la base de datos pertenecientes a la tabla de clientes y permitirá modificarlos, crearlos con el botón “+” mostrado en la barra de título y borrarlos. |
| **Vista de apoderados.**                                                                                                                                                                                                | **Vista de firmas.**                                                                                                                                                                                                |
| ![Imgur](https://i.imgur.com/9JDSdsd.png)                                                                                                                                                                           | ![Imgur](https://i.imgur.com/SL2IUSp.png)                                                                                                                                                                       |
| La vista de apoderados mostrará todos los datos almacenados en la base de datos pertenecientes a la tabla de apoderados y permitirá modificarlos, crearlos con el botón “+” mostrado en la barra de título y borrarlos. | La vista de firmas mostrará todos los datos almacenados en la base de datos pertenecientes a la tabla de firmas y permitirá modificarlos, crearlos con el botón “+” mostrado en la barra de título y borrarlos.     |


>   *Diagrama de casos de uso\*:*


>   \*El caso de uso difiere de la aplicación final pero esta es la idea
>   principal.
![Imgur](https://i.imgur.com/lwJLyhX.jpg)


>   *7. Documentación de la API RESTFul.*


>   Este es un ejemplo de los endpoints de un solo controller, el resto de
>   documentación de la API se puede encontrar
>   https://documenter.getpostman.com/view/4284013/RzfmGnHj


| Título               | Todos los clientes                                                                                                                        |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| URL                  | localhost:3448/clients/AllClients                                                                                                         |
| Método               | GET                                                                                                                                       |
| Parámetros de la URL | No                                                                                                                                        |
| Parámetros de datos  | No                                                                                                                                        |
| Respuesta con éxito  | Código: 200 Contenido de ejemplo:                                                                                                         |
| Ejemplo de llamada   | var settings = { "url": "localhost:3448/clients/AllClients", "method": "GET", "timeout": 0, }; \$.ajax(settings).done(function (response) |


>   {


>   "id_Cliente": 4, "nombre": "Christian", "apellido1": "Granado", "apellido2":
>   "Rodríguez", "nif": "45376693P"


>   },


>   { console.log(response); });


| Título               | Buscar cliente por ID                                                                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL                  | localhost:3448/clients/FindClients/{Id_Cliente}                                                                                                         |
| Método               | GET                                                                                                                                                     |
| Parámetros de la URL | Requerido Id=[Integer]                                                                                                                                  |
| Parámetros de datos  | No                                                                                                                                                      |
| Respuesta con éxito  | Código: 200 Contenido de ejemplo:                                                                                                                       |
| Ejemplo de llamada   | var settings = { "url": "localhost:3448/clients/FindClients/{Id_Cliente}", "method": "GET", "timeout": 0, }; \$.ajax(settings).done(function (response) |


**   Ejemplo ** 
>   Id_Oficina = 4


>   {
>   "id_Cliente": 4, "nombre": "Christian", "apellido1": "Granado", "apellido2":
>   "Rodríguez", "nif": "45376693P"
>   },


>   { console.log(response); });


| Título               | Crear cliente                                                                                                                                                                                                                                                                                 |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL                  | localhost:3448/clients/addClient                                                                                                                                                                                                                                                              |
| Método               | POST                                                                                                                                                                                                                                                                                          |
| Parámetros de la URL | No                                                                                                                                                                                                                                                                                            |
| Parámetros de datos         | Nombre: Christian
|                | Apellido1: Granado                                                                                                                                                                                                                                                                             |
|                      | Apellido2: Rodríguez                                                                                                                                                                                                                                                                           |
|                      | NIF: 43768492P                                                                                                                                                                                                                                                                                 |
| Respuesta con éxito  | Código: 200                                                                                                                                                                                                                                                                                   |
| Ejemplo de llamada   | var form = new FormData(); form.append("Nombre", "Christian"); form.append("Apellido1", "Granado"); form.append("Apellido2", "Rodríguez"); form.append("NIF", "43768492P"); var settings = { "url": "localhost:3448/clients/addClient", "method": "POST", "timeout": 0,                       |
| Título               | Modificar oficina                                                                                                                                                                                                                                                                             |
| URL                  | localhost:3448/offices/UpdateOffice/{Id_Oficina}                                                                                                                                                                                                                                              |
| Método               | PUT                                                                                                                                                                                                                                                                                           |
| Parámetros de la URL | Requerido Id=[Integer]                                                                                                                                                                                                                                                                        |
| Parámetros de datos  | Nombre Carlos Apellido1 ApellidoFalso Apellido2 ApellidoFalso2 NIF 48796456J                                                                                                                                                                                                                  |
| Respuesta con éxito  | Código: 200                                                                                                                                                                                                                                                                                   |
| Ejemplo de llamada   | var form = new FormData(); form.append("Nombre", "Carlos"); form.append("Apellido1", "ApellidoFalso"); form.append("Apellido2", "ApellidoFalso2"); form.append("NIF", "48796456J"); var settings = { "url": "localhost:3448/clients/UpdateClients/{Id_Banco}", "method": "PUT", "timeout": 0, |


**Ejemplo:** Id_Oficina = 4


| Título               | Borrar Oficina por ID                                                                                                                                  |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| URL                  | localhost:3448/ofces/DeleteOfce/{Id_Ofcina}                                                                                                            |
| Método               | DELETE                                                                                                                                                 |
| Parámetros de la URL | Requerido Id=[Integer]                                                                                                                                 |
| Parámetros de datos  | No                                                                                                                                                     |
| Respuesta con éxito  | Código: 200                                                                                                                                            |
| Ejemplo de llamada   | var settings = { "url": "localhost:3448/ofces/DeleteOfce/{Id_Ofcina}", "method": "DELETE", "timeout": 0, }; \$.ajax(settings).done(function (response) |


>   Ejemplo Id_Oficina = 4


>   { console.log(response); });


>   *8.- Documentación e implementación del código de la aplicación.*


>   *8.1.-Elección de la tecnología de el FrontEnd Móvil*


>   La tecnología utilizada para el FrontEnd móvil es **Ionic**, el cual permite
>   desarrollar aplicaciones móviles para iOS, Android y Windows Phone
>   codificando una sola vez, una de las facilidades que da esta aplicación es
>   que aparte de poder desarrollarse en 3 sistemas distintos a la vez, su
>   lenguaje es parecido a HTML y Angular lo cuál da bastante versatilidad.


>   *8.2.-Elección de la tecnología de el FrontEnd Web.*


>   *8.3.-Elección de la tecnología de el Backend.*


>   La tecnología utilizada para el Backend es Spring Boot Framework, el cúal
>   permite tanto como crear una API RestFUL como desarrollar páginas web que se
>   conecten a esta API.


>   *8.4 .- Comparativa de tecnologías FrontEnd*


| Ionic                                        | React                                        | Xamarin                                      | Android                                      | React-Native                                 |
|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|----------------------------------------------|
| ![Imgur](https://i.imgur.com/L6dgbJR.png) | ![Imgur](https://i.imgur.com/7Z7u9pM.png)|![Imgur](https://i.imgur.com/6NIJTiV.png)| ![Imgur](https://i.imgur.com/epWnmxD.png) | [./media/image42.jpeg](./media/image42.jpeg) |
| Ventajas:                                    | Ventajas:                                    | Ventajas:                                    | Ventajas:                                    | Ventajas: Desarrollo                         |\-Permite crear                              | Desarrollo basado                            | Capacidad de poder                           | Entorno de                                   | híbrido pero con la                          | aplicaciones para                            | en componentes                               | utilizar librerías                           | desarrollo                                   | velocidad de una                             |
| varios dispositivos                          | tanto en la parte                            | nativas                                      | bastante bueno                               | aplicación nativa                            |
| codificando una                              | cliente como                                 |                                              | ya que se centra                             |                                              |
| sola vez                                     | servidor                                     |                                              | solo en un                                   |                                              |
|                                              |                                              |                                              | desarrollo                                   |                                              |
| Desventajas:                                 | Desventajas: Es                              | Desventajas:                                 | Desventajas:                                 | Desventajas: No                              |
| \-Lentitud frente a                          | solo una librería de                         | Integración con Visual                       | Solo funciona en                             | todo su código es                            |
| otras opciones.                              | Javascript así que                           | Studio bastante                              | dispositivos                                 | 100% hibrído                                 |
|                                              | necesita de                                  |inestable, dificultad                        | Android                                      |                                              |
                                           lenguajes externos                            para integrarse con                          |                                              |                                              |
|                                              | para funcionar                               | iOS                                          |                                              |                                              |
|                                              | correctamente                                |                                              |                                              |                                              |


>   *9.- Documentación e implementación del código.9.1.- Tabla de errores de
>   validación.*


| *Código*                              | *Lugar donde se produce* | *Campo*                                                                        | *Descripción del error*                                                              |
|---------------------------------------|--------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| \<ion-input Required\> \</ion-input\> | **Ionic**                | Todos los que pertenezcan a alguna ventana modal están con el campo “Required” | No permite darle al botón de “Guardar” o “Editar” si alguno de los campos está vacío |
|                                       | Ejemplo1\*               |                                                                                |                                                                                      |
| Type=”Number”                         | **Ionic**                | Todos los campos quesean numéricos en formularios html los                                                            | No permite escribir  letras salvo la “e” ya que esta es para determinar un tipo de unidad numérica                                                                   
|                                       | En las ventanas  modales de edición y creación de entidades                                                               |                                                                   |                                                                              |                                                               |
|                                       | Ejemplo1\*               |                                                                                |                                                                      |
| Max y Min Length                      | **Ionic**                | El campo NIF en Clientes solo puede contener 9 caracteres como máximo          | No permite escribir más de 9 caracteres                                              |
| \@NotNull                             | **Spring**               | Casi todos los campos de los modelos implementados en el servidor              | No permite meter datos nulos en la base de datos a través de Spring.                 |
| \@NotEmpty                            | **Spring**               | Campos numéricos en los “entity.models” del servidor                           | No permiten que se inserten datos vacíos en la base de datos a través de Spring      |
| MyErrorController.java                | **Spring**               |                                                                                | Cuando llegues a una ruta inexistente aparecerá un mensaje personalizado             |


>   En las ventanas modales de edición y creación de entidades


>   En las ventanas modales de edición y creación de entidades Ejemplo2\*


>   La notación en Spring no permite que ese campo sea nulo, valido tanto para
>   números como caracteres.


>   Ejemplo3\*


>   La notación en Spring que no permite que ese campo esté vacío, solo vale
>   para campos numéricos


>   Ejemplo3\*


>   Una clase creada para controlar los errores en Spring


>   *Código de ejemplo 1*


![Imgur](https://i.imgur.com/EH1mHeZ.png)


>   *Código de ejemplo 2*


![Imgur](https://i.imgur.com/D56zfO7.png)


>   *Código de ejemplo 3*


![Imgur](https://i.imgur.com/yYAYuCq.png)


>   *9.2.- Tabla con tipos de autenticación.*


| Tipo de autenticación                                                                            | Lugar donde se produce                                                                 | Observaciones                                                                                                                                                                                                                 |
|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Lectura de usuarios y de confirmación de la contraseña encriptada almacenada en la base de datos | En el fichero “login.ts” dentro de la carpeta “login” en la carpeta “pages” Ejemplo1\* | Se ha añadido un “throw” de excepción para salir del For each cuando el usuario se autentique de manera correcta y otra captura de excepción cuando el array de usuarios no está disponible (Cuando el servidor está apagado) |
| Almacenamiento de usuarios y las contraseñas encriptadas en la base de datos                     | En el fichero UserServiceImplement.java Ejemplo2\*                                     | La encriptación se produce una vez la contraseña esté en el servidor y antes de añadirse a la base de datos para prevenir problemas de seguridad si se encriptan desde el cliente.                                            |
| Seguridad por roles añadida a los endpoints                                                      | En el fichero SpringSecurityConfig. Ejemplo3\*                                         |                                                                                                                                                                                                                               |

>   Código de ejemplo 1.


![Imgur](https://i.imgur.com/OW40Zze.png)


>   Código de ejemplo 2.


![Imgur](https://i.imgur.com/oweC57G.png)


>   Código de ejemplo 3.


![Imgur](https://i.imgur.com/4s1fFAc.png)


>   *9.2.- Tipos de navegación.*


>   Tipo de navegación Lugar dónde se produce


>   Formulario/


>   Componente/Clase/Méto do


>   Tab Navigation En la carpeta tabs en los ficheros tabs.html y tabs.ts.


>   Captura de ejemplo 1\*
![Imgur](https://i.imgur.com/fcckrT6.png)

![Imgur](https://i.imgur.com/EJFkm4J.png)
>   Stack Navigation En la carpeta login dentro de login.ts en el método
>   “Createaccount()” dentro de él el método “.push”.


>   Captura de ejemplo2\*
![Imgur](https://i.imgur.com/RbnM5N3.png)
![Imgur](https://i.imgur.com/yoK9dVd.png)
>   Draw Navigation En la carpeta app en app.component.ts y en app.html. Estás
>   clases vienen definidas por defecto al crear el proyecto como un proyecto
>   “Sidemenu project”


>   Captura de ejemplo 3\*

![Imgur](https://i.imgur.com/iZIVlQN.png)

![Imgur](https://i.imgur.com/2Yzb1ai.png)



>   Este tipo de navegación permite de una manera cómoda navegar entre páginas
>   sin tener que desplegar menús y teniendo todo a la vista. Está navegación
>   crea una flecha que permite volver a la página anterior lo cual facilita la
>   interacción entre distintas páginas.


>   Este tipo de navegación permite tener una vista general de todas las páginas
>   del proyecto de manera cómoda.


>   *9.2.- Tabla con las librerías utilizadas.*


| Librería                                                           | Lugar donde se usa Formulario/Componente/Clase/ Método                                                                                                                                       | Uso                                                                                                                                       |
|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| ToastController                                                    | **Ionic** En las ventanas modales, en el login y en algunos controles de errores. Un ejemplo es en el fichero *login/*login.ts el método login                                               | Permite crear notificaciones dentro de la aplicación. Por ejemplo “Login correcto”.                                                       |
| NgForm                                                             | **Ionic** En las ventanas de edición y de añadir. El método (save:NgForm)                                                                                                                    | Permite almacenar los datos del formulario de una manera más sencilla.                                                                    |
| ModalController                                                    | **Ionic** En las ventanas principales de la aplicación, por ejemplo el botón “+” para añadir una entrada a la base de datos.                                                                 | Permite llamar a una ventana modal.                                                                                                       |
| LoadingController                                                  | **Ionic** En el login.ts en el método “showLoading()”                                                                                                                                        | Muestra una pequeña ventana de carga mientras se produce un evento.                                                                       |
| Bcryptjs                                                           | **Ionic** En el login.ts en el método login(registerCredentials). Se importa de manera distinta al ser un módulo de node Primero se instala con npm install bcryptjs y luego se declara así. | Sirve para hashear contraseñas desde el cliente con bcrypt o para comparar dos contraseñas encriptadas y devolver un verdadero o falso    |
| org.springframework.beans.fact ory.annotation                      | **Spring** En los controladores donde se ubican los endpoints                                                                                                                                | Para declarar cuales son los end-points de Post, Get, Put, el Cross Origin                                                                |
| org.springframework.beans.fact ory.annotation.                     | **Spring** En los controladores y los ServiceImplement                                                                                                                                       | Para añadir la notación “Autowired” y resolver la inyección de dependencias                                                               |
| org.springframework.stereotype .Service                            | **Spring** En los serviceImplement                                                                                                                                                           | Para declarar que ese archivo es un servicio                                                                                              |
| javax.persistence.Entity                                           | **Spring** En los ficheros de los modelos                                                                                                                                                    | Para declarar que ese fichero va a ser una entidad (o tabla) de la base de datos.                                                         |
| javax.persistence.Table;                                           | **Spring** En los ficheros de los modelos                                                                                                                                                    | Para referenciar la tabla que se halla en la base de datos.                                                                               |
| org.springframework.context.an notation.Bean                       | **Spring** En el los ficheros de ServiceImplement .                                                                                                                                          | Sirve para almacenar y mantener las clases durante el ciclo de vida del servidor y permite su inyección.                                  |
| org.springframework.security.cr ypto.bcrypt.BCryptPasswordEn coder | **Spring** En el UserService Implement.                                                                                                                                                      | Cuando llegue una petición de añadir usuario pilla la contraseña y primero la encripta. Luego la almacena encriptada en la base de datos. |



>   *10.- Funcionamiento del sistema y especificaciones técnicas*


>   *Manual de uso y requisitos de la aplicación*


>   **Requisitos para instalar la aplicación:**


>   Al ser una aplicación desarrollada en Ionic 3 tiene soporte multiplataforma,
>   podemos instalarla tanto en iOS como Android como Windows Phone, a la hora
>   de compatibilidades Ionic ofrece soporte para versiones antiguas de Android,
>   la versión mínima necesaria en un Smartphone Android depende de la versión
>   de Cordova, en este caso **la aplicación desarrollada ofrece soporte desde
>   la versión 4.4 de Android hasta la versión 8.1.**


>   **Manual de uso:**


### Pantalla de Login


>   Una vez dispongamos de la aplicación instalada, nada más abrirla nos
>   encontraremos una pantalla para loguearnos con “Username” (1) y “Password”
>   (2) , un botón para loguearnos (3) que no se activará hasta que estén
>   rellenos los dos campos anteriores y un botón para crear una nueva cuenta
>   denominado “Create a new account” (4)


![Imgur](https://i.imgur.com/945Wcdx.png)


### Pantalla de registro


![Imgur](https://i.imgur.com/HrjEqF7.png)


![Imgur](https://i.imgur.com/HngDqfF.png)


>   Si le damos a “Create new account” nos abrirá una ventana nueva para
>   registrar un nuevo usuario y acceder a la aplicación, para esta prueba el
>   usuario será “Administrador” y la contraseña “Administrador”, podemos volver
>   atrás sin registrar ningún usuario nuevo tocando la flecha superior
>   izquierda o rellenar los datos y darle a “Save”. Una vez le demos a “Save”
>   volveremos automaticamente a la pantalla de Login y aparecerá que el usuario
>   se ha añadido correctamente.


### Pantalla de inicio (Home)


>   Una vez hayamos iniciado sesión la primera pantalla que aparecerá es el
>   “Home” que nos mostrará una pequeña descripción de la aplicación, arriba a
>   la izquierda encontraremos el botón para abrir el menú lateral que nos
>   mostrará el resto de páginas a las que podremos ir.


![Imgur](https://i.imgur.com/2MNZq89.png)


![Imgur](https://i.imgur.com/i3MJZXG.png)


### Pantalla de entidades (Crear Entidades)


>   Si vamos a “Crear Entidades” nos aparecerá una ventana con pestañas en la
>   parte inferior, con ellas podremos navegar entre las distintas entidades
>   para una gestión hipotecaria.


![Imgur](https://i.imgur.com/7Z4H2hv.png)


![Imgur](https://i.imgur.com/qFa4hDO.png)


### Añadiendo una entrada nueva


>   Para añadir un nuevo registro a cualquiera de las entidades de la aplicación
>   tocaremos el botón “+” situado en la parte superior derecha de la ventana,
>   esto abrirá un formulario en el cual ingresaremos los datos necesarios. A la
>   hora de ingresar el banco se nos mostrará una lista con los bancos
>   disponibles en la aplicación. Una vez rellenemos el formulario nos permitirá
>   guardar, le daremos a “Save” y si hay conexión al servidor se almacenarán
>   los datos.


![Imgur](https://i.imgur.com/RsbSUQ8.png)


![Imgur](https://i.imgur.com/DWquvoU.png)


![Imgur](https://i.imgur.com/oybh9qY.png)


![Imgur](https://i.imgur.com/ktHfgR9.png)


### Editando una entrada


>   Para editar un registro basta con deslizar hacia la izquierda y darle al
>   botón de “Edit” y se abrirá una ventana con el formulario y los datos
>   anteriores, cambiaremos lo que queramos y le daremos a “Save” y nos saldrá
>   un aviso de “Oficina actualizada”


![Imgur](https://i.imgur.com/yUiOeBn.png)


![Imgur](https://i.imgur.com/neOZdYa.png)


![Imgur](https://i.imgur.com/oNYswDz.png)


### Borrar una entrada


>   Para borrar una entrada hay que mantener pulsado la entrada de datos que
>   queramos borrar y aparecerá un mensaje de confirmación de si queremos borrar
>   la entrada y si le damos a “Delete” se borrará la entrada si no tiene otras
>   entradas asignadas a el.


![Imgur](https://i.imgur.com/A4AIAcM.png)


>   *Manual de uso y requisitos del servidor*


>   **Requisitos para iniciar el servidor:**


>   Para correr el servidor necesitamos tener instalado el Eclipse, abrimos el
>   proyecto como un “Spring Proyect” y le daremos a “Run as\>Spring Boot App”.
>   El servidor correrá en el puerto 3448 puesto para evitar colisiones con
>   otros servicios.


>   Para usarlo puedes ver la documentación en el punto [Documentación de la
>   API](#_bookmark30)


![Imgur](https://i.imgur.com/wVBTXQM.png)


>   *Enlaces externos*


### Repositorio de Github


>   <https://github.com/Xxamer/FullStackProject>


### Documentación de la API


>   <https://documenter.getpostman.com/view/4284013/RzfmGnHj>
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2Nzg2OTY1OSwtMTg4MjI4NzYzMiwzNz
ExMTEzLC0xMTMzODE5NzAzLC05MzUyNjY0MCwxMDEzNDk4MTMz
LDIwODgzOTA5MDMsLTIwOTA0NDQwNzgsMTA2NjI4OTAxLC0xMz
A1NDg2NzIwLC0yMjE5MTQ0MjEsLTEyMzc0MjA3OSwxMjIwNTky
OTk0LDEwMzg1MjI5NTYsMTQ0MDMxMzI3LC0xNjUxNjU2NzM3LC
0yMTA5ODI2MzAzLC0zMzkxMDgxMTEsODIwOTMwMjcyLC0xMDA4
NzgxMTk4XX0=
-->
