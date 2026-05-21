<template>
  <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
    <h2 class="text-lg font-bold text-slate-900 border-b pb-2 flex items-center gap-2">
      ✍️ Rediger din informasjon
    </h2>

    <div class="space-y-2">
      <label class="block text-sm font-semibold text-indigo-600 uppercase tracking-wider">Profilbilde</label>
      <div 
        @dragover.prevent 
        @drop.prevent="haandterDrop"
        class="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50 transition-colors group"
        @click="$refs.filInput.click()"
      >
        <input 
          type="file" 
          ref="filInput" 
          class="hidden" 
          accept="image/*" 
          @change="haandterFilvalg" 
        />
        <div class="space-y-1 text-slate-500">
          <span class="text-2xl group-hover:scale-110 inline-block transition-transform">📸</span>
          <p class="text-xs font-medium text-slate-700">Klikk for å velge, eller dra et bilde hit</p>
          <p class="text-[10px]">PNG, JPG eller WEBP (Maks 2MB)</p>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Personalia</h3>
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Fullt navn</label>
        <input v-model="lokalData.navn" type="text" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div>
        <label class="block text-xs font-medium text-slate-500 mb-1">Yrkesstittel</label>
        <input v-model="lokalData.tittel" type="text" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-medium text-slate-500 mb-1">E-post</label>
          <input v-model="lokalData.epost" type="email" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
        <div>
          <label class="block text-xs font-medium text-slate-500 mb-1">Telefon</label>
          <input v-model="lokalData.mobil" type="text" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Om meg / Profil</h3>
      <textarea v-model="lokalData.profil" rows="4" class="w-full border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-y"></textarea>
    </div>

    <div class="space-y-4">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Arbeidserfaring</h3>
      <div v-for="jobb in lokalData.erfaringer" :key="jobb.id" class="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 mb-2">
        <div class="grid grid-cols-2 gap-2">
          <input v-model="jobb.stilling" type="text" placeholder="Stilling" class="border rounded p-1.5 text-xs bg-white" />
          <input v-model="jobb.bedrift" type="text" placeholder="Bedrift" class="border rounded p-1.5 text-xs bg-white" />
        </div>
        <input v-model="jobb.periode" type="text" placeholder="Periode (f.eks. 2022 - 2024)" class="w-full border rounded p-1.5 text-xs bg-white" />
        <textarea v-model="jobb.beskrivelse" rows="2" placeholder="Beskriv oppgaver..." class="w-full border rounded p-1.5 text-xs bg-white resize-none"></textarea>
      </div>

      <button @click="leggTilJobb" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 rounded-lg text-xs transition-colors border border-slate-300 border-dashed flex items-center justify-center gap-1">
        ➕ Legg til ny jobb
      </button>
    </div>

    <div class="space-y-4 pt-4 border-t border-slate-100">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Utdanning</h3>
      <div v-for="skole in lokalData.utdanninger" :key="skole.id" class="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 mb-2">
        <div class="grid grid-cols-2 gap-2">
          <input v-model="skole.grad" type="text" placeholder="Grad / Studieretning" class="border rounded p-1.5 text-xs bg-white" />
          <input v-model="skole.skole" type="text" placeholder="Skole / Universitet" class="border rounded p-1.5 text-xs bg-white" />
        </div>
        <input v-model="skole.periode" type="text" placeholder="Periode (f.eks. 2019 - 2022)" class="w-full border rounded p-1.5 text-xs bg-white" />
        <textarea v-model="skole.beskrivelse" rows="2" placeholder="Kort om fag eller spesialisering..." class="w-full border rounded p-1.5 text-xs bg-white resize-none"></textarea>
      </div>

      <button @click="leggTilUtdanning" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 rounded-lg text-xs transition-colors border border-slate-300 border-dashed flex items-center justify-center gap-1">
        ➕ Legg til utdanning
      </button>
    </div>

    <div class="space-y-4 pt-4 border-t border-slate-100">
      <h3 class="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Referanser</h3>
      <div v-for="ref in lokalData.referanser" :key="ref.id" class="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 mb-2">
        <input v-model="ref.navn" type="text" placeholder="Navn på referanse" class="w-full border rounded p-1.5 text-xs bg-white" />
        <div class="grid grid-cols-2 gap-2">
          <input v-model="ref.tittel" type="text" placeholder="Stillingstittel" class="border rounded p-1.5 text-xs bg-white" />
          <input v-model="ref.bedrift" type="text" placeholder="Bedrift" class="border rounded p-1.5 text-xs bg-white" />
        </div>
        <input v-model="ref.kontakt" type="text" placeholder="Tlf / E-post" class="w-full border rounded p-1.5 text-xs bg-white" />
      </div>

      <button @click="leggTilReferanse" class="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2 rounded-lg text-xs transition-colors border border-slate-300 border-dashed flex items-center justify-center gap-1">
        ➕ Legg til referanse
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cvData: { type: Object, required: true }
})
const emit = defineEmits(['update:cvData'])
const lokalData = ref(JSON.parse(JSON.stringify(props.cvData)))

watch(lokalData, (ny) => {
  emit('update:cvData', ny)
}, { deep: true })

const leggTilJobb = () => {
  lokalData.value.erfaringer.push({ id: Date.now(), stilling: '', bedrift: '', periode: '', beskrivelse: '' })
}
const leggTilUtdanning = () => {
  lokalData.value.utdanninger.push({ id: Date.now(), grad: '', skole: '', periode: '', beskrivelse: '' })
}
const leggTilReferanse = () => {
  lokalData.value.referanser.push({ id: Date.now(), navn: '', tittel: '', bedrift: '', kontakt: '' })
}

const haandterFilvalg = (e) => lesOgLagre(e.target.files[0])
const haandterDrop = (e) => lesOgLagre(e.dataTransfer.files[0])
const lesOgLagre = (f) => {
  if (!f || !f.type.startsWith('image/')) return
  const r = new FileReader()
  r.onload = (e) => lokalData.value.bilde = e.target.result
  r.readAsDataURL(f)
}
</script>