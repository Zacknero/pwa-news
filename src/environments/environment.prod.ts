export const environment = {
  production: true,
  api_key: 'cf0f762318e846f5820d5331832bb87d',
  baseUrl: 'https://newsapi.org/v2',
  countries: [
    {
      lang: 'it',
      country: 'it',
      name: 'Italy',
      src: '003-italy'
    },
    {
      lang: 'en',
      country: 'gb',
      name: 'England',
      src: '005-uk'
    },
    {
      lang: 'de',
      country: 'de',
      name: 'Germany',
      src: '002-germany'
    },
    {
      lang: 'fr',
      country: 'fr',
      name: 'France',
      src: '001-france'
    },
    {
      lang: 'es',
      country: 'ar',
      name: 'Argentina',
      src: '006-argentina'
    },
    {
      lang: 'nl',
      country: 'nl',
      name: 'Netherlands',
      src: '007-netherlands'
    },
    {
      lang: 'pt',
      country: 'br',
      name: 'Brazil',
      src: '008-brazil'
    },
    {
      lang: 'ru',
      country: 'ru',
      name: 'Russia',
      src: '004-russia'
    }
  ],
  aboutDescription: [`The web application "PWA News" is used to consult the top news for each country where each article refers to a\n  specific newspaper.The application can be consulted from any device using the responsive technology, which is visible from mobile devices\n  to desktop monitors.\nThe advantage of this application is developed with the "PWA" technology, synonymous with progressive web application, which can be \ninstalled on your device with a simple click without having to go to the store !!\n\nThe project was mainly developed with the Angular v6.2.1 framework, Angular Material UI component library, RxJs library and Firebase for hosting.`]
};
