import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Bar3D = ({ data }) => {
  const currentData = {
    chart: {
      caption: "Most Forked Language",
      yAxisName: "Forks",
      xAxisName: "Repos",
      xAxisNameFontSize: "16px",
      yAxisNameFontSize: "16px",
      theme: "gammel",
    },
  };
  const newData = { ...currentData, data };
  const chartConfigs = {
    type: "bar3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: newData,
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
