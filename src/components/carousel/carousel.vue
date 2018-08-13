<template>
  <div class="box">
    <button class="leftButton" @click="clickImg('left')" @mousedown="judgeActive('left')">&lt;</button>
    <button class="rightButton" @click="clickImg('right')" @mousedown="judgeActive('right')">&gt;</button>
    <div class="box1" :style="{transform: `translateX(${ translate }px) `,transition: `${ transition }s`}">
      <div v-for="(items, index) in [...img, ...img]" :key="index" class="everyImg" :class="{active: active === index}"
           :style="{transition: `${activeTransition}s`}">
        {{items}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img"],
  data() {
    return {
      active: 1,
      translate: 0,
      scale: 1.5,
      transition: 0.5,
      activeTransition: 0.5,
      startTime: null,
      endTime: null,
      flag: true
    };
  },
  methods: {
    judgeActive(n) {
      this.startTime = new Date().getTime();
      this.flag = true;
      if (this.startTime - this.endTime < 500) {
        this.flag = false;
        return;
      }
      if (n === "left") {
        if (this.active === 1) {
          this.translate = this.img.length * -300;
          this.transition = 0;
          this.active = this.img.length + 1;
          this.activeTransition = 0;
        }
      } else {
        if (this.active === this.img.length * 2 - 2) {
          this.activeTransition = 0;
          this.transition = 0;
          this.active = this.img.length - 2;
          this.translate = (this.img.length - 3) * -300;
        }
      }
    },
    clickImg(n) {
      if (this.flag === false) return;
      if (n === "left") {
        if (this.active === 1) {
          this.active = this.img.length + 1;
        }
        this.translate += 300;
        this.transition = 0.5;
        this.active -= 1;
        this.activeTransition = 0.5;
      } else {
        this.translate += -300;
        this.transition = 0.5;
        this.active += 1;
        this.activeTransition = 0.5;
      }
      this.endTime = new Date().getTime();
    }
  }
};
</script>
<style scoped>
.box {
  width: 900px;
  height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.box1 {
  width: 900px;
  height: 200px;
  position: relative;
  display: flex;
}
.leftButton {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 50%;
}
.rightButton {
  position: absolute;
  z-index: 10;
  right: 0;
  top: 50%;
}
.everyImg {
  background: green;
  min-width: 300px;
  height: 200px;
  text-align: center;
  font-size: 30px;
  line-height: 200px;
  box-sizing: border-box;
  border: 2px solid #000;
}
.active {
  transform: scale(1.5);
  position: relative;
  z-index: 10;
}
</style>
