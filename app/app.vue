<script setup>
const cvData = ref({
  bilde: null,
  navn: 'Ola Nordmann',
  tittel: 'Fullstack Utvikler & UI-entusiast',
  epost: 'ola@nordmann.no',
  mobil: '+47 99 88 77 66',
  profil: 'Engasjert og løsningsorientert utvikler med spesiell lidenskap for moderne frontend-teknologier...',
  erfaringer: [
    { id: 1, stilling: 'Senior Nuxt-Utvikler', bedrift: 'TechInnovate AS', periode: '2024 - Nå', beskrivelse: 'Hovedansvarlig for arkitektur...' }
  ],
  utdanninger: [
    { id: 1, grad: 'Bachelor i IT og Webforhandling', skole: 'Høyskolen Kristiania', periode: '2019 - 2022', beskrivelse: 'Spesialisering i frontend-utvikling og skyarkitektur.' }
  ],
  referanser: [
    { id: 1, navn: 'Kari Nordmann', tittel: 'Daglig leder', bedrift: 'Tech AS', kontakt: 'jan@tech.no / 99 88 77 66' }
  ]
})

const printCV = () => {
  window.print()
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
    <header class="bg-white border-b border-slate-200 py-4 px-8 sticky top-0 z-50 print:hidden shadow-sm">
      <div class="w-full flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="text-2xl">⚡</span>
          <h1 class="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            Nuxt CV-Generator
          </h1>
        </div>
        <button 
          @click="printCV"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95 flex items-center gap-2"
        >
          <span>🖨️</span> Lagre som PDF
        </button>
      </div>
    </header>

    <main class="w-full py-8 px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div class="print:hidden">
          <CvEditor v-model:cvData="cvData" />
        </div>

        <div class="w-full bg-slate-200/50 p-8 rounded-3xl border-2 border-dashed border-slate-300 sticky top-24 self-start print:static print:p-0 print:border-none print:bg-transparent">
          <CvPreview :cvData="cvData" />
        </div>

      </div>
    </main>
  </div>
</template>