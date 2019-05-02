class MyEdWidget extends HTMLElement {

    constructor() {
      super()
      this.props = {
        color: this.getAttribute('color')
      }
      const shadow = this.attachShadow({mode: 'open'});
      shadow.innerHTML = this.render(this.props)
      this.addEvents()
    }

    addEvents() {
      this.addEventListener('click', () => {
        alert(`The color of this widget is ${this.props.color}`)
      })
    }

    css() {
      const {color} = this.props
      return `
      <style>
          p {
            font-size: 1.2em;
            color: ${color};
          }
          .widget {
            font-family: tahoma, sans-serif;
            max-width: 30em;
            background: whitesmoke;
            padding: 1em;
            margin: .2em;
            box-sizing: border-box;
          }
      </style>
      `
    }

    render() {
      const {color} = this.props
      return `
        ${this.css()}
        <div class="widget">
          <h2>This is a ${color} widget</h2>
          <p>Bird is the word</p>
          <p>Styling is scoped</p>
        <div>
      `
    }
}

customElements.define('myed-widget', MyEdWidget)
