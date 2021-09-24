const app = Vue.createApp({
  //Captains prop that can be pulled for the .html file
    props: ['captains'],
    data() {
      return {
        showCaptains: true,
        captains: [
          { team: 'Adelaide Crows', captain: 'Taylor Walker', games: '220'},
          { team: 'Brisbane Lions', captain: 'Dayne Zorko', games: '208'},
          { team: 'Carlton Blues', captain: 'Patrick Cripps & Sam Docherty', games: '138 & 122'},
          { team: 'Collingwood Magpies', captain: 'Scott Pendlebury', games: '334'},
          { team: 'Essendon Bombers', captain: 'Dyson Heppell', games: '191'},
          { team: 'Fremantle Dockers', captain: 'Nat Fyfe', games: '202'},
          { team: 'Geelong Cats', captain: 'Joel Selwood', games: '334'},
          { team: 'Gold Coast Suns', captain: 'David Swallow & Jarrod Witts', games: '175 & 122'},
          { team: 'GWS Giants', captain: 'Stephen Coniglio', games: '156'},
          { team: 'Hawthorn Hawks', captain: 'Ben McEvoy', games: '244'},
          { team: 'Melbourne Demons', captain: 'Max Gawn', games: '158'},
          { team: 'North Melbourne Kangaroos', captain: 'Jack Ziebell', games: '239'},
          { team: 'Port Adelaide Power', captain: 'Tom Jonas', games: '182'},
          { team: 'Richmond Tigers', captain: 'Trent Cotchin', games: '268'},
          { team: 'St Kilda Saints', captain: 'Jack Steele', games: '119'},
          { team: 'Sydney Swans', captain: 'Dane Rampe, Josh Kennedy & Luke Parker', games: '190, 279 & 235'},
          { team: 'West Coast Eagles', captain: 'Luke Shuey', games: '221'},
          { team: 'Western Bulldogs', captain: 'Marcus Bontempelli', games: '170'}
        ]
      }
    },
    //Allows the list to be toggled on the click of the button by the user to show or hide the "showCaptains" data
    methods: {
        toggleshowCaptains() {
            this.showCaptains = !this.showCaptains
        }

    }
  })

  app.mount('#captains')
