//Pathway state search filter using constructors to show the area and the link associated with it.
class State {
    constructor(area, link) {
      this.area = area;
      this.link = link;
    }
  }
  
  const app = new Vue({
    el: '#app',
    data: {
      keyword: '',
      stateList: [
        new State(
          'Victoria', 
          'https://www.aflvic.com.au/', 
        ),
        new State(
            'NSW/ACT', 
            'https://aflnswact.com.au/',
        ),
        new State(
          'Tasmania', 
          'https://www.afltas.com.au/', 
        ),
        new State(
            'Queensland', 
            'https://www.aflq.com.au/', 
        ),
        new State(
            'South Australia', 
            'https://sanfl.com.au/', 
        ),
        new State(
            'Western Australia', 
            'https://www.wafootball.com.au/', 
        ),
        new State(
            'Northern Territory', 
            'https://www.aflnt.com.au/', 
        ),
      ]
    },

    //Computation that on the filtered list the return is indicated by what string(keyword) the user has input and whether that string is included in a listed state
    computed: {
      filteredList() {
        return this.stateList.filter((state) => {
          return state.area.toLowerCase().includes(this.keyword.toLowerCase());
        });
      }
    }
  });