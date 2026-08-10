<script setup lang="ts">
import { Button } from '@/components/ui/button';
import {NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput} from '@/components/ui/number-field/';
import MenuCookable from '@/features/menus/components/MenuCookable.vue';
import { useCookableMenu } from '@/features/menus/composables/useCookableMenu';
import { onMounted, ref } from 'vue';
import { Label } from '@/components/ui/label';

const nbPeople = ref(1)
const nbMeal = ref(1)

const {
    findCookableMenus,
} = useCookableMenu ()


onMounted(async () => findCookableMenus(1,1,"stock principal"))

async function handleSearchMenu() {
    await findCookableMenus(nbPeople.value, nbMeal.value, "stock principal")
}

</script>


<template>

<NumberField id="nbPeople" :min="0" v-model="nbPeople">
    <Label for="nbPeople">Nombre de personnes</Label>
    <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
    </NumberFieldContent>
</NumberField>

<NumberField id="nbMeal" :min="1" v-model="nbMeal">
    <Label for="nbMeal">Nombre de repas à préparer</Label>
    <NumberFieldContent>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
    </NumberFieldContent>
</NumberField>

<Button variant="outline"
@click="handleSearchMenu">
    Rechercher
</Button>

<MenuCookable />
    
</template>