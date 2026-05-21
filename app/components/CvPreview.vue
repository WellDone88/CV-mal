<template>
  <div class="w-full max-w-[800px] flex flex-col items-center">
    
    <div class="cv-dynamisk-container w-full bg-white shadow-xl p-12 space-y-8 relative print:shadow-none">
      
      <div class="cv-seksjon border-b-4 border-indigo-600 pb-6 flex justify-between items-start gap-4">
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

      <div v-if="cvData.profil" class="cv-seksjon space-y-2">
        <h2 class="text-slate-900 uppercase tracking-wider text-sm font-bold border-b pb-1">Profil</h2>
        <p class="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{{ cvData.profil }}</p>
      </div>

      <div v-if="cvData.erfaringer && cvData.erfaringer.length > 0" class="space-y-4">
        <h2 class="text-slate-900 uppercase tracking-wider text-sm font-bold border-b pb-1">Arbeidserfaring</h2>
        <div class="space-y-6">
          <div v-for="jobb in cvData.erfaringer" :key="jobb.id" class="cv-seksjon space-y-1">
            <div class="flex justify-between items-baseline">
              <h3 class="text-sm font-bold text-slate-800">{{ jobb.stilling }}</h3>
              <span class="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{{ jobb.periode }}</span>
            </div>
            <p class="text-xs font-medium text-indigo-600">{{ jobb.bedrift }}</p>
            <p v-if="jobb.beskrivelse" class="text-xs text-slate-600 leading-relaxed mt-1">{{ jobb.beskrivelse }}</p>
          </div>
        </div>
      </div>

      <div v-if="cvData.utdanninger && cvData.utdanninger.length > 0" class="space-y-4">
        <h2 class="text-slate-900 uppercase tracking-wider text-sm font-bold border-b pb-1">Utdanning</h2>
        <div class="space-y-6">
          <div v-for="skole in cvData.utdanninger" :key="skole.id" class="cv-seksjon space-y-1">
            <div class="flex justify-between items-baseline">
              <h3 class="text-sm font-bold text-slate-800">{{ skole.grad }}</h3>
              <span class="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{{ skole.periode }}</span>
            </div>
            <p class="text-xs font-medium text-indigo-600">{{ skole.skole }}</p>
            <p v-if="skole.beskrivelse" class="text-xs text-slate-600 leading-relaxed mt-1">{{ skole.beskrivelse }}</p>
          </div>
        </div>
      </div>

      <div v-if="cvData.referanser && cvData.referanser.length > 0" class="space-y-4">
        <h2 class="text-slate-900 uppercase tracking-wider text-sm font-bold border-b pb-1 border-indigo-600">Referanser</h2>
        <div class="grid grid-cols-2 gap-6 print:grid-cols-2">
          <div v-for="ref in cvData.referanser" :key="ref.id" class="cv-seksjon text-xs space-y-0.5">
            <p class="font-bold text-slate-800 text-sm">{{ ref.navn || 'Navn på referanse' }}</p>
            <p class="font-medium text-indigo-600">
              {{ ref.tittel }} <span class="text-slate-400 font-normal" v-if="ref.bedrift">hos {{ ref.bedrift }}</span>
            </p>
            <p class="text-slate-500 italic mt-1" v-if="ref.kontakt">📞 {{ ref.kontakt }}</p>
          </div>
        </div>
      </div>

      <div class="absolutt-ark-linje side-linje-1 print:hidden"></div>
      <div class="absolutt-ark-linje side-linje-2 print:hidden"></div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  cvData: { type: Object, required: true }
})
</script>

<style scoped>
.cv-dynamisk-container {
  min-height: 1122px;
  display: flex;
  flex-direction: column;
}

.cv-seksjon {
  page-break-inside: avoid !important;
  break-inside: avoid-page !important;
  break-inside: avoid !important;
}

.absolutt-ark-linje {
  position: absolute;
  left: 0;
  right: 0;
  height: 16px;
  background-color: #f1f5f9; 
  border-top: 1px dashed #cbd5e1;
  border-bottom: 1px dashed #cbd5e1;
  pointer-events: none;
}

.side-linje-1 {
  top: 1122px;
}

.side-linje-2 {
  top: 2244px;
}

.side-linje-1::after {
  content: "--- SIDE 2 BEGYNNER HER ---";
  position: absolute;
  top: -18px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 10px;
  font-weight: 800;
  color: #94a3b8;
  letter-spacing: 0.1em;
}

/* DE JUSTERTE UTKRIFTSREGLENE: */
@media print {
  @page {
    size: A4;
    margin: 0 !important; /* Nullstiller nettleserens standard printmarger helt */
  }

  .cv-dynamisk-container {
    min-height: auto !important;
    padding: 3rem !important; /* Beholder p-12 (48px) marger i selve PDF-en slik som på skjermen */
    background: white !important;
  }
}
</style>