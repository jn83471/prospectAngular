import { Component, OnInit } from '@angular/core';
import { ususarioInterface } from '../../interface/usuarioInterface';
import { UrlPeticionsService } from '../../url-peticions.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private service:UrlPeticionsService) { }

  ngOnInit(): void {
    this.service.getUsuarios();
  }
  get():ususarioInterface[]{
    return this.service.data_usuario;
  }
}
