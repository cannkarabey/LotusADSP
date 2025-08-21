<!-- <template>
  <div>
    <h1>İletişim</h1>
    <form>
      <input placeholder="Ad Soyad" />
      <input placeholder="E-posta" />
      <textarea placeholder="Mesaj"></textarea>
      <button class="btn">Gönder</button>
    </form>
  </div>
</template> -->

<template>
  <div class="container" style="padding:24px 0; max-width:720px;">
    <h1>İletişim</h1>
    <form @submit.prevent="submit">
      <div style="display:grid; gap:12px;">
        <input v-model="form.name" placeholder="Ad Soyad" required />
        <input v-model="form.email" type="email" placeholder="E-posta" required />
        <input v-model="form.phone" placeholder="Telefon" />
        <textarea v-model="form.message" rows="5" placeholder="Mesajınız" required></textarea>
        <button class="btn">Gönder</button>
        <p v-if="status">{{ status }}</p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name:'', email:'', phone:'', message:'' })
const status = ref('')

async function submit () {
  try {
    const base = import.meta.env.VITE_API_BASE_URL
    await axios.post(`${base}/api/contact`, form.value)
    status.value = 'Gönderildi. Teşekkürler.'
  } catch (e) {
    status.value = 'Gönderilemedi. Lütfen tekrar deneyin.'
  }
}
</script>
