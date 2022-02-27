import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts/lib/base-chart.directive';
import { Color } from 'ng2-charts/lib/color';
import { ValuesService } from '../core/values.service';
import { CovidFaelleDto } from '../models/covidFaelleDto';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  data: number[] = [];
  labels: string[] = [];
 
 
  constructor(private valesService: ValuesService) {}

  ngOnInit(): void{
      this.valesService.getCovidFaelle()
      .subscribe(x => {
        this.data = x.data;
        this.labels = x.labels
        this.lineChartData = [ {data: this.data, label: 'Anzahl' } ]
        this.lineChartLabels = this.labels;
      })

      
  }

  lineChartData: ChartDataSets[] = [
    { data: this.data, label: 'Daily Infections'},
  ];

  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'lightblue'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

 
}
