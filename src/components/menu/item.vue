<template>
  <div>
    <form class="form-inline">
      <div class="form-group">
        <span v-if="isFolder" :class="[open ? 'fa fa-folder' : 'fa fa-folder-open']"></span>
        <span @click="toggle" @dblclick="changeType" v-show="!model.isEdit">{{model.name}}</span>
        <div class="input-group" v-show="model.isEdit">
          <input type="text" class="form-control input-sm" v-model="model.name">
        </div>
      </div>
      <span @click="showEdit(model.id)" class="glyphicon glyphicon-edit" v-show="!model.isEdit"></span>
      <span @click="edit(model.id)" class="glyphicon glyphicon-ok-circle" v-show="model.isEdit"></span>
      <span @click="remove(model.id)" class="glyphicon glyphicon-remove-sign"></span>

      <ul v-show="open" v-if="isFolder">
        <item class="item" v-for="model in model.children" :model="model"></item>
        <li class="fa fa-plus" @click="addChild"></li>
      </ul>
    </form>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'item',
    props: {
      model: Object
    },
    data() {
      return {
        open: true
      }
    },
    computed: {
      isFolder: function () {
        return this.model.children && this.model.children.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      },
      showEdit: function (id) {
        let _this = this;
        // 获取父组件的model.children
        let parent_model_children = this.$parent.model.children
        // 在父组件model.children里删除
        parent_model_children.forEach(function (element, i) {
          if (id == element.id) {
            if (typeof element.isEdit == 'undefined') {
              _this.$set(element, "isEdit", true);
            } else {
              element.isEdit = true;
            }
          }
        })
      },
      edit: function (id) {
        let _this = this;
        // 获取父组件的model.children
        let parent_model_children = this.$parent.model.children
        // 在父组件model.children里删除
        parent_model_children.forEach(function (element, i) {
          if (id == element.id) {
            if (typeof element.isEdit == 'undefined') {
              _this.$set(element, "isEdit", false);
            } else {
              element.isEdit = false;
            }
          }
        })
      },
      remove: function (id) {
        // 获取父组件的model.children
        let parent_model_children = this.$parent.model.children
        // 在父组件model.children里删除
        parent_model_children.forEach(function (element, i) {
          if (id == element.id) {
            parent_model_children.splice(i, 1)
          }
        })
      },
      changeType: function () {
        if (!this.isFolder) {
          Vue.set(this.model, 'children', [])
          this.addChild()
          this.open = true
        }
      },
      addChild: function () {
        this.model.children.push({
          name: 'new stuff'
        })
      }
    }
  }

</script>
<style>
  .item {
    cursor: pointer;
    padding: 5px;
  }

  .bold {
    font-weight: bold;
  }

  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }

  li {
    list-style: none;
  }

</style>
