import { useState, useEffect } from 'react';
import { Form, Header, ListPatients } from './components/organisms';
import { IPatient } from './types';

function App() {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [patient, setPatient] = useState<IPatient>({
    date: '',
    email: '',
    id: '',
    owner: '',
    pet: '',
    symptoms: '',
  });

  useEffect(() => {
    const getLS = () => {
      try {
        const patientsLS = JSON.parse(localStorage.getItem('patients') || '[]');
        if (Array.isArray(patientsLS) && patientsLS.length > 0) {
          setPatients(patientsLS);
        }
      } catch (error) {
        console.error('Error al recuperar los datos del localStorage:', error);
        setPatients([]);
      }
    };
    getLS();
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('patients', JSON.stringify(patients));
    } catch (error) {
      console.error('Error al almacenar los datos en el localStorage:', error);
    }
  }, [patients]);

  const deletePatient = (id: string) => {
    const updatePatient = patients.filter((patient) => patient.id !== id);
    setPatients(updatePatient);
  };

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 md:flex'>
        <Form
          setPatients={setPatients}
          patients={patients}
          setPatient={setPatient}
          patient={patient}
        />
        <ListPatients
          deletePatient={deletePatient}
          patients={patients}
          setPatient={setPatient}
        />
      </div>
    </div>
  );
}

export default App;
