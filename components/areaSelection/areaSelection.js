// components/areaSelection/areaSelection.js
import miniCountry from '../../utils/miniCountry.js'
Component({
  data: {
    scrollViewScrollTop: 0, // 设置滚动的位置
    hotCountryList: [{
      id: "CN",
      sortId: "ZG",
      countryCN: "中国",
      countryEN: "China"
    }, {
      id: "DE",
      sortId: "DG",
      countryCN: "德国",
      countryEN: "Germany"
    }],
    countrySortList: {},
    filterNavList: [],
    // 热门 + letter
    navList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    currentNav: 'hot'
  },
  lifetimes: {
    attached: function () {
      // 处理国家数组
      this.countryList = [...miniCountry]
      this.countryList.sort(function (a, b) {
        let list = [a.sortId, b.sortId]
        list.sort()
        return list[0] === a.sortId ? -1 : 1
      })
      let navList = this.data.navList
      let countrySortList = {}
      let filterNavList = []
      this.countryList.forEach((country) => {
        let index = navList.indexOf(country.sortId.substring(0, 1))
        let nav = navList[index]
        if (countrySortList.hasOwnProperty(nav)) {
          countrySortList[nav].push({
            ...country
          })
        } else {
          filterNavList.push(nav)
          countrySortList[nav] = [{
            ...country
          }]
        }
      })
      this.setData({
        countrySortList,
        filterNavList
      }, () => {
        this.getElementDomHeight().then((heightInfo) => {
          this.computedFixedData(countrySortList, filterNavList, heightInfo)
        }).catch(() => {
          this.computedFixedData(countrySortList, filterNavList, {
            totalHeight: 98, // 热门国家容器的高度
            initialHeight: 28, // 字母高度
            countryHeight: 50 // 国家高度
          })
        })
      })
    },
  },
  methods: {
    getElementDomHeight: function () {
      return new Promise((resolve, reject) => {
        if (!this.createSelectorQuery) {
          reject()
        }
        let totalHeight = 0 // 热门国家容器的高度
        let initialHeight = 0 // 字母高度
        let countryHeight = 0 // 国家高度
        this.createSelectorQuery().select('.area-content .area-hot').boundingClientRect(rect => {
          //获取到元素
          totalHeight = rect.height;
          if (totalHeight > 0 && initialHeight > 0 && countryHeight > 0) {
            resolve({
              totalHeight,
              initialHeight,
              countryHeight
            })
          }
        }).exec()
        this.createSelectorQuery().select('.area-content .area-country-initial').boundingClientRect(rect => {
          //获取到元素
          initialHeight = rect.height;
          if (totalHeight > 0 && initialHeight > 0 && countryHeight > 0) {
            resolve({
              totalHeight,
              initialHeight,
              countryHeight
            })
          }
        }).exec()
        this.createSelectorQuery().select('.area-content .area-country').boundingClientRect(rect => {
          //获取到元素
          countryHeight = rect.height;
          if (totalHeight > 0 && initialHeight > 0 && countryHeight > 0) {
            resolve({
              totalHeight,
              initialHeight,
              countryHeight
            })
          }
        }).exec()
      })
    },
    computedFixedData: function (countrySortList, filterNavList, heightInfo) {
      let {
        totalHeight,
        initialHeight,
        countryHeight
      } = heightInfo
      this.hotContainerHeight = totalHeight // 热门国家容器的高度
      let initialBottomScrollTopList = [] // 每个字母国家容器列表底部的scorllTop
      filterNavList.forEach((nav) => {
        let currentNavCount = countrySortList[nav].length
        let height = initialHeight + currentNavCount * countryHeight
        initialBottomScrollTopList.push(totalHeight + height)
        totalHeight += height
      })
      this.initialBottomScrollTopList = initialBottomScrollTopList
    },
    onScrollViewScroll: function (e) {
      let scrollTop = e.detail.scrollTop;
      let currentNav = this.data.currentNav
      if (scrollTop < this.hotContainerHeight) {
        currentNav !== 'hot' && this.setData({
          currentNav: 'hot'
        })
        return
      }
      let foundIndex = this.initialBottomScrollTopList.findIndex((num) => {
        return scrollTop < num
      })
      if (foundIndex === -1) {
        return
      }
      let newCurrentNav = this.data.filterNavList[foundIndex]
      newCurrentNav !== currentNav && this.setData({
        currentNav: newCurrentNav
      })
    },
    onCountryTap: function (e) {
      let country = e.target.dataset.country
      if (!country) {
        return
      }
      wx.showToast({
        title: '国家',
        content: country.countryCN
      })
      this.triggerEvent('areaSelection:onCountryTap', country)
    },
    onNavTap: function (e) {
      let nav = e.target.dataset.nav

      if (nav === 'parent' || nav === this.data.currentNav) {
        return
      }
      // 热门
      if (nav === 'hot') {
        this.setData({
          currentNav: nav,
          scrollViewScrollTop: 0
        })
        return
      }
      // A - Z
      let setData = {
        currentNav: nav
      }
      let foundIndex = this.data.filterNavList.findIndex((v) => {
        return v === nav
      })
      if (foundIndex >= 0) {
        let scrollViewScrollTop = foundIndex === 0 ? this.hotContainerHeight : this.initialBottomScrollTopList[foundIndex - 1]
        setData.scrollViewScrollTop = scrollViewScrollTop
        this.setData(setData)
      }
    }
  }
})