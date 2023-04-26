import { FC } from 'react';
import { IPatient } from '../../types';
import { Patient } from '../molecules';

interface Props {
  patients: IPatient[];
  setPatient: (e: IPatient) => void;
  deletePatient: (e: string) => void;
}

export const ListPatients: FC<Props> = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto'>
      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
            Administra tus{' '}
            <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
          </p>

          {patients.map((patient) => (
            <Patient
              deletePatient={deletePatient}
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
            Comienza agregando pacientes{' '}
            <span className='text-indigo-600 font-bold'>
              y aparecerán en este lugar.
            </span>
          </p>
        </>
      )}
    </div>
  );
};
