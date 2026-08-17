<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { Duration } from 'luxon'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import { useRecipeStore } from '@/stores/useRecipeStore'

const route = useRoute()
const router = useRouter()
const store = useRecipeStore()

const { recipe } = storeToRefs(store)

const recipeId = Number(route.params.id)

const formattedDuration = computed(() => {
  if (!recipe.value?.duration) {
    return 'Durée non renseignée'
  }

  return Duration
    .fromISO(recipe.value.duration)
    .toHuman({ maximumFractionDigits: 0 })
})

onMounted(() => {
  void store.loadRecipe(recipeId)
})

function goBack(): void {
  void router.push('/recipes/recipesList')
}
</script>

<template>
  <q-page padding>
    <div class="q-mx-auto recipe-page">
      <q-btn
        flat
        no-caps
        color="primary"
        icon="arrow_back"
        label="Retour aux recettes"
        class="q-mb-lg"
        @click="goBack"
      />

      <template v-if="recipe">
        <header class="q-mb-xl">
          <div class="row items-start justify-between q-col-gutter-md">
            <div class="col-12 col-md">
              <h1 class="text-h3 text-weight-bold q-my-none">
                {{ recipe.name }}
              </h1>

              <div class="row items-center q-gutter-lg q-mt-md text-grey-8">
                <div class="row items-center q-gutter-xs">
                  <q-icon
                    name="schedule"
                    size="20px"
                    color="primary"
                  />

                  <span>{{ formattedDuration }}</span>
                </div>

                <div class="row items-center q-gutter-xs">
                  <q-icon
                    name="bar_chart"
                    size="20px"
                    color="primary"
                  />

                  <span>
                    Difficulté :
                    {{ recipe.difficulty || 'non renseignée' }}
                  </span>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-auto">
              <q-btn
                color="primary"
                icon="restaurant"
                label="J’ai réalisé cette recette"
                no-caps
              />
            </div>
          </div>
        </header>

        <div class="row q-col-gutter-lg">
          <section class="col-12 col-md-8">
            <q-card
              flat
              bordered
              class="full-height"
            >
              <q-card-section class="row items-center q-gutter-sm">
                <q-icon
                  name="menu_book"
                  color="primary"
                  size="24px"
                />

                <h2 class="text-h5 text-weight-medium q-my-none">
                  Préparation
                </h2>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <p class="instructions text-body1 q-my-none">
                  {{ recipe.instructions }}
                </p>
              </q-card-section>
            </q-card>
          </section>

          <aside class="col-12 col-md-4 order-first order-md-last">
            <q-card
              flat
              bordered
            >
              <q-card-section class="row items-center q-gutter-sm">
                <q-icon
                  name="shopping_basket"
                  color="primary"
                  size="24px"
                />

                <h2 class="text-h5 text-weight-medium q-my-none">
                  Ingrédients
                </h2>
              </q-card-section>

              <q-separator />

              <q-list separator>
                <q-item
                  v-for="ingredient in recipe.ingredients"
                  :key="ingredient.id"
                >
                  <q-item-section avatar>
                    <q-avatar
                      color="green-1"
                      text-color="green-9"
                      icon="check"
                      size="32px"
                    />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>
                      {{ ingredient.aliment.name }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-item-label class="text-weight-medium">
                      {{ ingredient.quantity }}
                      {{ ingredient.unit.symbol }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </aside>
        </div>
      </template>

      <div
        v-else
        class="column items-center justify-center q-py-xl"
      >
        <q-spinner
          color="primary"
          size="48px"
        />

        <p class="text-grey-7 q-mt-md">
          Chargement de la recette…
        </p>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.recipe-page {
  width: 100%;
  max-width: 1200px;
}

.instructions {
  line-height: 1.8;
  white-space: pre-line;
}
</style>