const apiKey = "Hola";

("http://localhost:3001/api/user/getAll");
("http://localhost:3001/api/user/getById/:id");
("http://localhost:3001/api/user/create");
("http://localhost:3001/api/user/update/:id");
("http://localhost:3001/api/user/delete/:id");
("http://localhost:3001/api/user/validate");
("http://localhost:3001/api/user/list");
("http://localhost:3001/api/user/assignPassword");
("http://localhost:3001/api/user/assignGenericPassword");
("http://localhost:3001/api/user/getByEmail");
("http://localhost:3001/api/user/assignNewPassword");

("http://localhost:3001/api/grade/getAll");
("http://localhost:3001/api/grade/create");
("http://localhost:3001/api/grade/update/:id");
("http://localhost:3001/api/grade/delete/:id");

("http://localhost:3001/api/region/getAll");

("http://localhost:3001/api/district/getAll");
("http://localhost:3001/api/district/getByRegionId/:id");

("http://localhost:3002/api/email/send");

export default apiKey;
