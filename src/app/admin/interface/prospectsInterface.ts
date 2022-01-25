export interface prospectInterface {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  calle: string;
  numero: string;
  colonia: string;
  cp: string;
  email: string;
  phone: string;
  puesto: number;
  rfc: string;
  Estatus: number;
  has_puesto: HasPuesto;
  created_at: Date;
  updated_at: Date;
  Motive:string;
  hasfiles:any[];
}
export interface HasPuesto {
  id: number;
  display_name: string;
  Estatus: number;
  created_at: Date;
  updated_at: Date;
}
