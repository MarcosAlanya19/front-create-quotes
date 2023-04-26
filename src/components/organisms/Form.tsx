import { FC, FormEvent, useEffect, useState } from 'react';
import { generateId } from '../../helpers';
import { IPatient } from '../../types';
import { Button, Error } from '../atom';
import { InputLabel, TextAreaLabel } from '../molecules';

interface Props {
  setPatients: (value: IPatient[]) => void;
  patients: IPatient[];
  patient: IPatient;
  setPatient: (value: IPatient) => void;
}

export const Form: FC<Props> = ({ setPatients, setPatient, patients, patient }) => {
  const [pet, setPet] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPet(patient.pet);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if ([pet, owner, email, date, symptoms].includes('')) {
      setError(true);
    } else {
      setError(false);
      const objectPatient: IPatient = {
        // id: generateId(),
        pet,
        owner,
        email,
        date,
        symptoms,
      };

      if (patient.id) {
        // 'Editado'
        objectPatient.id = patient.id;

        const updatePatients = patients.map((patientState) =>
          patientState.id === patient.id ? objectPatient : patientState
        );
        setPatients(updatePatients);
        setPatient({
          date: '',
          email: '',
          id: '',
          owner: '',
          pet: '',
          symptoms: '',
        });
      } else {
        // 'Nuevo'
        objectPatient.id = generateId();
        setPatients([...patients, objectPatient]);
      }

      setPet('');
      setOwner('');
      setEmail('');
      setDate('');
      setSymptoms('');
    }
  };

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade pacientes y{' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form
        autoComplete='off'
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5'
      >
        {error && <Error msg='Todos los campos son obligatorios' />}
        <InputLabel
          id='pet'
          label='Nombre Mascota:'
          type='text'
          placeholder='Nombre de la mascota'
          value={pet}
          onChange={(e) => setPet(e.target.value)}
        />
        <InputLabel
          id='owner'
          label='Nombre Propietario:'
          type='text'
          placeholder='Nombre del Propietario'
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <InputLabel
          id='email'
          label='Email:'
          type='email'
          placeholder='Email contacto propietario'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel
          id='date'
          label='Alta:'
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextAreaLabel
          id='symptoms'
          label='Síntomas:'
          placeholder='Describe los Síntomas'
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />
        <Button
          type='submit'
          value={patient.id ? 'Editar Paciente' : 'Agregar paciente'}
        />{' '}
      </form>
    </div>
  );
};
