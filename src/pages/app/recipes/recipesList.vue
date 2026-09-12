<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import RecipesGrid from '@/components/recipe/RecipesGrid.vue'
import { useRecipeStore } from '@/stores/useRecipeStore'

const store = useRecipeStore()
const router = useRouter()

const { recipesSummary } = storeToRefs(store)

onMounted(() => {
  void store.loadRecipesSummary()
})

function openCreateRecipe(): void {
  void router.push('/recipes/new')
}
</script>

<template>
  <q-page padding>
    <div class="q-mx-auto page-content">
      <header class="row items-start justify-between q-mb-xl">
        <div>
          <h1 class="text-h4 text-weight-bold q-my-none">
            Toutes les recettes
          </h1>

          <p class="text-grey-7 q-mt-sm q-mb-none">
            Découvrez l’ensemble des recettes disponibles.
          </p>
        </div>

        <q-btn
          color="primary"
          icon="add"
          label="Nouvelle recette"
          no-caps
          @click="openCreateRecipe"
        />
      </header>

      <div
        v-if="recipesSummary.length === 0"
        class="column items-center q-py-xl text-center"
      >
        <q-icon
          name="menu_book"
          size="64px"
          color="grey-5"
        />

        <div class="text-h6 q-mt-md">
          Aucune recette enregistrée
        </div>

      </div>

      <template v-else>
        <div class="text-grey-7 q-mb-md">
          {{ recipesSummary.length }}
          {{ recipesSummary.length === 1
            ? 'recette disponible'
            : 'recettes disponibles'
          }}
        </div>

        <RecipesGrid :recipes="recipesSummary" />
      </template>
    </div>
  </q-page>
</template>

<style scoped>
.page-content {
  width: 100%;
  max-width: 1400px;
}
</style>