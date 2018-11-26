<template>
  <div id="app">
    <button class="popup_opener" v-on:click="togglePopup()">
      Click Me! I Don't Bite... <span role="img" aria-label="emoji">😛</span>
    </button>

    <Popup
      v-bind:show="show"
      v-bind="{ closeCallback: togglePopup}"
    >
      <h2>Told Ya!</h2>
      <iframe title="giphy" src="https://giphy.com/embed/l52CGyJ4LZPa0" width="480" height="273" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sandler-sentences-sounding-l52CGyJ4LZPa0">via GIPHY</a></p>
    </Popup>
  </div>
</template>

<script>
import Popup from './components/Popup.vue'

export default {
  name: 'app',
  components: {
    Popup
  },
  data: () => ({
    show: false
  }),
  methods: {
    togglePopup: function() {
      this.show = !this.show;
    }
  }
}
</script>

<style>
*:focus {
  outline: 0;
}
body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-image: linear-gradient(120deg, #f1c40f 0%, #f1870f 100%);
}
.popup_opener {
  background: #3498db;
  padding: 4px 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 3px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  transition: background 0.2s ease;
}

.popup_opener:hover {
  cursor: pointer;
  background: #469fdb;
}
  
.popup_opener::after {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  width: 100%;
  height: 10%;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.4);
  opacity: 0.4;
  transform: translateX(-50%) translateY(-50%);
  bottom: -30px;
}
</style>
