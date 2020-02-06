<template>
  <div class="container">
    <button type="button" @click="clicked">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
           x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve">
      <g>
        <polygon
          class="st0"
          points="512,52.535 459.467,0.002 256.002,203.462 52.538,0.002 0,52.535 203.47,256.005 0,459.465
                  52.533,511.998 256.002,308.527 459.467,511.998 512,459.475 308.536,256.005"/>
      </g>
    </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: "CloseButtonAtom",
    methods: {
      clicked() {
        this.$emit('closeButtonClicked');
      }
    }
  }
</script>

<style scoped>
  button {
    border: none;
    opacity: 0.8;
    background-color: transparent;
  }
  svg {
    width: 16px;
    height: 16px;
    opacity: 1.0;
  }
  .container {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>