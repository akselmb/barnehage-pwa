// Norwegian translations for the kindergarten PWA
export const translations = {
  no: {
    // Navigation
    home: 'Hjem',
    posts: 'Innlegg',
    calendar: 'Kalender',
    messages: 'Meldinger',
    profile: 'Profil',
    
    // Authentication
    login: 'Logg inn',
    logout: 'Logg ut',
    register: 'Registrer',
    email: 'E-post',
    password: 'Passord',
    confirmPassword: 'Bekreft passord',
    
    // Roles
    admin: 'Administrator',
    employee: 'Ansatt',
    parent: 'Forelder',
    family: 'Familie',
    
    // Posts
    createPost: 'Opprett innlegg',
    postContent: 'Innholdsbeskrivelse',
    addPhoto: 'Legg til bilde',
    publish: 'Publiser',
    like: 'Liker',
    comment: 'Kommenter',
    share: 'Del',
    
    // Calendar
    weeklyCalendar: 'Ukekalender',
    thisWeek: 'Denne uken',
    nextWeek: 'Neste uke',
    addEvent: 'Legg til arrangement',
    eventTitle: 'Arrangementstittel',
    eventDescription: 'Beskrivelse',
    eventDate: 'Dato',
    eventTime: 'Tid',
    
    // Messages
    sendMessage: 'Send melding',
    newMessage: 'Ny melding',
    messageTo: 'Melding til',
    messageContent: 'Melding',
    
    // Children
    children: 'Barn',
    addChild: 'Legg til barn',
    childName: 'Barnets navn',
    childBirthDate: 'Fødselsdato',
    assignFamily: 'Tildel familie',
    
    // Family
    familyMembers: 'Familiemedlemmer',
    inviteFamily: 'Inviter familiemedlem',
    familyEmail: 'Familie e-post',
    approveAccess: 'Godkjenn tilgang',
    
    // Common
    save: 'Lagre',
    cancel: 'Avbryt',
    edit: 'Rediger',
    delete: 'Slett',
    confirm: 'Bekreft',
    loading: 'Laster...',
    error: 'Feil',
    success: 'Vellykket',
    welcome: 'Velkommen',
    back: 'Tilbake',
    next: 'Neste',
    previous: 'Forrige',
    search: 'Søk',
    filter: 'Filtrer',
    sort: 'Sorter',
    all: 'Alle',
    none: 'Ingen',
    
    // Kindergarten specific
    kindergarten: 'Barnehage',
    myKindergarten: 'Min barnehage',
    announcements: 'Kunngjøringer',
    activities: 'Aktiviteter',
    meals: 'Måltider',
    napTime: 'Lur',
    outdoorPlay: 'Utelek',
    crafts: 'Håndverk',
    storyTime: 'Fortellingstid',
    
    // Notifications
    newPost: 'Nytt innlegg',
    newCalendarEvent: 'Nytt kalenderarrangement',
    newMessage: 'Ny melding',
    permissionRequest: 'Tilgangsforespørsel',
    
    // Settings
    settings: 'Innstillinger',
    notifications: 'Varsler',
    language: 'Språk',
    privacy: 'Personvern',
    help: 'Hjelp',
    about: 'Om',
    version: 'Versjon',
    
    // Error messages
    errorLogin: 'Kunne ikke logge inn. Sjekk e-post og passord.',
    errorNetwork: 'Nettverksfeil. Sjekk internettforbindelsen.',
    errorPermission: 'Du har ikke tilgang til denne funksjonen.',
    errorRequired: 'Dette feltet er påkrevd.',
    errorEmail: 'Vennligst oppgi en gyldig e-postadresse.',
    errorPassword: 'Passordet må være minst 6 tegn langt.',
  }
} as const;

export type TranslationKey = keyof typeof translations.no;
export type Language = keyof typeof translations;

export const getTranslation = (key: TranslationKey, language: Language = 'no'): string => {
  return translations[language][key] || key;
};
