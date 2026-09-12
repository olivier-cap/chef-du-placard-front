<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useMenuStore();
const nbPeople = ref(1)
const nbMeal = ref(1)

async function handleSearchMenu() {
  console.log('CLICK');

  try {
    const result = await store.findCookableMenus(
      nbPeople.value,
      nbMeal.value,
      1
    );

    console.log('BACKEND RESULT:', result);
    console.log('AVANT NAVIGATION');
    console.log('ROUTE ACTUELLE:', router.currentRoute.value.fullPath);

    await router.push('/app/menu/calculatedmenu');

    console.log('APRES NAVIGATION');
  } catch (error) {
    console.error('ERREUR:', error);
  }
}
</script>

<template>
  <q-page>
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
</q-page>
</template>