import { Component, OnInit } from '@angular/core';
import {WhalesService} from '../services/whales.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any;
  // tslint:disable-next-line:variable-name
  query_input: any;
  // tslint:disable-next-line:variable-name


  constructor(private wx: WhalesService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.query_input = this.form.group({
      species: [''],
      limit: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  getWhales() {
    const args = {
      species: this.query_input.get('species').value,
      limit: this.query_input.get('limit').value
    };
    this.wx.getWhales(args).subscribe(
      response => {
        this.data = response;
      });
  }
}
