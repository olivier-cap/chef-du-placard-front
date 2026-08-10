<script setup lang="ts">
import { useCookableMenu } from '../composables/useCookableMenu';
import { Duration } from 'luxon';
import { Card, CardTitle, CardContent } from '@/components/ui/card';


const {
    cookableMenus,
} = useCookableMenu ()



</script>


<template>
Recettes trouvées:

    <Card v-for="recipe in cookableMenus?.recipes">
        <CardTitle>
            {{ recipe.recipeName }}
        </CardTitle>
        <CardContent>
            durée : {{ Duration.fromISO(recipe.duration).toHuman() }}
            difficulté : {{ recipe.difficulty }}
        </CardContent>
    </Card>

</template>