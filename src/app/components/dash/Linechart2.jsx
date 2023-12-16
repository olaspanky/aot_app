import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const [viewMode, setViewMode] = useState('monthly');

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
      gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

      const labels = getLabels(viewMode);
      const data = getData(viewMode);

      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: "Data",
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
           fil:false,
            borderWidth: 4,
            data: data,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: false
          },
          scales: {
            y: {
              ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20
              },
              grid: {
                drawTicks: false,
                zeroLineColor: "transparent"
              }
            },
            x: {
              grid: {
                drawTicks: false,
                display: false
              },
              ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
              }
            }
          }
        }
      });

      return () => {
        myChart.destroy(); // Cleanup the chart on component unmount
      };
    }
  }, [viewMode]);

  const getLabels = (mode) => {
    switch (mode) {
      case 'oneday':
        return [2,4,6,8,10,12,14,16,18,20,22,24];
      case 'oneWeek':
          return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      case 'oneMth':
        return ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];
      case 'threeMth':
        return ["W1", "W2", "W3", "W4", "W5", "W6", "W7","W8","W9","W10"];
      case 'oneyr':
        return ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];
      default:
        return [2,4,6,8,10,12,14,16,18,20,22,24];
    }
  };

  const getData = (mode) => {
    switch (mode) {
      case 'oneday':
        return [100, 120, 150, 170, 180, 170, 160,89,90,90,40,99];
      case 'oneWeek':
        return [50, 70, 90, 110, 130, 110, 100];
      case 'oneMth':
        return [500, 600, 700, 800, 900, 800, 700];
      case 'threeMth':
        return [500, 600, 700, 800, 900, 800, 700];
      case 'oneyr':
        return [500, 600, 700, 800, 900, 800, 700];
      default:
        return [100, 120, 150, 170, 180, 170, 160,89,90,90,40,99];
    }
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div >
     
    <div className='h-[300px] text-[5px] cursor-pointer'>
    <canvas ref={chartRef}></canvas> 

    </div>

    <div className='w-[80] border-b-2'></div>

      
      <div className='flex justify-center align-middle items-center gap-5 my-3'>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[10px] rounded-[12px]' onClick={() => handleViewModeChange('oneday')}>1 day</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[10px] rounded-[12px]' onClick={() => handleViewModeChange('oneWeek')}>1 wk</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[10px] rounded-[12px]' onClick={() => handleViewModeChange('oneMth')}>1 mth</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[10px] rounded-[12px]' onClick={() => handleViewModeChange('threeMth')}>3 mths</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[10px] rounded-[12px]' onClick={() => handleViewModeChange('oneyr')}>1 yr</button>
    </div>


    </div>
  );
};

export default LineChart;
