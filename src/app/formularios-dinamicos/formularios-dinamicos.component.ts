import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-dinamicos',
  templateUrl: './formularios-dinamicos.component.html',
  styleUrls: ['./formularios-dinamicos.component.css']
})
export class FormulariosDinamicosComponent implements OnInit {

  qtdCampos: Array<number> = new Array(1,2,3,4,5);
  quantidadeEscolhida: number;
  formDinamico: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formDinamico = this.fb.group({
      camposDinamicos: this.fb.array([])
    });

  }


  get camposDinamicos() {
    return this.formDinamico.get('camposDinamicos') as FormArray;
  }



  changeCampoDinamico () {

    this.camposDinamicos.clear();

    for (let i = 0; i < this.quantidadeEscolhida; i++) {
      let lstCampoFormGroup = this.fb.group({
        campoTexto: ['', [Validators.required]],
        campoNumerico: ['', [Validators.required]]
      });
      this.camposDinamicos.push(lstCampoFormGroup);
    }
  }

}
