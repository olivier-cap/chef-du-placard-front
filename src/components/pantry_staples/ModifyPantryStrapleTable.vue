<script setup lang="ts">
import type { PanstryStapleStateLineModel, PantryStapleStateModel } from '@/models/pantryStaplesModel';
import { usePantryStaplesStore } from '@/stores/usePantryStapleStore';
import { useUserStore } from '@/stores/useUserStore';
import { storeToRefs } from 'pinia';
import { type QTableColumn } from 'quasar';
import { onMounted, ref } from 'vue';


const userStore = useUserStore();
const pantryStaplesStore = usePantryStaplesStore()

const {stockId, pantryStapleId} = storeToRefs(userStore);

const pantryStaplesState = ref<PantryStapleStateModel>()

onMounted(
    async () => pantryStaplesState.value = await pantryStaplesStore.getPantryStaplesState(
        stockId.value,
        pantryStapleId.value
    )
)

const columns: QTableColumn<PanstryStapleStateLineModel>[] = [
  {
    name: 'alimentName',
    label: 'Aliment',
    field: 'alimentName',
    align: 'left',
    sortable: true,
  },
  {
    name: 'actualQuantity',
    label: 'Quantité du stock',
    field: 'actualQuantity',
    align: 'right',
    sortable: true,
  },
  {
    name: 'unitCode',
    label: 'Unité',
    field: 'unitCode',
    align: 'left',
  },
  {
    name: 'isSufficient',
    label: 'Etat du Stock',
    field: 'isSufficient',
    sortable: true
  }
];

</script>


<template>
    <div>
        <q-table
        v-if="pantryStaplesState"
        :rows="pantryStaplesState.lines"
        :columns="columns"
        row-key="id"
        >
        <template v-slot:body="props">
            <q-tr :props="props">
                <q-td key="alimentName" :props="props">
                    {{ props.row.alimentName }}
                </q-td>

                <q-td key="actualQuantity" :props="props">
                    {{ props.row.actualQuantity }}
                </q-td>

                <q-td key="unitCode" :props="props">
                    {{ props.row.unitCode }}
                </q-td>

                <q-td key="isSufficient" :props="props">
                    <q-icon 
                    v-if="props.row.isSufficient" name="check_circle"/>
                    <q-icon 
                    v-if="!props.row.isSufficient" name="cancel"/>
                </q-td>

            </q-tr>
        </template>
        </q-table>
    </div>

</template>