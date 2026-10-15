import { CommentaryLanguageCode, MatchRecap } from '../Shared/models/match';

export const MOCK_RECAP: Record<CommentaryLanguageCode, MatchRecap> = {
  en: {
    headline: 'Riverside rescue a late point',
    summary:
      'Northgate FC led twice, through Omar Reyes in the 27th minute and a Tomas Silva penalty in the 76th, but Riverside United refused to lose. Ivan Petrov scored both visitor goals, the second in the 90th minute after Jack Rowe\'s red card had left his side with ten men. The match finished 2-2.',
  },
  sw: {
    headline: 'Riverside waokoa pointi dakika za mwisho',
    summary:
      'Northgate FC waliongoza mara mbili, kupitia Omar Reyes dakika ya 27 na penalti ya Tomas Silva dakika ya 76, lakini Riverside United hawakukata tamaa. Ivan Petrov alifunga mabao yote mawili ya wageni, la pili dakika ya 90 baada ya kadi nyekundu ya Jack Rowe kuwaacha wachezaji kumi. Mchezo ulimalizika 2-2.',
  },
  fr: {
    headline: 'Riverside arrache le nul en toute fin de match',
    summary:
      "Northgate FC a mené deux fois, grâce à Omar Reyes à la 27e minute puis à un penalty de Tomas Silva à la 76e, mais Riverside United n'a pas lâché. Ivan Petrov a inscrit les deux buts des visiteurs, le second à la 90e minute alors que son équipe jouait à dix après l'expulsion de Jack Rowe. Le match s'est terminé sur le score de 2-2.",
  },
  es: {
    headline: 'Riverside rescata un punto sobre la hora',
    summary:
      'Northgate FC se adelantó dos veces, con Omar Reyes en el minuto 27 y un penalti de Tomas Silva en el 76, pero Riverside United no se rindió. Ivan Petrov marcó los dos goles visitantes, el segundo en el minuto 90 con su equipo reducido a diez por la expulsión de Jack Rowe. El partido terminó 2-2.',
  },
};