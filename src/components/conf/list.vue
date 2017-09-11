<template>
  <div class="page-wrapper" style="min-height: 384px;">
    <!-- /.row -->
    <div class="row" id="content-list">
      <div class="col-lg-12" style="padding-left: 0px;padding-right: 0px;">
        <div class="panel">
          <div class="panel-heading">
            <ol class="breadcrumb" style="margin-bottom:0px;">
              <li><a href="/content-list">内容管理</a></li>
              <li class="active">配置列表</li>
            </ol>
          </div>
          <!-- /.panel-heading -->
          <div class="panel-body" style="padding-top: 0px;">
            <div id="dataTables-example_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
              <div class="row">
                <div class="col-sm-12" style="padding-bottom: 15px;">
                  <form class="form-inline">
                    <input type="hidden" name="page" v-model="params.page" />
                    <input type="hidden" name="pageSize" v-model="params.pageSize" />
                    <div class="form-group">
                      <label for="exampleInputName2">标题</label>
                      <input v-model="params.title" type="text" class="form-control" name="title" id="exampleInputName2" placeholder="标题">
                    </div>
                    <button type="button" class="btn btn-default" @click="search">
                      <span class="glyphicon glyphicon-search" aria-hidden="true"></span> 搜索
                    </button>
                    <button type="reset" class="btn btn-default">
                      <span class="glyphicon glyphicon-erase" aria-hidden="true"></span> 重置
                    </button>
                  </form>
                </div>
              </div>
              <div class="row" style="padding-bottom: 10px;">
                <div class="col-sm-12">
                  <button type="button" class="btn btn-default" @click="goAddPage">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 新增
                  </button>
                  <button type="button" class="btn btn-default" @click="batchDelete">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> 删除
                  </button>
                  <button type="button" class="btn btn-default" @click="batchDisable">
                    <span class="glyphicon glyphicon-ban-circle" aria-hidden="true"></span> 禁用
                  </button>
                  <button type="button" class="btn btn-default" @click="batchEnable">
                    <span class="glyphicon glyphicon-ok-circle" aria-hidden="true"></span> 启用
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table width="100%" class="table table-striped table-bordered table-hover dataTable no-footer dtr-inline table-ellipsis"
                    id="dataTables-example" role="grid" aria-describedby="dataTables-example_info" style="width: 100%;">
                    <thead>
                      <tr role="row">
                        <th class="text-center" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending"
                          style="width: 20px;">
                          <div class="checkbox">
                            <label>
                              <input :checked="checkedAllFlag" @click="checkAll" type="checkbox" aria-label="..."/>
                            </label>
                          </div>
                        </th>
                        <th class="text-center" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending"
                          style="width: 30px;">序号</th>
                        <th class="text-center" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending"
                          style="width: 185px;">标题</th>
                        <th class="text-center" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending"
                          style="width: 40px;">状态</th>
                        <th class="text-center" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending"
                          style="width: 60px;">创建人</th>
                        <th class="sorting text-center" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending"
                          style="width: 85px;">创建时间</th>
                        <th class="text-center" tabindex="0" aria-controls="dataTables-example" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending"
                          style="width: 82px;">操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeA " role="row" v-for="(item, index) in data.content">
                        <td class="text-center">
                          <div class="checkbox">
                            <label>
                              <input :checked="item.checked" @click="check(item)" type="checkbox" aria-label="...">
                            </label>
                          </div>
                        </td>
                        <td class="text-center">{{ index+1 }}</td>
                        <td :title="item.title">{{item.title}}</td>
                        <td class="text-center">
                          <span class="label" :class="{ 'label-success': item.status == 1 , 'label-default': item.status == 2 , 'label-warning': item.status == 3 }">{{item.status | analysisStatus}}</span>
                        </td>
                        <td class="text-center">{{item.createBy}}</td>
                        <td class="text-center">{{item.createTime}}</td>
                        <td class="text-center">
                          <span @click="goUpdatePage(item.contentId)" class="glyphicon glyphicon-edit" aria-hidden="true" title="查看"></span>
                          <span @click="confirmationDelete(item.contentId)" class="glyphicon glyphicon-remove" aria-hidden="true" title="删除"></span>
                          <span @click="disabled(item.contentId)" v-if="item.status == 1" class="glyphicon glyphicon-ban-circle" aria-hidden="true"
                            title="禁用"></span>
                          <span @click="enabled(item.contentId)" v-if="item.status == 3" class="glyphicon glyphicon-ok-circle" aria-hidden="true" title="启用"></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
                    <ul class="pagination">
                      <li class="paginate_button previous" :class="{ disabled: params.page == 1 }" @click="newer" aria-controls="dataTables-example"
                        tabindex="0" id="dataTables-example_previous">
                        <span>前一页</span>
                      </li>
                      <li class="paginate_button" :class="{ active: item == params.page }" @click="position(item)" aria-controls="dataTables-example"
                        tabindex="0" v-for="item in page.totalPage">
                        <span>{{ item }}</span>
                      </li>
                      <li class="paginate_button next" :class="{ disabled: params.page == page.totalPage }" @click="older" aria-controls="dataTables-example"
                        tabindex="0" id="dataTables-example_next">
                        <span>下一页</span>
                      </li>
                    </ul>
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
    
    export default {
      data() {
        return {
          params: {
            page: 1,
            pageSize: 10,
            title: '',
            status: '',
            createBy: ''
          },
          data: [],
          page: {
            totalPage: 0
          },
          checkedAllFlag: false
        }
      },
      mounted: function () {
        this.getList();
      },
      methods: {
        batchDelete: function () {
          var _this = this;
          _this.$modal.show('dialog', {
            title: '提示',
            text: '是否删除选中数据',
            buttons: [{
                title: '确认',
                handler: () => {}
              },
              {
                title: '取消'
              }
            ]
          })
        },
        batchDisable: function () {
          var _this = this;
          _this.$modal.show('dialog', {
            title: '提示',
            text: '是否禁用选中数据',
            buttons: [{
                title: '确认',
                handler: () => {}
              },
              {
                title: '取消'
              }
            ]
          })
        },
        batchEnable: function () {
          var _this = this;
          _this.$modal.show('dialog', {
            title: '提示',
            text: '是否启用选中数据',
            buttons: [{
                title: '确认',
                handler: () => {}
              },
              {
                title: '取消'
              }
            ]
          })
        },
        getList: function () {
          var _this = this;
          this.$nextTick(function () {
            _this.search();
          })
        },
        search: function () {
          var _this = this;
          axios.post('http://127.0.0.1:80/cms/content/page', _this.searchParams())
            .then(function (response) {
              if (response.status == 200) {
                _this.data = response.data
                _this.page.totalPage = Math.ceil(_this.data.total / _this.params.pageSize)
                console.log(_this.page.totalPage)
              }
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            });
        },
        confirmationDelete: function (id) {
          var _this = this;
          _this.$modal.show('dialog', {
            title: '提示',
            text: '是否删除此数据',
            buttons: [{
                title: '确认',
                handler: () => {
                  axios.delete('http://127.0.0.1:80/cms/content/' + id)
                    .then(function (response) {
                      _this.search();
                      console.log(response)
                      _this.$modal.hide('dialog');
                    })
                    .catch(function (error) {
                      _this.$modal.show('dialog', {
                        title: '提示',
                        text: '删除失败',
                        buttons: [{
                          title: '取消'
                        }]
                      })
                      console.log(error)
                    });
                }
              },
              {
                title: '取消'
              }
            ]
          })
        },
        disabled: function (id) {
          var _this = this;
          axios.put('http://127.0.0.1:80/cms/content/' + id + '/disabled')
            .then(function (response) {
              _this.search()
            })
            .catch(function (error) {
              _this.dialog('禁用失败');
              console.log(error)
            });
        },
        enabled: function (id) {
          var _this = this;
          axios.put('http://127.0.0.1:80/cms/content/' + id + '/enabled')
            .then(function (response) {
              _this.search()
            })
            .catch(function (error) {
              _this.dialog('启用失败');
              console.log(error)
            });
        },
        delete: function (id) {
          var _this = this;
          axios.delete('http://127.0.0.1:80/cms/content/' + id)
            .then(function (response) {
              if (response.status == 200) {
                _this.search();
              }
              console.log(response)
            })
            .catch(function (error) {
              _this.$modal.show('dialog', {
                title: '提示',
                text: '删除失败',
                buttons: [{
                  title: '取消'
                }]
              })
              console.log(error)
            });
        },
        goAddPage: function () {
          this.$router.push({
            path: 'content-add'
          })
        },
        searchParams: function () {
          return JSON.stringify(this.$data.params)
        },
        goUpdatePage: function (id) {
          this.$router.push({
            name: 'contentUpdate',
            params: {
              id: id
            }
          })
        },
        newer: function () {
          if (this.params.page == 1) {
            return
          }
          this.params.page--
            this.search()
        },
        position: function (i) {
          this.params.page = i;
          this.search()
        },
        older: function () {
          if (this.params.page == this.page.totalPage) {
            return
          }
          this.params.page++
            this.search()
        },
        dialog: function (msg) {
          this.$modal.show('dialog', {
            title: '提示',
            text: msg,
            buttons: [{
              title: '取消'
            }]
          })
        },
        checkAll: function () {
          var _this = this;
          _this.checkedAllFlag = !_this.checkedAllFlag;
          _this.data.content.forEach(function (element) {
            if (typeof element.checked == 'undefined') {
              _this.$set(element, "checked", true);
            } else {
              element.checked = _this.checkedAllFlag;
            }
          });
        },
        check: function (item) {
          let _this = this;
          if (typeof item.checked == 'undefined') {
            _this.$set(item, "checked", true);
          } else {
            item.checked = !item.checked;
          }
          let c = 0;
          _this.data.content.forEach(function (element) {
            if (typeof element.checked == 'undefined' || element.checked == false) {
              _this.checkedAllFlag = false;
            } else {
              c++;
            }
          });
          if (_this.data.content.length == c) {
            _this.checkedAllFlag = true;
          }
        }
      },
      filters: {
        analysisStatus: function (i) {
          var t = '正常'
          switch (i) {
            case '1':
              t = '正常';
              break;
            case '2':
              t = '删除';
              break;
            case '3':
              t = '禁用';
              break;

            default:
              t = '异常';
              break;
          }
          return t;
        }
      },
      watch: {
        data: function (val, oldVal) {
          console.log('new: %s, old: %s', val, oldVal)
        }
      }
    }

  </script>
  <style>
    .table-ellipsis {
      table-layout: fixed;
    }

    .table-ellipsis tbody tr td {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

  </style> 