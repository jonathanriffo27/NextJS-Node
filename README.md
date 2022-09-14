# Este es un proyecto realizado con NextJS y una API local

## Iniciando

Luego de clonar el repositorio, se deben instalar las dependencias de cada aplicacion (WEB y API) con los siguientes comandos:

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
API_KEY=
SECRET=
```

Para arrancar la API debes ejecutar:

```
yarn start
```

Tambien debes crear estas tablas en tu base de datos con los nombre "user", "grade", "region", "district" y cargar la extension uuid en tu base de datos de esta forma:

```sql
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
urlPhoto VARCHAR(300),
address VARCHAR(50),
region_id uuid,
district_id uuid,
grade_id uuid,
);

CREATE TABLE region (
id uuid NOT NULL default gen_random_uuid (),
number VARCHAR(12) NOT NULL,
name VARCHAR(50) NOT NULL
);

CREATE TABLE district (
id uuid NOT NULL default gen_random_uuid (),
region_id uuid,
name VARCHAR(50) NOT NULL
);

CREATE TABLE grade (
id uuid NOT NULL default gen_random_uuid (),
name VARCHAR(50) NOT NULL,
isActive BOOLEAN default true
);
```

Para iniciar la WEB debes ejecutar:

```
yarn start
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
    "urlPhoto": "",
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
