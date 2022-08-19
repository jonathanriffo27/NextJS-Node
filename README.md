# Este es un proyecto realizado con NextJS y una APi local

## Iniciando

Para iniciar el proyecto debes crear un tu raiz un archivo .env con la variable necesarias para la conexion a la base de datos, de esta forma:

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

Y tambien debes crear una tabla en tu base de datos con el nombre "user" y cargar la extension pgcrypto en tu base de datos de esta forma:

``` sql
CREATE EXTENSION pgcrypto;

CREATE TABLE "user" (
id uuid NOT NULL default gen_random_uuid (),
rut VARCHAR(12) NOT NULL, 
name VARCHAR(50) NOT NULL, 
paternalLastName VARCHAR(25) NOT NULL, 
maternalLastName VARCHAR(25) NOT NULL, 
email VARCHAR(50) NOT NULL, 
phone VARCHAR(50) NOT NULL, 
hash VARCHAR(50)
);
```

Finalmente cada ves que accedas a tu tabla desde la api debes nombrarla asi: "public.user".