import * as fb from 'firebase'

class Add {
  constructor(title, description, ownerId, src='', promo=false, id=null){
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.src = src;
    this.promo = promo;
    this.id = id;
  }
}

export default {
  state: {
    ads: []
  },
  mutations: {
    createAd(state, payload){
        state.ads.push(payload)
    },
    loadAds(state, payload){
      state.ads = payload
    }
  },
  actions: {
    async createAd({commit, getters}, payload){
      commit('clearError')
      commit('setLoading', true)
      
      try {
        const newAd = new Add(
          payload.title,
          payload.description,
          getters.user.id,
          payload.src,
          payload.promo
        )
  
        const ad = await fb.database().ref('ads').push(newAd)
  
        commit('setLoading', false)
  
        commit('createAd',{
          ...newAd,
            id: ad.key
        })
        
      }catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds({commit}){
      commit('clearError')
      commit('setLoading', true)
      
      
      const resoultAds = []
      
      try {
            const fbVal = await fb.database().ref('ads').once('value')
        const ads = fbVal.val()
        Object.keys(ads).forEach(key=>{
          const ad = ads[key]
          resoultAds.push(
            new Add(ad.title, ad.description, ad.ownerId, ad.src, ad.promo, key)
          )
        
        })
        
        
        commit('loadAds', resoultAds)
  
  
        commit('setLoading', false)
      }
      catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    
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
