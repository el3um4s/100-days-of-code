<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Built-in Directives</h1>
      <p v-text="'Some Text'"></p>
      <p v-html="'<strong>Some strong text</strong>'"></p>
    </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Custom Directives</h1>
      <p v-highlight:background="'black'" v-highlight="'green'">Color this</p>
      <p v-highlight:background.delayed="'black'" v-highlight="'green'">Color this</p>
      <p v-local-higlight:background="'red'" v-local-higlight="'yellow'">Color this</p>
      <p v-local-higlight:background.delayed.blink="'yellow'" v-local-higlight.blink="'white'">Color this</p>
      <p v-compless-highlight:background.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Compless blink</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  directives: {
    'local-higlight': {
      bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;
        let delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value;
          let secondColor = 'blue';
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(()=>{
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);

        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    },
    'compless-highlight': {
      bind(el, binding, vnode) {
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;
        let delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(()=>{
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);

        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
}
</script>

<style>

</style>
