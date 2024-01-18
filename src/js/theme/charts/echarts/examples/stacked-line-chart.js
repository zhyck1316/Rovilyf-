import {
  echartSetOption,
  handleTooltipPosition,
  tooltipFormatter
} from '../echarts-utils';

const stackedLineChartInit = () => {
  const { getColor, getData } = window.phoenix.utils;
  const $chartEl = document.querySelector('.echart-stacked-line-chart-example');
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  if ($chartEl) {
    const userOptions = getData($chartEl, 'echarts');
    const chart = window.echarts.init($chartEl);
    const getDefaultOptions = () => ({
      tooltip: {
        trigger: 'axis',
        padding: [7, 10],
        backgroundColor: getColor('gray-100'),
        borderColor: getColor('gray-300'),
        textStyle: { color: getColor('dark') },
        borderWidth: 1,
        transitionDuration: 0,
        axisPointer: {
          type: 'none'
        },
        position: (...params) => handleTooltipPosition(params),
        formatter: params => tooltipFormatter(params)
      },
      xAxis: {
        type: 'category',
        data: days,
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: getColor('gray-300'),
            type: 'solid'
          }
        },
        axisTick: { show: false },
        axisLabel: {
          color: getColor('gray-400'),
          margin: 15,
          formatter: value => value.substring(0, 3)
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: getColor('gray-200'),
            type: 'dashed'
          }
        },
        boundaryGap: false,
        axisLabel: {
          show: true,
          color: getColor('gray-400'),
          margin: 15
        },
        axisTick: { show: false },
        axisLine: { show: false }
      },
      series: [
        {
          name: 'Matcha Latte',
          type: 'line',
          symbolSize: 6,
          itemStyle: {
            color: getColor('white'),
            borderColor: getColor('info'),
            borderWidth: 2
          },
          lineStyle: {
            color: getColor('info')
          },
          symbol: 'circle',
          stack: 'product',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Milk Tea',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: getColor('white'),
            borderColor: getColor('success'),
            borderWidth: 2
          },
          lineStyle: {
            color: getColor('success')
          },
          symbol: 'circle',
          stack: 'product',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Cheese Cocoa',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: getColor('white'),
            borderColor: getColor('danger'),
            borderWidth: 2
          },
          lineStyle: {
            color: getColor('danger')
          },
          symbol: 'circle',
          stack: 'product',
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Cheese Brownie',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: getColor('white'),
            borderColor: getColor('warning'),
            borderWidth: 2
          },
          lineStyle: {
            color: getColor('warning')
          },
          symbol: 'circle',
          stack: 'product',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Matcha Cocoa',
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: getColor('white'),
            borderColor: getColor('primary'),
            borderWidth: 2
          },
          lineStyle: {
            color: getColor('primary')
          },
          symbol: 'circle',
          stack: 'product',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ],
      grid: { right: 10, left: 5, bottom: 5, top: 8, containLabel: true }
    });
    echartSetOption(chart, userOptions, getDefaultOptions);
  }
};

export default stackedLineChartInit;
