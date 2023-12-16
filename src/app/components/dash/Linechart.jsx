import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const [viewMode, setViewMode] = useState('monthly');

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const canvasHeight = 313;

      const gradientFill = ctx.createLinearGradient(0, canvasHeight, 0, 0);

      gradientFill.addColorStop(0, "rgba(205, 205, 205, 0.31)");
      gradientFill.addColorStop(0.65, "rgba(255, 125, 0, 0.49)");
      gradientFill.addColorStop(1, "#FF7D00");
      
      


      const labels = getLabels(viewMode);
      const data = getData(viewMode);

      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: "Data",
            fill: true,
            backgroundColor: gradientFill,
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
              zeroLineColor: "transparent",
              drawTicks: false,

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
                fontStyle: "bold",
                beginAtZero: true,

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
     
    <div className='h-[313px] text-[5px] cursor-pointer'>
    <canvas ref={chartRef}></canvas> 

    </div>

    <div className='w-[80] border-b-2 mt-1'></div>


      
      <div className='flex justify-center align-middle items-center gap-5 my-3'>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[12px] rounded-[16px]' onClick={() => handleViewModeChange('oneday')}>1 day</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[12px] rounded-[16px]' onClick={() => handleViewModeChange('oneWeek')}>1 wk</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[12px] rounded-[16px]' onClick={() => handleViewModeChange('oneMth')}>1 mth</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[12px] rounded-[16px]' onClick={() => handleViewModeChange('threeMth')}>3 mths</button>
      <button className='bg-[#FFD4AA] px-4 py-2 text-[12px] rounded-[16px]' onClick={() => handleViewModeChange('oneyr')}>1 yr</button>
    </div>


    </div>
  );
};

export default LineChart;
