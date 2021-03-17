import {Component, Input, OnInit} from '@angular/core';
import {FooService} from '../../services/foo.service';
import {Foo} from '../../models/foo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  foos: Foo[] = [];

  constructor(private  fooService: FooService) { }

  ngOnInit(): void {
    this.cargarFoos();
  }

  cargarFoos(): void{

    this.fooService.list().subscribe(
      data => {
        this.foos = data;
      },
      err => console.log(err)
    );

  }

}
