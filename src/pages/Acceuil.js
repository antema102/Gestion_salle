
import React, { Component } from 'react';
import Scheduler from '../compoments/Scheduler/Scheduler';
//import Scheduler from '../compoments/Scheduler';

const data = [
  { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1 },
  { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
];


class Acceuil extends Component {
  render() {
      return (
          <div>
              <div>test</div>
              <div className='scheduler-container'>
                  <Scheduler events={data}/>
              </div>
          </div>
      );
  }
}
export default Acceuil;


// import * as React from 'react';
// import '../assets/style/App.css';



// function Acceuil() {
  
//   return (
//     <div>
  
//     </div>
    
//   );
// }
// export default Acceuil;