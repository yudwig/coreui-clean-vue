<template>
  <div>
    <div class="body-header"></div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">CoreUI Clean Vue</h1>
        <p class="lead">
          A Sample implementation for Single Page Application using CoreUI 3, Bootstrap 4, Vue.js, TypeScript, SCSS and Webpack. <br>
        </p>
        <h5>Features</h5>
        <ul>
          <li>Build by Webpack. Not using Vue CLI.</li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="card">
            <div class="card-header">Card sample</div>
            <div class="card-body">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
              ex ea commodo consequat.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default Vue.extend({
    created() {
      this.debug("created is called.");
    }
  });
</script>
