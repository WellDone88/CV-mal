==========================================================================================
|                           WHITEBOARD: NUXT CV-GENERATOR                               |
==========================================================================================

 [   NUXT APP STATE / DATA  ] 
         │
         ├──► cvData (Reaktivt objekt med eksempeltekst: Navn, Jobber, Utdanning)
         └──► cvImage (Base64-streng eller URL til profilbilde)
         
         
 [   KOMPONENT-STRUKTUR (Prosjektfiler)  ]
 
   app.vue  (Hovedsiden)
     │
     ├──► /components/CvEditor.vue  ─── (Venstre side: Input-felter, Bilde-upload)
     │                                        │  [Oppdaterer data i sanntid]
     │                                        ▼
     └──► /components/CvPreview.vue ─── (Høyre side: Selve CV-malen som rendres)



 [   LAYOUT / WIREFRAME PÅ SKJERMEN  ]
 ________________________________________________________________________________________
|  [Header]  Nuxt CV Builder v1.0                                [ Knapp: Print til PDF ]|
|________________________________________________________________________________________|
|                                           |                                            |
|  KONTROLLPANEL (CvEditor.vue)            |  LIVE CV-PREVIEW (CvPreview.vue)           |
|                                           |                                            |
|  [ Last opp bilde: [ Velg fil ] ]         |   _______________________________________  |
|                                           |  |  [Bilde]   OLA NORDMANN               |  |
|  [ Navn: [ Ola Nordmann         ] ]       |  |            Utvikler & Kreatør         |  |
|  [ Tittel: [ Utvikler & Kreatør ] ]       |  |  ───────────────────────────────────  |  |
|                                           |  |  PROFIL                               |  |
|  [ Erfaring:                     ]        |  |  Engasjert utvikler med ...           |  |
|  [ + Legg til ny jobb            ]        |  |                                       |  |
|                                           |  |  ERFARING                             |  |
|  [ Fargevalg: ]                           |  |  • Senior Utvikler | Tech Corp        |  |
|  ( ) Tech  (*) Creative  ( ) Corporate    |  |    - Kodet fete Nuxt-apper i 2026.    |  |
|                                           |  |_______________________________________|  |
|                                           |                                            |
|___________________________________________|____________________________________________|

==========================================================================================
| NOTES / TODO:                                                                          |
| - Bruk Tailwind CSS for rask og lekker styling.                                        |
| - Drag-and-drop-sone for bildet for den "proffe" følelsen.                             |
| - CSS `@media print` sørger for at bare høyre side (CV-en) blir med når man lagrer PDF. |
==========================================================================================