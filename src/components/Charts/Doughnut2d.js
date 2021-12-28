import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Doughnut2D = ({ data }) => {
  const currentData = {
    chart: {
      caption: "Stars Per Language",
      decimals: 0,
      doughnutRadius: "45%",
      showPercentValues: 0,
      theme: "gammel",
    },
  };
  const newData = { ...currentData, data };
  const chartConfigs = {
    type: "doughnut2D",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: newData,
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut2D;
