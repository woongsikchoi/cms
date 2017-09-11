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
            <button @click="update" class="btn btn-default" type="button">保存</button>
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
  import item from './item.vue'
  import axios from 'axios'
  export default {
    data() {
      return {
        confId: '',
        treeData: {}
      }
    },
    components: {
      item
    },
    mounted() {
      this.$nextTick(() => {
        this.getMenu()
      })
    },
    methods: {
      getMenu() {
        axios.get('http://127.0.0.1:80/cms/conf/key/MENU')
          .then(response => {
            this.treeData = JSON.parse(response.data.conf)
            this.confId = response.data.confId
          })
          .catch(error => {
            this.dialog('查询失败')
          })
      },
      update() {
        axios.put('http://127.0.0.1:80/cms/conf/' + this.$data.confId, JSON.stringify({
            'confId': this.$data.confId,
            'conf': JSON.stringify(this.treeData)
          }))
          .then(response => {
            if (response.status != 200) {
              this.dialog('更新失败')
            }
          })
          .catch(error => {
            this.dialog('更新失败')
          })
      },
      dialog(msg) {
        this.$modal.show('dialog', {
          title: '提示',
          text: msg,
          buttons: [{
            title: '取消'
          }]
        })
      }
    }
  }

</script>
