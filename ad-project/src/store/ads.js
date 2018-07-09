import * as fb from 'firebase'

class Add {
  constructor(title, description, ownerId, imageSrc='', promo=false, id=null){
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
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
    },
    updateAd(state, {title, description, id}){
      const ad = state.ads.find(a => {
        return a.id === id
      })
      ad.title = title
      ad.description = description
    }
  },
  actions: {
    
    async createAd({commit, getters}, payload){
      commit('clearError')
      commit('setLoading', true)
      
      const image = payload.image
      
      try {
        let link;
        const newAd = new Add(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo
        )
  
        const ad = await fb.database().ref('ads').push(newAd)
        
        const imageExt = image.name.slice(image.name.lastIndexOf('.'))
        const imageX = `ads/${ad.key}.${imageExt}`
     
        const fileData = await fb.storage().ref(imageX).put(image)
        await fileData.ref.getDownloadURL().then(imageSrc=>{
             fb.database().ref('ads').child(ad.key).update({
               imageSrc
           })
          link = imageSrc;
        })
        
        
  
        commit('setLoading', false)
  
        commit('createAd',{
          ...newAd,
            id: ad.key,
            imageSrc: link
        })
        
      }catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        console.log(error);
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
            new Add(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
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
    
    },
    async updateAd({commit}, {title, description, id}){
        commit('clearError')
        commit('setLoading', true)
      
      try {
          await fb.database().ref('ads').child(id).update({
            title, description
          })
        
        commit('updateAd',{
          title, description, id
        })
  
  
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
    myAds (state, getters) {
      return state.ads.filter(ad=>{
        return ad.ownerId === getters.user.id
      })
    },
    adById (state){
      return function (adId){
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
