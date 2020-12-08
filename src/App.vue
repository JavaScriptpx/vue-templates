<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>||
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  margin-top: 30px;
}
</style>
