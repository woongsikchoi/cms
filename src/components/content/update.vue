<template>
  <div class="page-wrapper">
    <!-- /.row -->
    <div class="row">
      <div class="col-lg-12" style="padding-left: 0px;padding-right: 0px;">
        <div class="panel">
          <div class="panel-heading">
            <ol class="breadcrumb" style="margin-bottom:0px;">
              <li><a href="/content-list">内容管理</a></li>
              <li class="active">修改</li>
            </ol>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" @submit.prevent="validateBeforeSubmit">
              <input type="hidden" v-model="content.contentId" />
              <div class="form-group" :class="{'has-error': errors.has('title') }">
                <label for="title" class="col-sm-1 control-label">标题</label>
                <div class="col-sm-10">
                  <input id="title" v-validate="'required|max:50'" class="form-control" name="title" type="text" placeholder="标题" v-model="content.title">
                  <span v-show="errors.has('title')" class="help-block">{{ errors.first('title') }}</span>
                </div>
              </div>
              <div class="form-group" :class="{'has-error': errors.has('tags') }">
                <label for="title" class="col-sm-1 control-label">标签</label>
                <div class="col-sm-10">
                  <input-tag placeholder=" 标签" :tags="content.tags" validate="text"></input-tag>
                  <input id="tags" v-validate="'required|max:100'" class="form-control" style="display: none;" name="tags" type="text" v-model="content.tags"
                    placeholder=" 标签">
                  <span v-show="errors.has('tags')" class="help-block">{{ errors.first('tags') }}</span>
                </div>
              </div>
              <div class="form-group" :class="{'has-error': errors.has('content') }">
                <label for="content" class="col-sm-1 control-label">内容</label>
                <div class="col-sm-10">
                  <vue-html5-editor :content="content.content" :height="300" :show-module-name="showModuleName" @change="updateData" ref="editor"
                    :class="{'v-error': errors.has('content') }"></vue-html5-editor>
                  <input id="content" v-validate="'required|max:10000'" class="form-control" style="display: none;" name="content" type="text"
                    placeholder="内容" v-model="content.content">
                  <span v-show="errors.has('content')" class="help-block">{{ errors.first('content') }}</span>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">确认</button>
                  <button type="button" class="btn btn-danger" @click="goListPage">取消</button>
                </div>
              </div>
            </form>
            <!-- /.row (nested) -->
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
  import Vue from 'vue';
  import axios from 'axios'
  import VueHtml5Editor from 'vue-html5-editor'
  import InputTag from 'vue-input-tag'
  import VeeValidate, {
    Validator
  } from 'vee-validate';
  import zh from 'vee-validate/dist/locale/zh_CN';
  Vue.prototype.$http = axios;
  Validator.addLocale(zh);
  const config = {
    locale: 'zh_CN'
  };
  Vue.use(VeeValidate, config);
  const dictionary = {
    zh_CN: {
      messages: {
        email: () => '这个邮箱有毒'
      },
      attributes: {
        title: '标题',
        tags: '标签',
        content: '内容'
      }
    }
  };
  Validator.updateDictionary(dictionary);

  Vue.use(VueHtml5Editor, {
    showModuleName: false,
    image: {
      sizeLimit: 512 * 1024,
      compress: true,
      width: 500,
      height: 500,
      quality: 80
    }
  })

  export default {
    components: {
      InputTag
    },
    data() {
      return {
        content: {
          contentId: '',
          title: '',
          tags: [],
          content: ''
        }
      }
    },
    mounted: function () {
      var _this = this;
      _this.$nextTick(function () {
        _this.getContent();
      })
    },
    methods: {
      callbackTag: function (v) {
        this.tags = v
      },
      updateData: function (data) {
        this.content.content = data
      },
      getContent: function () {
        var _this = this;
        axios.get('http://127.0.0.1:80/cms/content/' + _this.$route.params.id)
          .then(function (response) {
            _this.content = response.data;
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      goListPage: function () {
        this.$router.push({
          path: '/content-list'
        })
      },
      addContent: function () {

      },
      validateBeforeSubmit() {
        var _this = this;
        this.$validator.validateAll().then((result) => {
          if (result) {
            axios.defaults.headers.put['Content-Type'] = 'application/json';
            axios.put('http://127.0.0.1:80/cms/content/' + _this.$data.content.contentId, _this.serializeData())
              .then(function (response) {
                if (response.status == 200) {
                  _this.$router.push({
                    path: '/content-list'
                  })
                } else {
                  _this.dialog('更新失败');
                  console.log(response);
                }
              })
              .catch(function (error) {
                _this.dialog('更新失败');
              });
            return;
          }
        });
      },
      serializeData: function () {
        return JSON.stringify(this.$data.content)
      },
      dialog: function (msg) {
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
