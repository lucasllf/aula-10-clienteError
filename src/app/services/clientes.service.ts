import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from '../domain/cliente';

@Injectable()
export class ClientesService {

  constructor(public http:HttpClient) { }

  insert(obj : Clientes){
    return this.http.post(
      `https://1cfb8af3-d86e-4caa-b917-1dc0858b19fc.mock.pstmn.io/clientes/erro`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
