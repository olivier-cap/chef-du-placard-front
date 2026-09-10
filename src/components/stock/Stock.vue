<script setup lang="ts">
import { useStockStore } from '@/stores/useStockStore';
import { storeToRefs } from 'pinia';

const store = useStockStore();
const { stockLines } = storeToRefs(store);
</script>

<template>
  <q-page class="q-pa-md">
    <h1 class="text-h5 text-weight-bold q-mb-lg">Mon Stock</h1>

    <div class="row q-col-gutter-md">
      <div
        v-for="aliment in stockLines"
        :key="aliment.id"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
      >
        <q-card bordered class="stock-card">
          <q-img
            src="/banane.jpg"
            :ratio="1"
            fit="contain"
            class="stock-image"
            spinner-color="primary"
            style="height: 160px"
          >
            <template #error>
              <div class="absolute-full flex flex-center bg-grey-3 text-negative">
                <q-icon name="error" size="xl" />
              </div>
            </template>
          </q-img>

          <q-card-section>
            <div class="row items-start justify-between no-wrap">
              <div class="col q-pr-sm">
                <div class="text-subtitle1 text-weight-bold ellipsis">
                  {{ aliment.alimentName }}
                </div>

                <div class="text-caption text-grey-7 q-mt-xs">
                  {{ aliment.unitSymbol }}
                </div>
              </div>

              <q-chip
                color="primary"
                text-color="white"
                icon="inventory_2"
                dense
              >
                {{ aliment.quantity }}
              </q-chip>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.stock-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stock-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgb(0 0 0 / 12%);
}

.stock-image {
  background-color: #f5f5f5;
}
</style>