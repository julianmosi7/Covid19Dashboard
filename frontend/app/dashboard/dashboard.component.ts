import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../core/values.service';
import { CovidFaelleDto } from '../models/covidFaelleDto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: number[] = [];
  labels: string[] = [];

  constructor(private valuesService: ValuesService) { }
  
  ngOnInit(): void {
    this.valuesService.getCovidFaelleAltersgruppe()
    .subscribe(x => {
      this.data = x.data;
      this.labels = x.labels;
    
      this.data.forEach(x => console.log(x));
      this.labels.forEach(x => console.log(x));
    })
  }

}
