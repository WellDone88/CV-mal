<template>
  <div class="min-h-screen bg-slate-100 font-sans antialiased text-slate-800">
    <header class="bg-white border-b border-slate-200 py-4 px-6 flex justify-between items-center sticky top-0 z-10 shadow-sm print:hidden">
      <h1 class="text-xl font-bold text-indigo-600 flex items-center gap-2">
        <span class="text-2xl">⚡</span> Nuxt CV-Generator
      </h1>
      <button @click="printCV" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors shadow-sm">
        Lagre som PDF
      </button>
    </header>

    <main class="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-65px)]">
      
      <section class="p-6 bg-slate-50 border-r border-slate-200 overflow-y-auto max-h-[calc(100vh-65px)] print:hidden">
        <CvEditor :cvData="cvData" @update:cvData="cvData = $event" />
      </section>

      <section class="p-6 md:p-12 bg-slate-200 flex justify-center items-start overflow-y-auto max-h-[calc(100vh-65px)] print:p-0 print:bg-white print:max-h-none">
        <CvPreview :cvData="cvData" />
      </section>

    </main>
  </div>
</template>

<script setup>
// Vår reaktive eksempeldata - CV-en starter ALDRI blank!
// Merk: Vi trenger ikke 'import { ref } from "vue"' fordi Nuxt fikser det automatisk!
const cvData = ref({
  navn: 'Ola Nordmann',
  tittel: 'Fullstack Utvikler & UI-entusiast',
  epost: 'ola@nordmann.no',
  mobil: '+47 99 88 77 66',
  sted: 'Oslo, Norge',
  profil: 'Engasjert og løsningsorientert utvikler med spesiell lidenskap for moderne frontend-teknologier. Elsker å bygge applikasjoner som ikke bare fungerer teknisk perfekt, men som også gir brukeren en fantastisk visuell opplevelse. Erfaren med Nuxt, Vue og Tailwind CSS.',
  erfaringer: [
    { id: 1, stilling: 'Senior Nuxt-Utvikler', bedrift: 'TechInnovate AS', periode: '2024 - Nå', beskrivelse: 'Hovedansvarlig for arkitektur og utvikling av komplekse webapplikasjoner i Nuxt 3. Sørget for 40% raskere innlastingstid ved optimalisering av SSR (Server-Side Rendering).' },
    { id: 2, stilling: 'Frontend Utvikler', bedrift: 'Digitalbyrået Pixel', periode: '2022 - 2024', beskrivelse: 'Utviklet skreddersydde nettløsninger og e-handelsplattformer for spennende kunder. Jobbet tett med designere for å implementere pikselperfekt Tailwind CSS.' }
  ]
})

// Enkel funksjon for å trigge nettleserens print-dialog
const printCV = () => {
  window.print()
}
</script>