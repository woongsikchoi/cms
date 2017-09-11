<template>
  <div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse">
      <ul class="nav in" id="side-menu">
        <li class="sidebar-search">
          <div class="input-group custom-search-form">
            <input type="text" class="form-control" placeholder="Search...">
            <span class="input-group-btn">
                                <button class="btn btn-default" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                            </span>
          </div>
          <!-- /input-group -->
        </li>
        <li>
          <router-link to="/"><i class="fa fa-dashboard fa-fw"></i> Dashboard</router-link>
        </li>
        <li>
          <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Charts<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/flot">Flot Charts</router-link>
            </li>
            <li>
              <router-link to="/morris">Morris.js Charts</router-link>
            </li>
          </ul>
          <!-- /.nav-second-level -->
        </li>
        <li>
          <router-link to="/content-list"><i class="fa fa-hacker-news fa-fw"></i> 内容管理</router-link>
        </li>
        <li>
          <router-link to="/rule-list"><i class="fa fa-wrench fa-fw"></i> 规则设置</router-link>
        </li>
        <li>
          <router-link to="/menu-list"><i class="fa fa-columns fa-fw"></i> 菜单管理</router-link>
        </li>
          <li>
          <router-link to="/item"><i class="fa fa-columns fa-fw"></i> 菜单测试</router-link>
        </li>
        <li>
          <router-link to="/table"><i class="fa fa-table fa-fw"></i> Tables</router-link>
        </li>
        <li>
          <router-link to="/form"><i class="fa fa-edit fa-fw"></i> Forms</router-link>
        </li>
        <li>
          <a href="#"><i class="fa fa-wrench fa-fw"></i> UI Elements<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/panels-wells">Panels and Wells</router-link>
            </li>
            <li>
              <router-link to="/buttons">Buttons</router-link>
            </li>
            <li>
              <router-link to="/notifications">Notifications</router-link>
            </li>
            <li>
              <router-link to="/typography">Typography</router-link>
            </li>
            <li>
              <router-link to="/icons">Icons</router-link>
            </li>
            <li>
              <router-link to="/grid">Grid</router-link>
            </li>
          </ul>
          <!-- /.nav-second-level -->
        </li>
        <li>
          <a href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a href="#">Third Level <span class="fa arrow"></span></a>
              <ul class="nav nav-third-level collapse">
                <li>
                  <a href="#">Third Level Item</a>
                </li>
                <li>
                  <a href="#">Third Level Item</a>
                </li>
                <li>
                  <a href="#">Third Level Item</a>
                </li>
                <li>
                  <a href="#">Third Level Item</a>
                </li>
              </ul>
              <!-- /.nav-third-level -->
            </li>
          </ul>
          <!-- /.nav-second-level -->
        </li>
        <li>
          <a href="#"><i class="fa fa-files-o fa-fw"></i> Sample Pages<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/blank">Blank Page</router-link>
            </li>
            <li>
              <router-link to="/login">Login Page</router-link>
            </li>
          </ul>
          <!-- /.nav-second-level -->
        </li>
      </ul>
    </div>
    <!-- /.sidebar-collapse -->
  </div>
</template>
<script>
  // export default {
  //   name: 'container-menu'
  // }

</script>
