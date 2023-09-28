### Boilerplate React VTEX IO

Este projeto serve como base para a criação de novos apps React VTEX IO.

### Executando o projeto

Para executar o projeto, e compilar o sass, basta executar os comandos abaixo:

```sh
$ yarn sass
```

### Deploy

Para fazer o deploy do app, basta executar os comandos abaixo:

```sh
$ vtex login VENDOR_NAME
$ yarn sass
$ vtex release patch stable
$ vtex publish
```

Depois de publicar a versão será necessário instalar o app no ambiente master.

```sh
$ vtex use master
$ vtex install VENDOR_NAME.boilerplate-react-vtex@0.x
```
