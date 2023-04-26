export interface IDataForm {
  date: string;
  email: string;
  owner: string;
  pet: string;
  symptoms: string;
}

export interface IPatient extends IDataForm {
  id?: string;
}
