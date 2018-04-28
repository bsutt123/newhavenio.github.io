
window.$ = require('jquery');
window.Mustache = require('Mustache');
import Vue from 'vue';

import 'bootstrap-sass/assets/javascripts/bootstrap.js';

import MeetupEvents from '../js/components/vue/meetupEventsVue.vue';

$(document).ready(function() {
  var eventsApp = new Vue({
    el: "#meetup-events",
    render: function(h) {
      return h(MeetupEvents);
    },
  })
})