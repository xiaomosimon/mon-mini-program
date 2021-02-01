// components/iconfont/iconfont.js
Component({
  properties: {
    icon: {
      type: String,
      value: ''
    },
    size: {
      type: String | Number, // 默认单位rpx
      value: ''
    },
    color: {
      type: String,
      value: ''
    },
    fontStyle: {
      type: String,
      value: ''
    }
  },
  data: {
    fontSize: '',
    colorValue: '',
  },
  lifetimes: {
    attached: function() {
      let hasData = false
      let data = {}
      let size = this.properties.size
      if (size) {
        let filterValue = Number(size)
        // 数字
        if (filterValue) {
          data.fontSize = 'font-size:' + filterValue + 'rpx'
        } else {
          data.fontSize = 'font-size:' + size
        }
        hasData = true
      }
      if (this.properties.color) {
        data.colorValue = this.properties.color
        hasData = true
      }
      hasData && this.setData(data)
    }
  },
})
