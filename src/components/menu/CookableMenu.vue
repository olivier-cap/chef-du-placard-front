<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore';
import { Duration } from 'luxon';
import { storeToRefs } from 'pinia';


const store = useMenuStore();
const { cookableMenus } = storeToRefs(store);

</script>

<template>
    Recettes trouvées:

    <q-card  v-for="recipe in cookableMenus?.recipes" :key="recipe.id">
        <q-card-section>
            {{ recipe.name }}
        </q-card-section>
        <q-card-section>
            durée : {{ Duration.fromISO(recipe.duration).toHuman() }}
            difficulté : {{ recipe.difficulty }}
        </q-card-section>
    </q-card>


</template>