import React, { Component, Fragment } from 'react';
import './App.css';
import Customer from './components/Customer'

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Park',
  'birthday': '961222',
  'gender': '남자',
  'job': 'teacher'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'James',
  'birthday': '201222',
  'gender': '남자',
  'job': 'college student'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'Cathey',
  'birthday': '651222',
  'gender': '여자',
  'job': 'doctor'
},
]

class App extends Component {
  render() {
    return (
      <Fragment>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </Fragment>
    );
  }
}

export default App;
