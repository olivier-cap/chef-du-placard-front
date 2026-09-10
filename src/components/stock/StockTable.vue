<script setup lang="ts">
import type { StockLine } from '@/models/stockModels';
import { useStockStore } from '@/stores/useStockStore';
import { storeToRefs } from 'pinia';
import { type QTableColumn } from 'quasar';
import { onMounted } from 'vue';

const store = useStockStore();

onMounted(async () => {
  await store.getStockUser(1);
});

const columns: QTableColumn<StockLine>[] = [
  {
    name: 'alimentName',
    label: 'Aliment',
    field: 'alimentName',
    align: 'left',
    sortable: true,
  },
  {
    name: 'quantity',
    label: 'Quantité',
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

const { stockLines } = storeToRefs(store);
</script>

<template>
  <div>
    <q-table
      v-if="stockLines"
      :rows="stockLines"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body="props">
        <q-tr :props="props">

          <!-- Aliment -->
          <q-td key="alimentName" :props="props">
    <q-icon name="looks" />
                {{ props.row.alimentName }}
          </q-td>

          <!-- Quantité -->
          <q-td key="quantity" :props="props">
            {{ props.row.quantity }}

            <q-popup-edit
              v-model="props.row.quantity"
              title="Modifier la quantité"
              auto-save
              v-slot="scope"
            >
              <q-input
                v-model.number="scope.value"
                type="number"
                dense
                autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
          </q-td>

          <!-- Unité -->
          <q-td key="unitSymbol" :props="props">
            {{ props.row.unitSymbol }}
          </q-td>

        </q-tr>
      </template>
    </q-table>
  </div>
</template>
