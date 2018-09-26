import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';

class Chart extends Component {
constructor(props){
  super(props);
  this.state = {
    chartData:{
      labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
      datasets:[{
        label:'Population',
        data:[
          617594,
          181045,
          153060,
          106519,
          105132,
          95072
        ],
        backgroundColor:[
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,206,86,0.6)',
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
          'rgba(255,99,132,0.6)',
          ]
      }]     
    },
    Linechartdata:{
      labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 16, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
    }
  }
}

static defaultProps ={
  displayTitle:true,
  displayLegend: true,
  LegendPosition:'right'
}
  render() {
    return (
      <div className="chart">
         <Bar
              data={this.state.chartData}             
              options={{   
                title:{
                  display:this.props.displayTitle,
                  text:'Largest Cities in Massachesetts',
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.LegendPosition
                }             
              }} 
            />
             <Line
              data={this.state.Linechartdata}             
              options={{   
                title:{
                  display:this.props.displayTitle,
                  text:'Line Chart DataSet',
                  fontSize:25
                },
                legend:{
                  display:this.props.displayLegend,
                  position:this.props.LegendPosition
                }               
              }} 
            />
      </div>
    );
  }
}

export default Chart;
