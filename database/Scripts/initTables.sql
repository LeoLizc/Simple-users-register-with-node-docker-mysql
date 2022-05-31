CREATE TABLE Usuario(
  id Int AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(50) not null,
  clave VARCHAR(20) not null,
  nrc CHAR(4) not null
);