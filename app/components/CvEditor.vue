<template>
  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
    <h2 class="text-lg font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
      ✍️ Rediger din informasjon
    </h2>

    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Personalia</h3>
      
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Fullt navn</label>
        <input v-model="lokalData.navn" type="text" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
      </div>

      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Yrkesstittel</label>
        <input v-model="lokalData.tittel" type="text" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-medium text-slate-500 mb-1">E-post</label>
          <input v-model="lokalData.epost" type="email" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-500 mb-1">Telefon</label>
          <input v-model="lokalData.mobil" type="text" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" />
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Om meg / Profil</h3>
      <textarea v-model="lokalData.profil" rows="4" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-y"></textarea>
    </div>

    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Arbeidserfaring</h3>
      <div v-for="(jobb, index) in lokalData.erfaringer" :key="jobb.id" class="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
        <div class="grid grid-cols-2 gap-2">
          <input v-model="jobb.stilling" type="text" placeholder="Stilling" class="border rounded p-1.5 text-xs bg-white" />
          <input v-model="jobb.bedrift" type="text" placeholder="Bedrift" class="border rounded p-1.5 text-xs bg-white" />
        </div>
        <input v-model="jobb.periode" type="text" placeholder="Periode (f.eks. 2022 - 2024)" class="w-full border rounded p-1.5 text-xs bg-white" />
        <textarea v-model="jobb.beskrivelse" rows="2" placeholder="Beskriv oppgaver..." class="w-full border rounded p-1.5 text-xs bg-white resize-none"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>

// Tar imot data fra app.vue
const props = defineProps({
  cvData: { type: Object, required: true }
})

// Definerer "eventet" vi bruker for å sende oppdaterte data tilbake til app.vue
const emit = defineEmits(['update:cvData'])

// Lager en lokal kopi av dataen så vi kan bruke v-model uten å "mutere" props direkte (best practice i Vue)
const lokalData = ref(JSON.parse(JSON.stringify(props.cvData)))

// Hver gang brukeren taster noe i lokalData, sender vi det opp til app.vue
watch(lokalData, (nyVerdi) => {
  emit('update:cvData', nyVerdi)
}, { deep: true })
</script>