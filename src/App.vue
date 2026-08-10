<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
<nav class="flex gap-4 p-4">
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/stock">
        Stock
    </RouterLink>
    <RouterLink to="/recipes">
        Recettes
    </RouterLink>
    <RouterLink to="/aliments">
        Aliments
    </RouterLink>
    <RouterLink to="/menus">
        Menus
    </RouterLink>
</nav>
<RouterView />


</template>



