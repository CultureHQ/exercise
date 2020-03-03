import React from "react";
import { Grid, Panel } from "@culturehq/components";

const Analytics: React.FC = () => (
  <Grid>
    <Grid.Item sm={6}>
      <Panel>
        <Panel.Heading>
          Total Events
        </Panel.Heading>
        <Panel.Body />
      </Panel>
    </Grid.Item>
    <Grid.Item sm={6}>
      <Panel>
        <Panel.Heading>
          Total RSVPs
        </Panel.Heading>
        <Panel.Body />
      </Panel>
    </Grid.Item>
    <Grid.Item>
      <Panel>
        <Panel.Heading>
          RSVPs by Department
        </Panel.Heading>
        <Panel.Body />
      </Panel>
    </Grid.Item>
  </Grid>
);

export default Analytics;
