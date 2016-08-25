import 'chartjs';
declare let Chart;
import {Directive, ElementRef, Renderer, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Directive({
  selector: '[chart]'
})
export class ChartDirective {
  lineChart: any;
  options: any = {
    scales: {
      yAxes: [{ ticks: { beginAtZero: true } }]
    }
  };
  @Input()
  chData: Observable<IChartData>;
  el: ElementRef;
  type: string = 'line';
  constructor(el: ElementRef, renderer: Renderer) {
    this.el = el;
  }
  ngAfterViewInit() {
    var myArray = this.chData.subscribe((array) => {
      var data =
        {
          labels: array.labels,
          datasets: [{
            label: '# of Expenses',
            data: array.data,
            borderWidth: 1
          }]
        };
      this.renderTheChart(data);
    });
  }

  renderTheChart(data) {
    var ctx: any = this.el.nativeElement.getContext("2d");
    this.lineChart = new Chart(ctx, {
      type: this.type,
      data: data,
      options: this.options
    });
  }
}

export interface IChartData {
  data: any[];
  labels: any[];
}
