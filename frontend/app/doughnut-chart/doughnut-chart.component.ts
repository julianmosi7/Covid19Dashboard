import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { ValuesService } from '../core/values.service';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  data: number[] = [];
  labels: string[] = [];

  constructor(private valuesService: ValuesService) { }

  ngOnInit(): void {
    this.valuesService.getCovidFaelleGender()
    .subscribe(x => {
      this.data = x.data;
      this.labels = x.labels;
      this.doughnutChartData = [this.data];
      this.doughnutChartLabels = this.labels;

      this.data.forEach(x => console.log(x));
      this.labels.forEach(x => console.log(x));
      
    })
  }

  doughnutChartData: MultiDataSet = [];

  doughnutChartLabels: Label[];

  doughnutChartType: ChartType = 'doughnut';

}
