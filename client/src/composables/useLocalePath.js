// src/composables/useLocalePath.js
import { useRoute } from 'vue-router'

export function useLocalePath() {
  const route = useRoute()
  return (pathOrHash) => {
    const loc = route.params.locale || 'tr'
    // hash ile başlayan (#hero gibi) bir şey gelirse ana sayfaya ekle
    if (pathOrHash.startsWith('#')) return `/${loc}/${pathOrHash}`
    if (pathOrHash.startsWith('/#')) return `/${loc}${pathOrHash}`
    // normal path ise başına locale koy
    return `/${loc}${pathOrHash}`
  }
}
