
# Formulario de contacto
>Practicando Express y MongoDB

## Enunciado
Construir una app que consiste en un formulario web de contacto accesible desde la URL http://localhost/. El formulario se debe visualizar utilizando bootstrap y la información se debe enviar hacia una api. Se debe poder consultar el listado de mensajes<sup>*</sup> en la ruta http://localhost/api/messages/

<sup>*</sup> No tiene que hacer la vista de la lista de mensajes, si lo desean está bien.

## Campos
- Nombre<sup>*</sup> (texto)
- Teléfono (numérico)
- Correo<sup>*</sup> (email)
- País. Campo seleccionable con 3 opciones:
  - Colombia
  - USA
  - Canadá
- Mensaje<sup>*</sup> (textarea)

<sup>*</sup> Obligatorios tanto en el frontend como en el backend. Si falta alguno de estos campos se debe mostrar un mensaje de error.

## Diseño sugerido
![Diseño Sugerido](https://s3.amazonaws.com/makeitreal/images/classroom-prod/c786d483fe65ca3c876af4028c7f9cbd.png "Diseño Sugerido")

# MongoDB (Atlas)

## Configuración

### Archivo
/config/storage.js

### Parámetros
|Atributo|Descripción|
|--|--|
|host|IP o URL del servidor|
|name|Nombre de la base de datos|
|user - name|Nombre del usuario|
|user - pass|Contraseña del usuario|

## Colecciones

### messages

|Atributo|Tipo|Obligatorio|Descripción|
|--|--|--|--|
|name|string|Si|Nombre|
|email|string|Si|Correo electrónico|
|phone|int|No|Teléfono (Celular)|
|country|string|No|País|
|text|string|Si|Mensaje|

## API

### Mensajes

| Endpoint | Método | Descripción |
| - | - | - | - |
| /api/messages | GET | Listar mensajes |
| /api/messages | POST | Crear mensaje |