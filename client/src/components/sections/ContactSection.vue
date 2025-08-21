<template>
  <section id="contact" class="section">
    <div class="container">
      <h2>Bize Ulaşın</h2>
      <form class="contact-form" @submit.prevent="submit">
        <input v-model="form.name" placeholder="Ad Soyad" required />
        <input v-model="form.email" type="email" placeholder="E-posta" required />
        <input v-model="form.phone" placeholder="Telefon" />
        <textarea v-model="form.message" rows="5" placeholder="Mesajınız" required />
        <button class="btn">Gönder</button>
        <p v-if="status" class="status">{{ status }}</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name:'', email:'', phone:'', message:'' })
const status = ref('')

async function submit(){
  try{
    const base = import.meta.env.VITE_API_BASE_URL
    await axios.post(`${base}/api/contact`, form.value)
    status.value = 'Gönderildi. Teşekkürler.'
    form.value = { name:'', email:'', phone:'', message:'' }
  }catch(e){
    status.value = 'Gönderilemedi. Lütfen tekrar deneyin.'
  }
}
</script>

<style scoped>
.section{ padding:64px 0; }
.container{ max-width:1200px; margin:0 auto; padding:0 16px; }
.contact-form{ display:grid; gap:12px; max-width:640px; }
.contact-form input, .contact-form textarea{
  border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; font:inherit;
}
.btn{ background:#d4af37; color:#fff; border:none; border-radius:10px; padding:10px 14px; cursor:pointer; }
.status{ color:#059669; }
</style>
