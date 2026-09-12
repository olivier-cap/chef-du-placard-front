<script setup lang="ts">
import { useMenuStore } from '@/stores/useMenuStore';
import { useShoppingListStore } from '@/stores/useShoppingListStore';
import { useUserStore } from '@/stores/useUserStore';
import { Duration } from 'luxon';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const store = useMenuStore();
const userStore = useUserStore()
const { cookableMenus } = storeToRefs(store);
const {userId, stockId, pantryStapleId} = storeToRefs(userStore);
const shoppingStore = useShoppingListStore();

const menuName = ref("menu name")
const newMenuId = ref();

async function handleSaveMenu() {
    if (userId.value && cookableMenus.value) {
        newMenuId.value = await store.saveNewMenu(
            userId.value,
            menuName.value,
            cookableMenus.value
        )
    }
}

const router = useRouter()


async function handleSAveAndShoppingList() {
    await handleSaveMenu();

    console.log(newMenuId.value)
    if(userId.value && stockId.value && pantryStapleId.value
    ) {
    await shoppingStore.shoppingListFromMenu(
            userId.value,
            newMenuId.value.newMenuId,
            stockId.value,
            pantryStapleId.value
    )
    
    void router.push('/app/shopping_list/shoppinglist')
    }
}

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

    <div v-if="!cookableMenus?.covered">
        <div>
            Stock insuffisant, recettes proposées :
        </div>
            <q-card  v-for="recipe in cookableMenus?.proposal" :key="recipe.id">
        <q-card-section>
            {{ recipe.name }}
        </q-card-section>
        <q-card-section>
            durée : {{ Duration.fromISO(recipe.duration).toHuman() }}
            difficulté : {{ recipe.difficulty }}
        </q-card-section>
    </q-card>
    </div>


    <q-btn @click="handleSaveMenu">sauvegarder nouveau menu</q-btn>
    <q-btn v-if="cookableMenus?.proposal.length && cookableMenus.proposal.length > 0" @click="handleSAveAndShoppingList">sauvegarder & liste nouveau menu</q-btn>

</template>