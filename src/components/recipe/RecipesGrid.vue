<script setup lang="ts">
import type { RecipeSummaryModel } from '@/models/recipeModels';
import { Duration } from 'luxon';
import { useRouter } from 'vue-router'

const {recipes} = defineProps<{
  recipes: RecipeSummaryModel[]
}>()

const router = useRouter()

function openRecipe(id: number): void {
  void router.push({
    name: '/app/recipes/[id]',
    params: { id }
  })
}
</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
    <q-card
      v-for="recipe in recipes"
      :key="recipe.id"
      class="cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
      role="link"
      tabindex="0"
      @click="openRecipe(recipe.id)"
      @keyup.enter="openRecipe(recipe.id)"
    >
      <q-card-section>
        <div class="text-h6">
          {{ recipe.name }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section class="row items-center q-gutter-md text-grey-8">
        <div class="row items-center q-gutter-xs">
          <q-icon name="schedule" size="18px" />
          <span>{{ Duration.fromISO(recipe.duration).toHuman() }} </span>
        </div>

        <div class="row items-center q-gutter-xs">
          <q-icon name="bar_chart" size="18px" />
          <span>{{ recipe.difficulty }}</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>