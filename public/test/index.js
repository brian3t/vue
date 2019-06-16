var app = new Vue({
  el: '#shopping-list',
  data: {
    state: 'default',
    header: 'vue is ready to party',
    newitem: '',
    items: [
      {purchased: false, label: 'Vegetables', high_priority: false},
      {purchased: true, label: 'Cheese', high_priority: false},
      {purchased: false, label: 'Whatever else humans are supposed to eat', high_priority: true}
    ]
  },
  computed: {
    reversed_items: function () {
      let reversed_items = this.items.slice(0)
      reversed_items.reverse()
      return reversed_items
    }
  },
  methods: {
    save_item: function () {
      this.items.push({label: this.newitem, purchased: false, high_priority: false})
      this.newitem = ''
    },
    change_state: function (new_state) {
      this.state = new_state
      this.newitem = ''
    },
    toggle_purchased: function (item) {
      item.purchased = ! item.purchased
    }
  },
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
