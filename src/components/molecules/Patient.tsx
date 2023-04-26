import { FC } from 'react';
import { IPatient } from '../../types';

interface Props {
  patient: IPatient;
  setPatient: (e: IPatient) => void;
  deletePatient: (e: string) => void;
}

export const Patient: FC<Props> = ({ patient, setPatient, deletePatient }) => {
  const {date, email, owner, pet, symptoms , id} = patient

  const handleDelete = () => {
    const respt = confirm('¿Desesas eliminar este paciente?')

    if (respt && id) {
      deletePatient(id)
    }
  }

  return (
    <div className='bg-white mt-5 shadow-md m-3 px-5 py-10 rounded-xl'>
      <p className='font-bold mb-2 text-gray-700 uppercase'>
        Nombre: <span className='font-normal normal-case'>{pet}</span>
      </p>
      <p className='font-bold mb-2 text-gray-700 uppercase'>
        Propietario: <span className='font-normal normal-case'>{owner}</span>
      </p>
      <p className='font-bold mb-2 text-gray-700 uppercase'>
        Email: <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-2 text-gray-700 uppercase'>
        Fecha de alta:{' '}
        <span className='font-normal normal-case'>{date}</span>
      </p>
      <p className='font-bold mb-2 text-gray-700 uppercase'>
        Síntomas: <span className='font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='flex justify-between mt-10'>
        <button
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={() => setPatient(patient)}
        >
          Editar
        </button>
        <button
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
          type='button'
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
