var template = require('./template.ejs')
require('./style.css')

// Iframe Content and Position Configuration
// FOR FUTURE
// var conf = [
//   {
//     url: 'http://ilmatieteenlaitos.fi/avaruussaa'
//   },
//   {
//     url: 'http://akselipalen.com'
//   }
// ]
//
// setTimeout(function () {
//   window.location.reload(false)
// }, 5 * 60000)

var content = document.getElementById('content')
content.innerHTML = template({})
