<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">500</h1>
            <h4 class="pt-3">Houston, we have a problem!</h4>
            <p class="text-muted">The page you are looking for is temporarily unavailable.</p>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'Error500'
  };
</script>

<style lang="scss">
  @import 'src/assets/scss/index';
</style>
