class Component {
  constructor($target) {
    this.$target = $target;
  }
  setup() {
    this.render();
    this.addEvent();
  }

  render() {
    this.$target.innerHTML = this.template();
  }

  template() {
    return;
  }
  addEvent() {}
}

export default Component;
