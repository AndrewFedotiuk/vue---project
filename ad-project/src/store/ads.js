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
