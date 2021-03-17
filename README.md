```
docker-compose up -d
```

```
docker-compose stop
```

```
docker-compose start
```



## Realm

Un real es un proyecto

Un proyecto es un sistema de logeo para clientes

Los clientes son las aplicaciones

(2 proyectos)

este realm se llamara demo-real -> y se encuentra habilitado

roles para realm:

- real-admin (realice un rol compuesto con el backend1)
- real-user





## Cliente 

### Backend1

se crea un cliente que se llama demo-backend

tipo de acceso -> bearer-only

se agregan dos roles(roles a nivel de cliente):

- backend-user
- backend-admin



### Frontend1

se crea un cliente que se llama demo-frontend

valid redirect: http://localhost:4200/*



## Usuarios

se crea un usuario de nombre admin -> pass es admin

se crea un usuario de nombre user -> pass es user



------

Se creo un proyecto spring boot

Packing Jar

Java 11

------

#### Agregando dependencias al backend creado con spring

https://www.keycloak.org/docs/latest/securing_apps/index.html

securiting-aplications



------

### keycloak en angular 

Existe una libreria que se llama angular keycloak, pero se usuara angular oauth2

https://github.com/manfredsteyer/angular-oauth2-oidc

https://manfredsteyer.github.io/angular-oauth2-oidc/docs/injectables/OAuthService.html

```
npm i angular-oauth2-oidc --save
```

Implementacion:

https://manfredsteyer.github.io/angular-oauth2-oidc/docs/index.html