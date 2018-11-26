<template>
  <div class="popup" v-bind:style="{ display: show ? 'block' : 'none' }">
    <div class="overlay" @click="closeCallback()"></div>
    <div class="popup_content">
      <slot></slot>
      <button title="Close" class="close_popup" @click="closeCallback()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    show: Boolean,
    customClass: String,
    closeCallback: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
}

.popup .overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 995;
  background: rgba(0,0,0,0.85);
}

.popup .popup_content {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90%;
  overflow: auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.7);
  text-align: center;
  border-radius: 4px;
  width: 520px; /* This just a default width */
}

.popup .popup_content > h2 {
  font-size: 28px;
  font-weight: 200;
  margin: 20px 0 40px;
  text-align: center;
}

.popup .popup_content .buttons_wrapper {
  padding: 20px;
}

.popup .close_popup {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.5;
  background: none;
  border: none;
  transition: opacity 0.2s ease;
}

.popup .close_popup:hover {
  opacity: 0.9;
}
</style>
