/**
 * HARIS DATA STUDIO - Data Visualizations & Chart Engine
 * Powered by Chart.js & Canvas
 */

const HarisCharts = {
  heroChartInstance: null,
  projectChartInstance: null,

  initHeroChart() {
    const ctx = document.getElementById('heroChartCanvas');
    if (!ctx) return;

    // Destroy existing instance if present
    if (this.heroChartInstance) {
      this.heroChartInstance.destroy();
    }

    const monthlyData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      revenue: [42, 58, 65, 72, 85, 94, 110, 128],
      growth: [12, 18, 14, 22, 28, 25, 32, 38]
    };

    this.heroChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: monthlyData.labels,
        datasets: [
          {
            type: 'line',
            label: 'Growth Trend (%)',
            data: monthlyData.growth,
            borderColor: '#00B4D8',
            borderWidth: 3,
            pointBackgroundColor: '#00B4D8',
            pointRadius: 4,
            tension: 0.4,
            yAxisID: 'y1'
          },
          {
            type: 'bar',
            label: 'Revenue ($K)',
            data: monthlyData.revenue,
            backgroundColor: 'rgba(3, 4, 94, 0.85)',
            hoverBackgroundColor: '#03045E',
            borderRadius: 6,
            yAxisID: 'y'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 12,
              font: { family: 'Inter', size: 12, weight: '600' },
              color: '#03045E'
            }
          },
          tooltip: {
            backgroundColor: '#03045E',
            titleFont: { family: 'Inter', size: 13, weight: '700' },
            bodyFont: { family: 'Inter', size: 12 },
            padding: 10,
            cornerRadius: 8
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { family: 'Inter', size: 11 }, color: '#3D486B' }
          },
          y: {
            grid: { color: 'rgba(3, 4, 94, 0.06)' },
            ticks: {
              font: { family: 'Inter', size: 11 },
              color: '#3D486B',
              callback: (val) => '$' + val + 'k'
            }
          },
          y1: {
            position: 'right',
            grid: { display: false },
            ticks: {
              font: { family: 'Inter', size: 11 },
              color: '#00B4D8',
              callback: (val) => val + '%'
            }
          }
        }
      }
    });
  },

  updateHeroPeriod(period) {
    if (!this.heroChartInstance) return;

    let labels, revenue, growth;
    if (period === 'quarterly') {
      labels = ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026'];
      revenue = [165, 251, 332, 410, 485, 540];
      growth = [15, 24, 30, 35, 42, 48];
    } else {
      labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
      revenue = [42, 58, 65, 72, 85, 94, 110, 128];
      growth = [12, 18, 14, 22, 28, 25, 32, 38];
    }

    this.heroChartInstance.data.labels = labels;
    this.heroChartInstance.data.datasets[0].data = growth;
    this.heroChartInstance.data.datasets[1].data = revenue;
    this.heroChartInstance.update();
  },

  renderCaseStudyChart(canvasId, chartConfig) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;

    if (this.projectChartInstance) {
      this.projectChartInstance.destroy();
    }

    const datasets = chartConfig.datasets.map(ds => ({
      label: ds.label,
      data: ds.data,
      backgroundColor: ds.color || '#00B4D8',
      borderColor: ds.color || '#00B4D8',
      borderWidth: 2,
      borderRadius: 6
    }));

    this.projectChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartConfig.labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: datasets.length > 1,
            labels: { font: { family: 'Inter', size: 12, weight: '600' }, color: '#03045E' }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 11 }, color: '#3D486B' } },
          y: { grid: { color: 'rgba(3, 4, 94, 0.06)' }, ticks: { font: { family: 'Inter', size: 11 }, color: '#3D486B' } }
        }
      }
    });
  }
};
