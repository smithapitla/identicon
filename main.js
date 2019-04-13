new Vue({
  el: '#app',
  data: {
    // Initialize
    textInput: ''
    
  },
  computed:{
    // Turn data into viewable values
    identicon: function(){
      return jdenticon.toSvg(this.textInput, 200)
    }
  },
  methods: { // use functions to change data
    onInput: function(event){
      console.log(event.target.value);
      this.textInput = event.target.value;
    }
  }
});