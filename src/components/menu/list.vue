<template>
  <div class="page-wrapper">
    <!-- /.row -->
    <div class="row">
      <div class="col-lg-12" style="padding-left: 0px;padding-right: 0px;">
        <div class="panel">
          <div class="panel-heading">
            <ol class="breadcrumb" style="margin-bottom:0px;">
              <li><a href="/content-list">菜单管理</a></li>
              <li class="active">列表</li>
            </ol>
          </div>
          <div class="panel-body">
            <item class="item" :model="treeData"></item>
            <button class="btn btn-default" type="button">保存</button>
          </div>
          <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
      </div>
      <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->
  </div>
</template>
<script>
  import item from './item.vue';
  export default {
    data() {
      return {
        treeData: data
      }
    },
    components: {
      item
    }
  }
  var data = {
    id:'-1',
    name: '菜单列表',
    children: [{
        id: '1',
        name: '首页'
      },
      {
        id: '2',
        name: '新闻'
      },
      {
        id: '3',
        name: '国内新闻',
        children: [{
          id: '4',
          name: '24热门'
        }]
      },
      {
        id: '5',
        name: '公告'
      },
      {
        id: '6',
        name: '关于我们'
      }
    ]
  }

</script>
