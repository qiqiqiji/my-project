<template>
<div style="width: 90%; height: 100%;">
  <div id="container">
    <div class="block" v-for="(item,i) in list" :key="i">
      <h1>{{item}}</h1>
    </div>
  </div>
  <button @click="prev" id="btnPrev">prev</button>
  <button @click="next" id="btnNext">next</button>
</div>

</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      list:[
        'img1',
        'img2',
        'img3',
        'img4',
        'img5'
      ],
      height: "300px",
      index: 0,
      scale: 0.83,
      timer:null
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init() {
      var container = document.getElementById("container")
      container.style.height = this.height
      this.getOffSet()
    },
    getOffSet() {
      var blocks = document.getElementsByClassName("block")
      var offsetWidth = document.getElementById("container").offsetWidth
      for (let i = 0, len = blocks.length; i < len; i++) {
        if (i == this.index) {
          var s = blocks[i].style
          var translate = offsetWidth / 4
          s.transform = s.msTransform = s.webkitTransform = `translateX(${translate}px)`
          s.zIndex = 2
        } else {
          var s = blocks[i].style
          var translate = this.calculateTranslate(i, this.index, offsetWidth, blocks.length)
          s.transform = s.msTransform = s.webkitTransform = `translateX(${translate}px) scale(${this.scale})`
          s.zIndex = 1
        }
      }
    },
    calculateTranslate(index, activeIndex, parentWidth, length) {
      if ((activeIndex === 0 && index === length - 1) || (index === activeIndex - 1)) {
        // 左边卡片
        return -(1 - this.scale) * parentWidth / 4;
      }
      if ((activeIndex === length - 1 && index === 0) || (index === activeIndex + 1)) {
        // 右边卡片
        return (2 - this.scale) * (parentWidth / 2)
      }
      // 其他卡片
      return (1 + this.index / 4) * parentWidth
    },

    prev() {
      this.pauseTimer()
      if (this.index > 0) {
        this.index--
      } else {
        this.index = document.getElementsByClassName("block").length - 1
      }
      this.getOffSet()
    },

    next() {
      this.pauseTimer()
      if (this.index < document.getElementsByClassName("block").length - 1) {
        this.index++
      } else {
        this.index = 0
      }
      this.getOffSet()
    },
    pauseTimer() {
      if (this.timer) {
        clearInterval(timer)
      }
    }
  }
};
</script>
<style scoped>
#container {
  position: relative;
  overflow: hidden;
  display: flex;
}

.block {
  position: absolute;
  display: inline-block;
  width: 50%;
  height: 100%;
  transition: all 1s;
  background-color: #99a9bf;
}

h1 {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translateY(-50%);
  padding: 0;
  margin: 0;
}
</style>
