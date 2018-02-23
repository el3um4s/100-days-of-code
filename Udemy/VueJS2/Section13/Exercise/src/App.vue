<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase }}</p>
                <p>{{ text | to-lowercase }}</p>
                <p>{{ text | to-lowercase | toUppercase }}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFuits">{{ fruit }}</li>
                </ul>
                <hr>
                <appList></appList>
            </div>
        </div>
    </div>
</template>

<script>
  import List from './List.vue';
  import { fruitMixin } from './fruitMixin';

    export default {
      mixins: [fruitMixin],
      data(){
        return {
          text: 'Hello There!',
          fruits: ['Mela', 'Banana', 'Mango', 'Melone']
        }
      },
      components: {
        appList: List
      },
      filters: {
         toUppercase(value) {
           return value.toUpperCase();
         }
      }
    }
</script>

<style>

</style>
