<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore';
import { ref } from 'vue';


const store = useMenuStore();
const nbPeople = ref(1)
const nbMeal = ref(1)

async function handleSearchMenu() {
    await store.findCookableMenus(nbPeople.value, nbMeal.value, 1)
}
</script>

<template>
NbPersonnes
<q-input
  v-model.number="nbPeople"
  type="number"
  outlined
  dense
/>

NbRepas
<q-input
  v-model.number="nbMeal"
  type="number"
  outlined
  dense
/>

<q-btn
@click="handleSearchMenu">
    Recherche
</q-btn>

</template>