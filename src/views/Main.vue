<style lang="less">
@import "./main.less";
</style>
<template>
    <div class="main" :class="{'main-hide-text': shrink}">
        <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
            <shrinkable-menu :shrink="shrink" :menu-list="menuList">
                <div slot="top" class="logo-con">
                    <img v-show="!shrink" src="../images/312x85.png" key="max-logo" @click="logocon" />
                    <img v-show="shrink" src="../images/91x91.png" key="min-logo" @click="logocon" />
                </div>
            </shrinkable-menu>
        </div>
        <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
            <div class="main-header">
                <div class="navicon-con">
                    <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                </div>
            </div>
        </div>
        <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
            <div class="single-page">
                <router-view>
                </router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Cookies from "js-cookie";
import shrinkableMenu from "./main-components/shrinkable-menu/shrinkable-menu.vue";

export default {
  components: {
    shrinkableMenu
  },
  data() {
    return {
      shrink: false,
      userName: ""
    };
  },
  computed: {
    menuList() {
      return this.$store.state.app.menuList;
    }
  },
  methods: {
    init() {
      this.userName = Cookies.get("user");
    },
    toggleClick() {
      this.shrink = !this.shrink;
    },
    handleClickUserDropdown(name) {
      this.$router.push({
        name: "login"
      });
    },
    logocon() {
      this.$router.push({
        name: "home_index"
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
