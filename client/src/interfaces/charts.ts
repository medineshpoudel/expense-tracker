export interface ChartDataInterface {
  labels: string[];
  datasets: [
    {
      label: string[];
      data: number[];
      boderWidth?: number;
    },
  ];
}

export interface ChartProps {
  data: ChartDataInterface;
  options?: any;
  redraw?: boolean;
  datasetIdKey?: string;
  updateMode?: 'resize' | 'reset' | 'none' | 'hide' | 'show' | 'normal' | 'active';
}
