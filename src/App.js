import { useState } from 'react'
import './App.css';
import Form from './components/Form'

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name: '', email: '', role: '' });

  const onSubmit = () => {
    setMembers([values, ...members]);
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="App">
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {members.map(member => {
        return (
          <div>
            {member.name}, {member.email}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
