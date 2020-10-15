<<<<<<< HEAD
Vue.component('error', {

    data(){
        return {
            text: ''
        }
    },

    methods: {
      setError(error){
          this.text = error
      }
    },

    computed: {
      isVisible(){
          return this.text !== '';
      }
    },

    template: 
        `
            <div class="error-window" v-if="isVisible"> 
                <p class="error-msg">
                    <button class="close-btn" @click="setError('')">&times;</button>
                    {{ text }}
                </p>
            </div>
        `
=======
Vue.component('error', {

    data(){
        return {
            text: ''
        }
    },

    methods: {
      setError(error){
          this.text = error
      }
    },

    computed: {
      isVisible(){
          return this.text !== '';
      }
    },

    template: 
        `
            <div class="error-window" v-if="isVisible"> 
                <p class="error-msg">
                    <button class="close-btn" @click="setError('')">&times;</button>
                    {{ text }}
                </p>
            </div>
        `
>>>>>>> f50b6dc52704c2a18eafa62b9ca0ca93f6ca0745
});