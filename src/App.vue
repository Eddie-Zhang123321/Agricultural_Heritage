<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}

nav {
    margin-bottom: 30px;
}

a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
    text-decoration: none;
}

a.router-link-exact-active {
    color: #42b983;
}
</style>