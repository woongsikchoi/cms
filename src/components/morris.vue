<<template>
  <div id="page-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Morris.js Charts</h1>
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Area Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div id="morris-area-chart" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
              <svg height="342" version="1.1" width="428" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                style="overflow: hidden; position: relative;">
                <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc>
                <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                <text x="49.203125" y="308" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M61.703125,308H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="49.203125" y="237.25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">7,500</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M61.703125,237.25H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="49.203125" y="166.5" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">15,000</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M61.703125,166.5H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="49.203125" y="95.75" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">22,500</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M61.703125,95.75H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="49.203125" y="25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30,000</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M61.703125,25H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="339.9658262454435" y="320.5" text-anchor="middle" font-family="sans-serif" font-size="12px"
                  stroke="none" fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan>
                </text>
                <text x="188.60086953219928" y="320.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2011</tspan>
                </text>
                <path fill="#7cb57c" stroke="none" d="M61.703125,257.8807C71.24119076549209,252.69236666666666,90.3173222964763,241.9253958333333,99.8553880619684,237.12736666666666C109.39345382746049,232.3293375,128.4695853584447,226.06474717668488,138.0076511239368,219.49646666666666C147.44204226154312,212.9995805100182,166.31082453675577,186.80528908839776,175.7452156743621,184.86669999999998C185.07593218408263,182.94941408839776,203.7373652035237,202.66302023809524,213.06808171324423,204.07296666666667C222.60614747873632,205.51424523809524,241.68227900972053,195.3117583333333,251.22034477521262,196.27159999999998C260.75841054070474,197.23144166666665,279.83454207168893,228.79010418943534,289.372607837181,211.7517C298.80699897478735,194.898495856102,317.67578125,68.92631666666666,327.1101723876063,60.705166666666656C336.54456352521265,52.48401666666666,355.41334580042525,133.9280789162113,364.8477369380316,145.9825C374.38580270352367,158.16938724954463,393.4619342345079,154.748425,403,157.6704L403,308L61.703125,308Z"
                  fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>
                <path fill="none" stroke="#4da74d" d="M61.703125,257.8807C71.24119076549209,252.69236666666666,90.3173222964763,241.9253958333333,99.8553880619684,237.12736666666666C109.39345382746049,232.3293375,128.4695853584447,226.06474717668488,138.0076511239368,219.49646666666666C147.44204226154312,212.9995805100182,166.31082453675577,186.80528908839776,175.7452156743621,184.86669999999998C185.07593218408263,182.94941408839776,203.7373652035237,202.66302023809524,213.06808171324423,204.07296666666667C222.60614747873632,205.51424523809524,241.68227900972053,195.3117583333333,251.22034477521262,196.27159999999998C260.75841054070474,197.23144166666665,279.83454207168893,228.79010418943534,289.372607837181,211.7517C298.80699897478735,194.898495856102,317.67578125,68.92631666666666,327.1101723876063,60.705166666666656C336.54456352521265,52.48401666666666,355.41334580042525,133.9280789162113,364.8477369380316,145.9825C374.38580270352367,158.16938724954463,393.4619342345079,154.748425,403,157.6704"
                  stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <circle cx="61.703125" cy="257.8807" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="99.8553880619684" cy="237.12736666666666" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="138.0076511239368" cy="219.49646666666666" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="175.7452156743621" cy="184.86669999999998" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="213.06808171324423" cy="204.07296666666667" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="251.22034477521262" cy="196.27159999999998" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="289.372607837181" cy="211.7517" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="327.1101723876063" cy="60.705166666666656" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="364.8477369380316" cy="145.9825" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="403" cy="157.6704" r="2" fill="#4da74d" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <path fill="#a8b4bd" stroke="none" d="M61.703125,282.8507333333333C71.24119076549209,277.1765833333333,90.3173222964763,265.12432083333334,99.8553880619684,260.15413333333333C109.39345382746049,255.18394583333333,128.4695853584447,245.80665191256827,138.0076511239368,243.0892333333333C147.44204226154312,240.4013519125683,166.31082453675577,240.71814415285453,175.7452156743621,238.53293333333335C185.07593218408263,236.3717358195212,203.7373652035237,228.73457664835163,213.06808171324423,225.7036C222.60614747873632,222.6052683150183,241.68227900972053,213.8871708333333,251.22034477521262,214.01569999999998C260.75841054070474,214.14422916666666,279.83454207168893,239.86483752276865,289.372607837181,226.73183333333333C298.80699897478735,213.74157918943533,317.67578125,117.22498333333333,327.1101723876063,109.52266666666665C336.54456352521265,101.82034999999999,355.41334580042525,157.02737399817852,364.8477369380316,165.1133C374.38580270352367,173.28808233151184,393.4619342345079,172.20245,403,174.5655L403,308L61.703125,308Z"
                  fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>
                <path fill="none" stroke="#7a92a3" d="M61.703125,282.8507333333333C71.24119076549209,277.1765833333333,90.3173222964763,265.12432083333334,99.8553880619684,260.15413333333333C109.39345382746049,255.18394583333333,128.4695853584447,245.80665191256827,138.0076511239368,243.0892333333333C147.44204226154312,240.4013519125683,166.31082453675577,240.71814415285453,175.7452156743621,238.53293333333335C185.07593218408263,236.3717358195212,203.7373652035237,228.73457664835163,213.06808171324423,225.7036C222.60614747873632,222.6052683150183,241.68227900972053,213.8871708333333,251.22034477521262,214.01569999999998C260.75841054070474,214.14422916666666,279.83454207168893,239.86483752276865,289.372607837181,226.73183333333333C298.80699897478735,213.74157918943533,317.67578125,117.22498333333333,327.1101723876063,109.52266666666665C336.54456352521265,101.82034999999999,355.41334580042525,157.02737399817852,364.8477369380316,165.1133C374.38580270352367,173.28808233151184,393.4619342345079,172.20245,403,174.5655"
                  stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <circle cx="61.703125" cy="282.8507333333333" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="99.8553880619684" cy="260.15413333333333" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="138.0076511239368" cy="243.0892333333333" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="175.7452156743621" cy="238.53293333333335" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="213.06808171324423" cy="225.7036" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="251.22034477521262" cy="214.01569999999998" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="289.372607837181" cy="226.73183333333333" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="327.1101723876063" cy="109.52266666666665" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="364.8477369380316" cy="165.1133" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="403" cy="174.5655" r="2" fill="#7a92a3" stroke="#ffffff" stroke-width="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <path fill="#2677b5" stroke="none" d="M61.703125,282.8507333333333C71.24119076549209,282.5866,90.3173222964763,284.44260833333334,99.8553880619684,281.7942C109.39345382746049,279.14579166666664,128.4695853584447,262.8360351548269,138.0076511239368,261.66346666666664C147.44204226154312,260.50364348816026,166.31082453675577,274.71505662983424,175.7452156743621,272.4646333333333C185.07593218408263,270.2389399631676,203.7373652035237,245.97829532967035,213.06808171324423,243.75900000000001C222.60614747873632,241.490386996337,241.68227900972053,252.16645833333334,251.22034477521262,254.513C260.75841054070474,256.8595416666667,279.83454207168893,273.67962604735885,289.372607837181,262.53133333333335C298.80699897478735,251.50421771402551,317.67578125,172.7295375,327.1101723876063,165.81136666666666C336.54456352521265,158.89319583333332,355.41334580042525,199.3979123406193,364.8477369380316,207.18596666666667C374.38580270352367,215.059604007286,393.4619342345079,223.14009166666668,403,228.45813333333334L403,308L61.703125,308Z"
                  fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></path>
                <path fill="none" stroke="#0b62a4" d="M61.703125,282.8507333333333C71.24119076549209,282.5866,90.3173222964763,284.44260833333334,99.8553880619684,281.7942C109.39345382746049,279.14579166666664,128.4695853584447,262.8360351548269,138.0076511239368,261.66346666666664C147.44204226154312,260.50364348816026,166.31082453675577,274.71505662983424,175.7452156743621,272.4646333333333C185.07593218408263,270.2389399631676,203.7373652035237,245.97829532967035,213.06808171324423,243.75900000000001C222.60614747873632,241.490386996337,241.68227900972053,252.16645833333334,251.22034477521262,254.513C260.75841054070474,256.8595416666667,279.83454207168893,273.67962604735885,289.372607837181,262.53133333333335C298.80699897478735,251.50421771402551,317.67578125,172.7295375,327.1101723876063,165.81136666666666C336.54456352521265,158.89319583333332,355.41334580042525,199.3979123406193,364.8477369380316,207.18596666666667C374.38580270352367,215.059604007286,393.4619342345079,223.14009166666668,403,228.45813333333334"
                  stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <circle cx="61.703125" cy="282.8507333333333" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="99.8553880619684" cy="281.7942" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="138.0076511239368" cy="261.66346666666664" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="175.7452156743621" cy="272.4646333333333" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="213.06808171324423" cy="243.75900000000001" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="251.22034477521262" cy="254.513" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="289.372607837181" cy="262.53133333333335" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="327.1101723876063" cy="165.81136666666666" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="364.8477369380316" cy="207.18596666666667" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
                <circle cx="403" cy="228.45813333333334" r="2" fill="#0b62a4" stroke="#ffffff" stroke-width="1"
                  style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></circle>
              </svg>
              <div class="morris-hover morris-default-style" style="left: 5.67188px; top: 179px; display: none;">
                <div class="morris-hover-row-label">2010 Q1</div>
                <div class="morris-hover-point" style="color: #0b62a4">
                  iPhone: 2,666
                </div>
                <div class="morris-hover-point" style="color: #7A92A3">
                  iPad: -
                </div>
                <div class="morris-hover-point" style="color: #4da74d">
                  iPod Touch: 2,647
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
            Bar Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div id="morris-bar-chart" style="position: relative; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
              <svg height="342" version="1.1" width="428" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                style="overflow: hidden; position: relative;">
                <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc>
                <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                <text x="32.515625" y="308" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">0</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M45.015625,308H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="32.515625" y="237.25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">25</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M45.015625,237.25H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="32.515625" y="166.5" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">50</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M45.015625,166.5H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="32.515625" y="95.75" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">75</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M45.015625,95.75H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="32.515625" y="25" text-anchor="end" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: end; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">100</tspan>
                </text>
                <path fill="none" stroke="#aaaaaa" d="M45.015625,25H403" stroke-width="0.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="377.4296875" y="320.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2012</tspan>
                </text>
                <text x="275.1484375" y="320.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2010</tspan>
                </text>
                <text x="172.8671875" y="320.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2008</tspan>
                </text>
                <text x="70.5859375" y="320.5" text-anchor="middle" font-family="sans-serif" font-size="12px" stroke="none"
                  fill="#888888" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: sans-serif; font-size: 12px; font-weight: normal;"
                  font-weight="normal" transform="matrix(1,0,0,1,0,7)">
                  <tspan dy="4.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">2006</tspan>
                </text>
                <rect x="51.408203125" y="25" width="17.677734375" height="283" rx="0" ry="0" fill="#0b62a4" stroke="none"
                  fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="72.0859375" y="53.29999999999998" width="17.677734375" height="254.70000000000002" rx="0"
                  ry="0" fill="#7a92a3" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="102.548828125" y="95.75" width="17.677734375" height="212.25" rx="0" ry="0" fill="#0b62a4"
                  stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="123.2265625" y="124.04999999999998" width="17.677734375" height="183.95000000000002" rx="0"
                  ry="0" fill="#7a92a3" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="153.689453125" y="166.5" width="17.677734375" height="141.5" rx="0" ry="0" fill="#0b62a4"
                  stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="174.3671875" y="194.8" width="17.677734375" height="113.19999999999999" rx="0" ry="0" fill="#7a92a3"
                  stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="204.830078125" y="95.75" width="17.677734375" height="212.25" rx="0" ry="0" fill="#0b62a4"
                  stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="225.5078125" y="124.04999999999998" width="17.677734375" height="183.95000000000002" rx="0"
                  ry="0" fill="#7a92a3" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="255.970703125" y="166.5" width="17.677734375" height="141.5" rx="0" ry="0" fill="#0b62a4"
                  stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="276.6484375" y="194.8" width="17.677734375" height="113.19999999999999" rx="0" ry="0" fill="#7a92a3"
                  stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="307.111328125" y="95.75" width="17.677734375" height="212.25" rx="0" ry="0" fill="#0b62a4"
                  stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="327.7890625" y="124.04999999999998" width="17.677734375" height="183.95000000000002" rx="0"
                  ry="0" fill="#7a92a3" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="358.251953125" y="25" width="17.677734375" height="283" rx="0" ry="0" fill="#0b62a4" stroke="none"
                  fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
                <rect x="378.9296875" y="53.29999999999998" width="17.677734375" height="254.70000000000002" rx="0"
                  ry="0" fill="#7a92a3" stroke="none" fill-opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); fill-opacity: 1;"></rect>
              </svg>
              <div class="morris-hover morris-default-style" style="display: none;"></div>
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
            Line Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div id="morris-line-chart"></div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-6 -->
      <div class="col-lg-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            Donut Chart Example
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <div id="morris-donut-chart">
              <svg height="342" version="1.1" width="428" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                style="overflow: hidden; position: relative;">
                <desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with Raphaël 2.2.0</desc>
                <defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></defs>
                <path fill="none" stroke="#0b62a4" d="M214,282.5A109,109,0,0,0,316.9220648142984,209.38939361930437"
                  stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path>
                <path fill="#0b62a4" stroke="#ffffff" d="M214,285.5A112,112,0,0,0,319.75478219450844,210.377175095065L363.66190158776413,225.6877879693554A158.5,158.5,0,0,1,214,332Z"
                  stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <path fill="none" stroke="#3980b5" d="M316.9220648142984,209.38939361930437A109,109,0,0,0,116.22069250765188,125.33147265779414"
                  stroke-width="2" opacity="1" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 1;"></path>
                <path fill="#3980b5" stroke="#ffffff" d="M319.75478219450844,210.377175095065A112,112,0,0,0,113.52951890694504,124.00573337314628L67.3310387614778,101.24720898669122A163.5,163.5,0,0,1,368.38309722144754,227.33409042895653Z"
                  stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <path fill="none" stroke="#679dc6" d="M116.22069250765188,125.33147265779414A109,109,0,0,0,213.96575664063926,282.49999462106564"
                  stroke-width="2" opacity="0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); opacity: 0;"></path>
                <path fill="#679dc6" stroke="#ffffff" d="M113.52951890694504,124.00573337314628A112,112,0,0,0,213.9648141628587,285.4999944730216L213.95020575725985,331.9999921783386A158.5,158.5,0,0,1,71.81632809598918,103.45677446110433Z"
                  stroke-width="3" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path>
                <text x="214" y="163.5" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="15px" stroke="none"
                  fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 15px; font-weight: 800;"
                  font-weight="800" transform="matrix(1.9614,0,0,1.9614,-205.7218,-165.1182)" stroke-width="0.5098432721712538">
                  <tspan dy="5.25" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">In-Store Sales</tspan>
                </text>
                <text x="214" y="183.5" text-anchor="middle" font-family="&quot;Arial&quot;" font-size="14px" stroke="none"
                  fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: middle; font-family: Arial; font-size: 14px;"
                  transform="matrix(2.3441,0,0,2.3441,-287.6134,-236.2231)" stroke-width="0.42660550458715596">
                  <tspan dy="4.75" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">30</tspan>
                </text>
              </svg>
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
            Morris.js Usage
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body">
            <p>Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent
              version of Morris.js which includes the resize function, which makes the charts fully responsive. The documentation
              for Morris.js is available on their website, <a target="_blank" href="http://morrisjs.github.io/morris.js/">http://morrisjs.github.io/morris.js/</a>.</p>
            <a target="_blank" class="btn btn-default btn-lg btn-block" href="http://morrisjs.github.io/morris.js/">View Morris.js Documentation</a>
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
