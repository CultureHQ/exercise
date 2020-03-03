import React from "react";
import { Grid, Panel } from "@culturehq/components";

const TotalEvents: React.FC = () => (
  <Panel>
    <Panel.Heading>
      Total Events
    </Panel.Heading>
    <Panel.Body />
  </Panel>
);

const TotalRSVPs: React.FC = () => (
  <Panel>
    <Panel.Heading>
      Total RSVPs
    </Panel.Heading>
    <Panel.Body />
  </Panel>
);

const RSVPsByDepartment: React.FC = () => (
  <Panel>
    <Panel.Heading>
      RSVPs by Department
    </Panel.Heading>
    <Panel.Body />
  </Panel>
);

const Analytics: React.FC = () => (
  <Grid>
    <Grid.Item sm={6}>
      <TotalEvents />
    </Grid.Item>
    <Grid.Item sm={6}>
      <TotalRSVPs />
    </Grid.Item>
    <Grid.Item>
      <RSVPsByDepartment />
    </Grid.Item>
  </Grid>
);

export default Analytics;
