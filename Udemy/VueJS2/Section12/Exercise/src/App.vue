<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-on:click="click">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'myon':{
          bind(el, binding, vnode){
            if (!binding.arg){
              binding.arg = "click";
            }
            el.addEventListener(binding.arg, binding.value);
          }
        }
      },
      methods: {
        click(){
          console.log('click');
        }
      }
    }
</script>

<style>
</style>
