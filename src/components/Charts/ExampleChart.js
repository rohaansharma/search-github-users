import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ExampleChart = ({ data }) => {
  const currentData = {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
  };
  const newData = { ...currentData, data };
  console.log(currentData);
  const chartConfigs = {
    type: "bar3d",
    width: 600,
    height: 400,
    dataFormat: "json",
    dataSource: newData,
  };
  return <ReactFC {...chartConfigs} />;
};

export default ExampleChart;
