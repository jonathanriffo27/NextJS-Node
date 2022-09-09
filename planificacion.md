# Planificacion Gantt - Mantenedor de Cargos

## Front

- Crear pagina Grade con el contenido del mantenedor (0.75 hrs)
  - Title
  - Search
  - Table
  - Buttons
- Implementar modal de registro, edicion y eliminacion de cargo (0.5 hrs)
- Llenar la tabla con el listado de cargos al cargar la pagina (0.5 hrs)
- Considerar cargo en el dispatch de registro de usuario (0.25 hrs)
- Desplegar cargo del usuario a modificar (0.5 hrs)

**Tiempo total : 2.5 hrs**

## Redux

- Crear slice para cargo: gradeSlice (0.5 hrs)
  - listGrade
  - setGradeList
  - setGrade
- Modificar slice de usuario considenado el cargo seleccionado: userSlice (0.5 hrs)

  - listUsers
  - setUserList
  - setUser

**Tiempo total : 1 hr**

## API

- Crear endpoint para listar los cargos (1 hr)
  - models/grade: getAllModel, createModel, updateModel, deleteModel
  - controllers/grade: getAllController, createController, updateController, deleteController
  - route:(get) /grade/getAll
  - route:(post) /grade/create
  - route:(put) /grade/update
  - route:(delete) /grade/delete
- Modificar endpoint de registro de usuario para registrar cargo (0.5 hrs)
  - createModel
  - updateModel
- Modificar endpoint para rescatar la información de un usuario incluyendo cargo (0.5 hrs)
  - getAllModel (left outer join)
  - getByIdModel (left outer join)
  - getByEmailModel (left outer join)

**Tiempo total : 2 hrs**

## Base de datos

- Crear tabla grade (id, name) (0.25 hrs)
- Agregar campo grade_id a tabla user (0.25 hrs)

**Tiempo total : 0.5 hrs**

---

**Tiempo total mantenedor de cargos : 6 hrs**
