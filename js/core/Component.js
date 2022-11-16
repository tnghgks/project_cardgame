class Component {
    constructor($target) {
      this.$target = $target;
    }
    setup() {
      this.render();
    }
  
    render() {
      this.$target.innerHTML = this.template();
    }
  
    template() {
      return;
    }
  }
  
  export default Component;
  