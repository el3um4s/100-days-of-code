<template>
  <div class="row">
    <form>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label>Quote</label>
        <textarea class="form-control" row="3" v-model="quote"></textarea>
      </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
              <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      quote: ''
    }
  },
  methods: {
    createNew(){
      
    }
  }
}
</script>

<style>
</style>
