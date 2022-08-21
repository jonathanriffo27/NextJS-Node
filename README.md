# Este es un proyecto realizado con NextJS y una API local

## Iniciando

Luego de clonar el repositorio, se deben instalar las dependencias de cada aplicacion (WEB y API) con  los siguientes comandos:

```
yarn  
o
npm i 
```

Despues debes crear en la raiz de la API un archivo ".env" con las variables necesarias para la conexion a tu base de datos, de esta forma:

```sh
API_PORT=
DB_USER=
HOST=
DB_NAME=
DB_PASSWORD=
DB_MAX=
DB_MIN=
DB_IDLE=
DB_TIMEOUT=
```

Para arrancar la API debes ejecutar:

```
yarn start
```

Tambien debes crear una tabla en tu base de datos con el nombre "user" y cargar la extension uuid en tu base de datos de esta forma:

``` sql
CREATE EXTENSION "uuid-ossp";

CREATE TABLE "user" (
id uuid NOT NULL default gen_random_uuid (),
rut VARCHAR(12) NOT NULL, 
name VARCHAR(50) NOT NULL, 
paternalLastName VARCHAR(25) NOT NULL, 
maternalLastName VARCHAR(25) NOT NULL, 
email VARCHAR(50) NOT NULL, 
phone VARCHAR(50) NOT NULL, 
hash VARCHAR(100),
isActive BOOLEAN default true,
urlPhoto VARCHAR(50),
grade VARCHAR(50)
);
```

Para iniciar la WEB debes ejecutar:

```
yarn dev
```

Para registrar los nuevos usuarios debes hacer un get al siguiente endpoint con la informacion necesaria enviada por body.


```
<localhost>/api/user/create

{   
   "rut": "",
    "name": "",
    "paternalLastName": "",
    "maternalLastName": "",
    "email": "",
    "phone": "",
    "hash": 0,
    "urlPhoto": "",
    "grade": ""
}
```

Para asignar las constraseñas debe hacer un put al siguiente endpoint con el id respectivo y la constraseña enviadas por body:

```
<localhost>/api/user/assignPassword

{
    "id": "",
    "password": ""
}
```