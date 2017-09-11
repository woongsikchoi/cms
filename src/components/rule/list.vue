<<template>
  <div class="page-wrapper" style="min-height: 384px;">
    <!-- /.row -->
    <div class="row" id="content-list">
      <div class="col-lg-12" style="padding-left: 0px;padding-right: 0px;">
        <div class="panel">
          <div class="panel-heading">
            <ol class="breadcrumb" style="margin-bottom:0px;">
              <li><a href="/content-list">内容管理</a></li>
              <li class="active">规则设置</li>
            </ol>
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body" style="padding-top: 0px;">
            <div id="dataTables-example_wrapper" class="dataTables_wrapper dt-bootstrap no-footer">
              <div class="row">
                <div class="col-sm-12">
                  <!-- Nav tabs -->
                  <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">内容</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
                    <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
                  </ul>

                  <!-- Tab panes -->
                  <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">
                      <div class="row">
                        <div class="col-sm-12" style="padding-top: 15px;">
                          <form class="form-horizontal">
                            <div class="form-group">
                              <label for="inputEmail3" class="col-sm-2 control-label">配置项名称</label>
                              <div class="col-sm-9">
                                <input v-model="key" type="text" class="form-control" id="inputEmail3" placeholder="配置项名称">
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="inputPassword3" class="col-sm-2 control-label">配置项值</label>
                              <div class="col-sm-9">
                                <tree-view :data="jsonSource" :options="treeOptions" @change-data="onChangeData"></tree-view>
                              </div>
                            </div>
                            <div class="form-group">
                              <div class="col-sm-offset-2 col-sm-9">
                                <button type="submit" class="btn btn-default">更新</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile">...</div>
                    <div role="tabpanel" class="tab-pane" id="messages">...</div>
                    <div role="tabpanel" class="tab-pane" id="settings">...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-12 -->
    </div>
  </div>
  </template>
  <script>
    import Vue from 'vue'
    import axios from 'axios'
    import TreeView from "vue-json-tree-view"
    Vue.use(TreeView)
    Vue.prototype.$http = axios;
    axios.defaults.headers.put['Content-Type'] = 'application/json';
    export default {
      data() {
        let _this = this;
        return {
          key: 'meun-list',
          jsonSource: [{
            'name': '首页',
            'value': 'home'
          }, {
            'name': '新闻管理',
            'value': 'news'
          }],
          treeOptions: {
            maxDepth: 4,
            rootObjectKey: 'meun-list',
            modifiable: false
          }
        }
      },
      mounted: function () {},
      methods: {
        onChangeData: function (data) {
          console.log(JSON.stringify(data))
        }
      },
      filters: {},
      watch: {}
    }

  </script>
  <style>
    .tree-view-item {
      font-family: monospace;
      font-size: 14px;
      margin-left: 18px;
    }

    .tree-view-item-grouping {
      cursor: pointer;
      position: relative;
    }

    .tree-view-item-key {
      font-weight: bold;
    }

    .tree-view-item-value {
      color: #6636ff;
    }

    .tree-view-item-key-with-chevron {
      color: #e694f4;
      padding-left: 14px;
    }

    .tree-view-item-key-with-chevron.opened::before {
      top: 4px;
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
    }

    .tree-view-item-key-with-chevron::before {
      color: #444;
      content: '\25b6';
      font-size: 10px;
      left: 1px;
      position: absolute;
      top: 3px;
      transition: -webkit-transform .1s ease;
      transition: transform .1s ease;
      transition: transform .1s ease, -webkit-transform .1s ease;
      -webkit-transition: -webkit-transform .1s ease;
    }

    .tree-view-item-hint {
      color: #ccc
    }

  </style>
