// customElements.define('my-paragraph',
//   class extends HTMLElement {
//     constructor() {
//       super();
//       // let template = document.createElement()


//       const template = document.getElementById('my-paragraph')
//       let templateContent = template.content;
//       console.log(template)
//       const shadowRoot = this.attachShadow({mode: 'open'})
//         .appendChild(templateContent.cloneNode(true));
//   }
// })

const html = [1,2,3,4,5].map(() => '<p>Bird is the word</p>').join('')

var MyParagraphProto = Object.create(HTMLElement.prototype);

MyParagraphProto.createdCallback = function() {
  this.insertAdjacentHTML('beforeEnd',`
    ${html}`
  );
};

document
  .registerElement('my-paragraph', {prototype: MyParagraphProto});
