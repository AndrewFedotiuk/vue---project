export default {
  state: {
    ads: [
      {
        title: 'First title',
        description: 'hello i am description',
        promo: false,
        src: 'http://bipbap.ru/wp-content/uploads/2017/09/Cool-High-Resolution-Wallpaper-1920x1080.jpg',
        id: '100'
      },
      {
        title: 'Second title',
        description: 'hello i am description',
        promo: true,
        src: 'https://static.tumblr.com/c9a8fff286f068e0f951ca01aea3b4a2/lquyijk/58snseviz/tumblr_static_tumblr_static_filename_640.jpg',
        id: '101'
      },
      {
        title: 'Third title',
        description: 'hello i am description',
        promo: false,
        src: 'https://www.look.com.ua/large/201210/53782.jpg',
        id: '102'
      },
      {
        title: 'Four title',
        description: 'hello i am description',
        promo: true,
        src: 'http://minionomaniya.ru/wp-content/uploads/2016/01/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg',
        id: '103'
      }
    ]
  },
  mutations: {
    createAd(state, payload){
        state.ads.push(payload)
    }
  },
  actions: {
    createAd({commit}, payload){
        payload.id = 'ioewrui'
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promo (state){
      return state.ads.filter(ad=>{
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state){
      return function (adId){
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
