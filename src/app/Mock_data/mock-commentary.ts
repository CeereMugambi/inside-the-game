import { CommentaryLanguageCode, CommentaryLine } from '../Shared/models/match';

export const MOCK_COMMENTARY: Record<CommentaryLanguageCode, CommentaryLine[]> = {
  en: [
    { eventId: 5, minute: 27, text: "Northgate break at speed and Omar Reyes finishes the counter after Tomas Silva's through ball. 1-0 to the home side." },
    { eventId: 10, minute: 52, text: 'Riverside are level! Sam Adeyemi swings in the cross and Ivan Petrov rises to head it home. 1-1.' },
    { eventId: 15, minute: 74, text: 'Handball in the box and the referee points to the spot. Penalty to Northgate.' },
    { eventId: 16, minute: 75, text: 'VAR takes a look at the handball and confirms the penalty stands.' },
    { eventId: 17, minute: 76, text: 'Tomas Silva steps up and converts. Northgate lead 2-1.' },
    { eventId: 19, minute: 84, text: 'Jack Rowe goes in recklessly, picks up a second yellow and is sent off. Riverside are down to ten.' },
    { eventId: 20, minute: 88, text: 'Omar Reyes curls one towards the top corner, but the keeper tips it over.' },
    { eventId: 21, minute: 90, text: 'Against the odds, ten-man Riverside equalise through Ivan Petrov. Late drama, it is 2-2.' },
  ],
  sw: [
    { eventId: 5, minute: 27, text: 'Northgate wanashambulia kwa kasi na Omar Reyes anamalizia shambulio hilo baada ya pasi ya Tomas Silva. Northgate wanaongoza 1-0.' },
    { eventId: 10, minute: 52, text: 'Riverside wamesawazisha! Sam Adeyemi anapiga krosi na Ivan Petrov anaruka juu na kufunga kwa kichwa. Ni 1-1.' },
    { eventId: 15, minute: 74, text: 'Mpira umeguswa kwa mkono ndani ya eneo la hatari na mwamuzi anaonyesha mkwaju wa penalti kwa Northgate.' },
    { eventId: 16, minute: 75, text: 'VAR inakagua tukio la mkono na kuthibitisha kuwa penalti ni halali.' },
    { eventId: 17, minute: 76, text: 'Tomas Silva anapiga penalti na kufunga. Northgate wanaongoza 2-1.' },
    { eventId: 19, minute: 84, text: 'Jack Rowe anacheza rafu hatari, anapata kadi ya pili ya njano na kutolewa nje. Riverside wamebaki wachezaji kumi.' },
    { eventId: 20, minute: 88, text: 'Omar Reyes anapiga mpira wa kuzunguka kuelekea kona ya juu, lakini kipa anauondoa juu ya lango.' },
    { eventId: 21, minute: 90, text: 'Riverside, wakiwa wachezaji kumi, wanasawazisha kupitia Ivan Petrov. Mchezo unaisha kwa mshangao, ni 2-2.' },
  ],
  fr: [
    { eventId: 5, minute: 27, text: "Northgate part en contre et Omar Reyes conclut après la passe de Tomas Silva. 1-0 pour les locaux." },
    { eventId: 10, minute: 52, text: "Riverside égalise ! Centre de Sam Adeyemi, Ivan Petrov s'élève et marque de la tête. 1-1." },
    { eventId: 15, minute: 74, text: "Main dans la surface, l'arbitre désigne le point de penalty pour Northgate." },
    { eventId: 16, minute: 75, text: 'La VAR vérifie la main et confirme le penalty.' },
    { eventId: 17, minute: 76, text: 'Tomas Silva transforme le penalty. Northgate repasse devant, 2-1.' },
    { eventId: 19, minute: 84, text: 'Jack Rowe tacle dangereusement, reçoit un second carton jaune et est expulsé. Riverside termine à dix.' },
    { eventId: 20, minute: 88, text: 'Omar Reyes enroule sa frappe vers la lucarne, mais le gardien la détourne au-dessus.' },
    { eventId: 21, minute: 90, text: 'À dix contre onze, Riverside égalise par Ivan Petrov. Fin de match haletante, 2-2.' },
  ],
  es: [
    { eventId: 5, minute: 27, text: 'Northgate sale al contraataque y Omar Reyes define tras el pase filtrado de Tomas Silva. 1-0 para el local.' },
    { eventId: 10, minute: 52, text: '¡Riverside empata! Centro de Sam Adeyemi y Ivan Petrov remata de cabeza. 1-1.' },
    { eventId: 15, minute: 74, text: 'Mano dentro del área y el árbitro señala el punto de penalti a favor de Northgate.' },
    { eventId: 16, minute: 75, text: 'El VAR revisa la mano y confirma el penalti.' },
    { eventId: 17, minute: 76, text: 'Tomas Silva lo convierte. Northgate vuelve a ponerse por delante, 2-1.' },
    { eventId: 19, minute: 84, text: 'Jack Rowe entra con dureza, ve la segunda amarilla y es expulsado. Riverside se queda con diez.' },
    { eventId: 20, minute: 88, text: 'Omar Reyes busca la escuadra con un disparo con efecto, pero el portero desvía por encima del travesaño.' },
    { eventId: 21, minute: 90, text: 'Con diez hombres, Riverside empata con gol de Ivan Petrov. Final dramático, 2-2.' },
  ],
};