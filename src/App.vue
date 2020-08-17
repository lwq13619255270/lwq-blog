<template>
  <div id="app">
     <div class="lwq-head">
      <Header></Header>
    </div>
    <div class="lwq-content">
      <div class="lwq-content-left">
					<router-view></router-view>
      </div>
      <div class="lwq-content-right">
          <RightSide></RightSide>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import RightSide from "./components/right-side";

export default {
  name: "App",
  components: {
    Header,
    RightSide
  },
};
</script>

<style>
.lwq-content {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.lwq-content-left{
  width: calc(100% - 270px);
  background-color: #fff;
  min-height: 100px;
}
.lwq-content-right {
  width: 270px;
  background-color: #fff;
  min-height: 100px;
}
</style>
