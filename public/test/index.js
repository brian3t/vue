
var app = new Vue({
  el: '#shopping-list',
  data: {
    header: 'vue is ready to party',
    newitem: '',
    items: [
      {id: 0, text: 'Vegetables'},
      {id: 1, text: 'Cheese'},
      {id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  }
});
/*
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  created: function () {
    console.log(`im created`);
  },
  template: '<li>{{todo.text}}</li>',
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id: 0, text: 'Vegetables'},
      {id: 1, text: 'Cheese'},
      {id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  },
})

*/
