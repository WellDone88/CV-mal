<template>
  <div class="w-full max-w-[800px] bg-white min-h-[1050px] shadow-xl rounded-sm p-12 space-y-8 print:shadow-none print:p-0 print:w-full">
    
    <div class="border-b-4 border-indigo-600 pb-6 flex justify-between items-start gap-4">
      <div class="space-y-1 flex-1">
        <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight">{{ cvData.navn || 'Ditt Navn' }}</h1>
        <p class="text-lg text-indigo-600 font-medium mt-1">{{ cvData.tittel || 'Din Tittel' }}</p>
        
        <div class="flex flex-wrap gap-4 text-xs text-slate-500 mt-4 font-medium">
          <span v-if="cvData.epost" class="flex items-center gap-1">📧 {{ cvData.epost }}</span>
          <span v-if="cvData.mobil" class="flex items-center gap-1">📱 {{ cvData.mobil }}</span>
          <span v-if="cvData.sted" class="flex items-center gap-1">📍 {{ cvData.sted }}</span>
        </div>
      </div>

      <div v-if="cvData.bilde" class="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-600 shadow-md flex-shrink-0 bg-slate-100">
        <img :src="cvData.bilde" alt="Profilbilde" class="w-full h-full object-cover" />
      </div>
    </div>

    <div v-if="cvData.profil" class="space-y-2">
      <h2 class="text-slate-900 uppercase tracking-wider text-sm font-bold border-b pb-1">Profil</h2>
      <p class="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{{ cvData.profil }}</p>
    </div>

    <div class="space-y-4">
      <h2 class="text-slate-900 uppercase tracking-wider text-sm font-bold border-b pb-1">Arbeidserfaring</h2>
      
      <div class="space-y-6">
        <div v-for="jobb in cvData.erfaringer" :key="jobb.id" class="space-y-1">
          <div class="flex justify-between items-baseline">
            <h3 class="text-sm font-bold text-slate-800">{{ jobb.stilling }}</h3>
            <span class="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{{ jobb.periode }}</span>
          </div>
          <p class="text-xs font-medium text-indigo-600">{{ jobb.bedrift }}</p>
          <p v-if="jobb.beskrivelse" class="text-xs text-slate-600 leading-relaxed mt-1">{{ jobb.beskrivelse }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
// Tar imot data fra app.vue for å tegne den ut på skjermen
defineProps({
  cvData: { type: Object, required: true }
})
</script>