export interface Usuario {
  ok:    boolean;
  token: string;
  name:  string;
  email: string;
}


export interface Verificado {
  name: string;
  token?: string;
}
