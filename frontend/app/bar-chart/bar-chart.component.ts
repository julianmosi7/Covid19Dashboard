import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ValuesService } from '../core/values.service';
import { CovidFaelleDto } from '../models/covidFaelleDto';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  ngOnInit(): void {
   
  }

  load(data: number[]): void{
    this.barChartData = [ {data: this.data, label: 'Anzahl' } ]
    this.barChartLabels = this.labels;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for(const propName in changes){
      if(propName !== "data") continue;
      const change: SimpleChange = changes[propName];
      const current: string = JSON.stringify(change.currentValue);
      const previous: string = JSON.stringify(change.previousValue);
      console.log(`change: ${current}`);
      this.load(change.currentValue);
    }
  }

  barChartData: ChartDataSets[] = [
    { data: this.data, label: 'Anzahl'}
  ];

  barChartLabels: Label[] = this.labels;

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];

  barChartLegend = true;
  barChartPlugins = [];
  barChartType: ChartType = 'bar';

  
}
