import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../core/values.service';
import { CovidFaelleDto } from '../models/covidFaelleDto';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.scss']
})
export class SecretComponent implements OnInit {
  data: number[] = [];
  labels: string[] = [];

  constructor(private valuesService: ValuesService) { }
  

  ngOnInit(): void {
    this.valuesService.getCovidFaelleBundeslaender()
    .subscribe(x => {
       this.data = x.data;
       this.labels = x.labels;
       
    })
  }

}
