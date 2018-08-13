<template>
  <div class="home">
    <carousel :img="img"/>
  </div>
</template>

<script>
import carousel from "@/components/carousel/carousel";

export default {
  name: "home",
  data() {
    return {
      img: [1, 2, 3, 4]
    };
  },
  components: {
    carousel
  }
};
</script>
