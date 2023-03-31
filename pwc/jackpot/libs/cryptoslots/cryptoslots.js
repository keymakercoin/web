function CryptoSlots(options) {
  this.options = options
  this.init(this.options.elem)
}

CryptoSlots.icons = [
  'bitcoin',
  'dogecoin',
  'monacoin',
  'litecoin',
  'dash',
  'namecoin',
  'peercoin',
  'blackcoin',
]

CryptoSlots.prototype.init = function (elem) {
  $.ajax($('#slots_html').attr('src'), {
    success: function (data) {
      $(elem).html(data)

      this.slots = document.querySelector('.cryptoslots')
      this.cols = document.querySelectorAll('.col')

      for (var i in this.cols) {
        if (!this.cols.hasOwnProperty(i)) continue
        var col = this.cols[i]
        var str = ''
        var firstThree = ''
        for (var x = 0; x < 30; x++) {
          var part =
            '<div class="coin-container"><svg class="coin"><use xlink:href="#icon-' +
            CryptoSlots.icons[Math.floor(Math.random() * CryptoSlots.icons.length)] +
            '"></use></svg></div>'
          str += part
          if (x < 3) firstThree += part
        }
        col.innerHTML = str + firstThree
      }
    }.bind(this),
  })
}

CryptoSlots.prototype.spin = function (draw) {
  if (this.options.before_spin) this.options.before_spin()
  this.slots.classList.toggle('stop_spinning', false)
  this.slots.classList.toggle('spinning', false)
  setTimeout(
    function () {
      this.slots.classList.toggle('start_spinning', true)
      setTimeout(
        function () {
          this.slots.classList.toggle('spinning', true)
        }.bind(this),
        50
      )
    }.bind(this),
    50
  )
}

CryptoSlots.prototype.setDraw = function (draw) {
  for (var i in this.cols) {
    if (!this.cols.hasOwnProperty(i)) continue
    var col = this.cols[i]
    var results = [
      CryptoSlots.icons[Math.floor(Math.random() * CryptoSlots.icons.length)],
      draw[i],
      CryptoSlots.icons[Math.floor(Math.random() * CryptoSlots.icons.length)],
    ]
    var icons = col.querySelectorAll('.coin use')
    for (var x = 0; x < 3; x++) {
      icons[x].setAttribute('xlink:href', '#icon-' + results[x])
      icons[icons.length - 3 + x].setAttribute('xlink:href', '#icon-' + results[x])
    }
  }
}

CryptoSlots.prototype.stop = function () {
  this.slots.classList.toggle('start_spinning', false)
  this.slots.classList.toggle('spinning', false)
  setTimeout(
    function () {
      this.slots.classList.toggle('stop_spinning', true)
      setTimeout(
        function () {
          if (this.options.after_spin) this.options.after_spin()
        }.bind(this),
        2600
      )
    }.bind(this),
    50
  )
}
