<<template>
  <div class="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Flot</h1>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            Line Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div class="flot-chart">
              <div class="flot-chart-content" id="flot-line-chart" style="padding: 0px; position: relative;">
                <canvas class="flot-base" width="1836" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 918px; height: 400px;"></canvas>
                <div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                  <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 25px; text-align: center;">0</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 98px; text-align: center;">1</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 172px; text-align: center;">2</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 245px; text-align: center;">3</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 319px; text-align: center;">4</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 392px; text-align: center;">5</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 466px; text-align: center;">6</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 539px; text-align: center;">7</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 613px; text-align: center;">8</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 686px; text-align: center;">9</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 757px; text-align: center;">10</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 70px; top: 382px; left: 830px; text-align: center;">11</div>
                  </div>
                  <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 338px; left: 2px; text-align: right;">-1.0</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 261px; left: 2px; text-align: right;">-0.5</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 185px; left: 7px; text-align: right;">0.0</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 108px; left: 7px; text-align: right;">0.5</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 31px; left: 7px; text-align: right;">1.0</div>
                  </div>
                </div>
                <canvas class="flot-overlay" width="1836" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 918px; height: 400px;"></canvas>
                <div class="legend">
                  <div style="position: absolute; width: 45px; height: 32px; top: 13px; right: 13px; background-color: rgb(255, 255, 255); opacity: 0.85;">
                  </div>
                  <table style="position:absolute;top:13px;right:13px;;font-size:smaller;color:#545454">
                    <tbody>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(237,194,64);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">sin(x)</td>
                      </tr>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(175,216,248);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">cos(x)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-12 -->
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Pie Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div class="flot-chart">
              <div class="flot-chart-content" id="flot-pie-chart" style="padding: 0px; position: relative;">
                <canvas class="flot-base" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
                <canvas class="flot-overlay" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
                <div class="legend">
                  <div style="position: absolute; width: 57px; height: 64px; top: 5px; right: 5px; background-color: rgb(255, 255, 255); opacity: 0.85;">
                  </div>
                  <table style="position:absolute;top:5px;right:5px;;font-size:smaller;color:#545454">
                    <tbody>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(237,194,64);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">Series 0</td>
                      </tr>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(175,216,248);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">Series 1</td>
                      </tr>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(203,75,75);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">Series 2</td>
                      </tr>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(77,167,77);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">Series 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Multiple Axes Line Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div class="flot-chart">
              <div class="flot-chart-content" id="flot-line-chart-multi" style="padding: 0px; position: relative;">
                <canvas class="flot-base" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
                <div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                  <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 47px; top: 366px; left: 4px; text-align: center;">Jan 2007</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 47px; top: 366px; left: 55px; text-align: center;">Apr 2007</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 47px; top: 366px; left: 108px; text-align: center;">Jul 2007</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 47px; top: 366px; left: 160px; text-align: center;">Oct 2007</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 47px; top: 366px; left: 212px; text-align: center;">Jan 2008</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 47px; top: 366px; left: 264px; text-align: center;">Apr 2008</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 47px; top: 366px; left: 318px; text-align: center;">Jul 2008</div>
                  </div>
                  <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 353px; left: 15px; text-align: right;">0</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 294px; left: 8px; text-align: right;">25</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 235px; left: 8px; text-align: right;">50</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 177px; left: 8px; text-align: right;">75</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 118px; left: 2px; text-align: right;">100</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 59px; left: 2px; text-align: right;">125</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 0px; left: 2px; text-align: right;">150</div>
                  </div>
                  <div class="flot-y-axis flot-y2-axis yAxis y2Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 353px; left: 390px;">0.600€</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 294px; left: 390px;">0.633€</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 235px; left: 390px;">0.667€</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 177px; left: 390px;">0.700€</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 118px; left: 390px;">0.733€</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 59px; left: 390px;">0.767€</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 0px; left: 390px;">0.800€</div>
                  </div>
                </div>
                <canvas class="flot-overlay" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
                <div class="legend">
                  <div style="position: absolute; width: 143px; height: 32px; bottom: 44px; left: 32px; background-color: rgb(255, 255, 255); opacity: 0.85;">
                  </div>
                  <table style="position:absolute;bottom:44px;left:32px;;font-size:smaller;color:#545454">
                    <tbody>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(237,194,64);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">Oil price ($)</td>
                      </tr>
                      <tr>
                        <td class="legendColorBox">
                          <div style="border:1px solid #ccc;padding:1px">
                            <div style="width:4px;height:0;border:5px solid rgb(175,216,248);overflow:hidden"></div>
                          </div>
                        </td>
                        <td class="legendLabel">USD/EUR exchange rate</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Moving Line Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div class="flot-chart">
              <div class="flot-chart-content" id="flot-line-chart-moving" style="padding: 0px; position: relative;">
                <canvas class="flot-base" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
                <div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                  <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 361px; left: 34px; text-align: right;">0</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 298px; left: 27px; text-align: right;">20</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 234px; left: 27px; text-align: right;">40</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 171px; left: 27px; text-align: right;">60</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 107px; left: 27px; text-align: right;">80</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 44px; left: 21px; text-align: right;">100</div>
                  </div>
                </div>
                <canvas class="flot-overlay" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
              </div>
            </div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Bar Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div class="flot-chart">
              <div class="flot-chart-content" id="flot-bar-chart" style="padding: 0px; position: relative;">
                <canvas class="flot-base" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
                <div class="flot-text" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; font-size: smaller; color: rgb(84, 84, 84);">
                  <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 53px; top: 382px; left: 68px; text-align: center;">12/05</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 53px; top: 382px; left: 128px; text-align: center;">12/07</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 53px; top: 382px; left: 188px; text-align: center;">12/09</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 53px; top: 382px; left: 248px; text-align: center;">12/11</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 53px; top: 382px; left: 308px; text-align: center;">12/13</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; max-width: 53px; top: 382px; left: 368px; text-align: center;">12/15</div>
                  </div>
                  <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;">
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 369px; left: 21px; text-align: right;">0</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 316px; left: 2px; text-align: right;">1000</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 264px; left: 2px; text-align: right;">2000</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 211px; left: 2px; text-align: right;">3000</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 158px; left: 2px; text-align: right;">4000</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 105px; left: 2px; text-align: right;">5000</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 53px; left: 2px; text-align: right;">6000</div>
                    <div class="flot-tick-label tickLabel" style="position: absolute; top: 0px; left: 2px; text-align: right;">7000</div>
                  </div>
                </div>
                <canvas class="flot-overlay" width="856" height="800" style="direction: ltr; position: absolute; left: 0px; top: 0px; width: 428px; height: 400px;"></canvas>
              </div>
            </div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            Flot Charts Usage
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <p>Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive
              features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the
              user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize
              plugin for fully responsive charts. The documentation for Flot Charts is available on their website, <a target="_blank"
                href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p>
            <a target="_blank" class="btn btn-default btn-lg btn-block" href="http://www.flotcharts.org/">View Flot Charts Documentation</a>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
    </div>
    <!-- /.row -->
  </div>
  </template>
