import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';
import { Statistic, Row, Col, Button } from 'antd';

const DemoLiquid = () => {
  var config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return (
    <div>
     <span className="Todaysvisitorcss">Today's Visitors</span>
<hr/>
<div class="row">
  <div class="col-md-6">
<span className="Activeuserscss"><Statistic title="Active Users" style={{color:'white'}} value={112893} /></span>
</div>
<div class="col-md-6">
<Button style={{ marginTop: 16 }} type="primary">
      Total Visitors
      </Button>
</div>
</div>
  <Liquid {...config} />
  </div>
    );
};

export default DemoLiquid;