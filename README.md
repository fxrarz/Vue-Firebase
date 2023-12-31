# Vue-Firebase

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Installation

```sh
npm create vue@latest
```

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Firebase Configuration

```sh
npm install firebase
```

### CLI

```sh
npm install -g firebase-tools
```

### Login

```sh
firebase login
firebase init
```

### Emulator

```sh
firebase init emulators
firebase emulators:start
```

## Firebase Hosting
### firebase.json

```sh
{

  "hosting": {

    "site": "vuejs-firebase-web",

    "public": "public",

    ...

  }

}
```

### Hosting

```sh
firebase deploy --only hosting:vuejs-firebase-web
```
