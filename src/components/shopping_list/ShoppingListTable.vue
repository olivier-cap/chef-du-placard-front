<script setup lang="ts">
import type { ShoppingListLineSummaryModel } from '@/models/shoppingListModel';
import { useShoppingListStore } from '@/stores/useShoppingListStore';
import { storeToRefs } from 'pinia';
//import { useUserStore } from '@/stores/useUserStore';
//import { storeToRefs } from 'pinia';
import {type QTableColumn } from 'quasar';


const shoppingStore = useShoppingListStore()
const {shoppingList} = storeToRefs(shoppingStore)

//const { shoppingList } = defineProps<{
//    shoppingList: ShoppingListSummaryModel
//}>()



const columns: QTableColumn<ShoppingListLineSummaryModel>[] = [
  {
    name: 'alimentName',
    label: 'Aliment',
    field: 'alimentName',
    align: 'left',
    sortable: true,
  },
  {
    name: 'quantity',
    label: 'Quantité à acheter',
    field: 'quantity',
    align: 'right',
    sortable: true,
  },
  {
    name: 'unitSymbol',
    label: 'Unité',
    field: 'unitSymbol',
    align: 'left',
  }
];

</script>


<template>
<div>
        <q-table
        v-if="shoppingList"
        :rows="shoppingList.shoppingListLines"
        :columns="columns"
        row-key="id"
        >
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="alimentName" :props="props">
                    {{ props.row.alimentName }}
                </q-td>

                <q-td key="quantity" :props="props">
                    {{ props.row.quantity }}
                </q-td>

                <q-td key="unitSymbol" :props="props">
                    {{ props.row.unitSymbol }}
                </q-td>

            </q-tr>
        </template>
        </q-table>
    </div>

</template>