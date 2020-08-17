<template>
  <div class="header">
    <div class="header-content">
      <div class="header-content-left">
        <span>菜鸟lwq博客</span>
        <span>用于记录前端学习笔记</span>
      </div>
      <div class="header-content-right">
        <span v-for="(item,i) in navList" :key="i" @click="navClk(item)">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      navList: [
        { id: 1, name: "我的博客", url: "/home" },
        { id: 2, name: "Javascript", url: "/javascript" },
        { id: 3, name: "Webpack", url: "/webpack" },
        { id: 4, name: "Typescript", url: "/typescript" },
        { id: 5, name: "Vue", url: "/vue" },
      ],
    };
  },
  methods: {
    navClk(event) {
      event.url !==this.$route.path && this.$router.push(event.url);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #fff;
  padding: 10px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  border-bottom: 1px solid #eee;
}
.header-content {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-content-left {
  flex-grow: 1;
}
.header-content-left span:nth-child(1) {
  font-size: 24px;
  color: #1890ff;
  margin-right: 10px;
}
.header-content-left span:nth-child(2) {
  font-size: 12px;
  color: #999;
}
.header-content-right {
  flex-grow: 2;
  display: flex;
  justify-content: space-around;
  color: #999;
}
.header-content-right span {
  cursor: pointer;
}
</style>
