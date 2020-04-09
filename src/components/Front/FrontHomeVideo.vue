<template>
  <section class="videoContainer" :style="containerStyle">
    <video class="videoContainer__video d-none d-md-block" type="video/mp4"
    autoplay="true" muted="true" loop="true"
    :src="require('@/assets/video/headerVideo.mp4')"/>
    <div class="videoContainer__text">
      <h2 class="mb-3">
        即日起輸入 FixedGearLove<br/>
        享受最高 20% 折扣
      </h2>
      <router-link to="/category" class="btn btn-lg btn-danger px-5">前往購買</router-link>
    </div>
  </section>
</template>

<script>

export default {
  name: 'FrontHomeVideo',
  props: {
    containerStyle: String,
  },
};
</script>


<style lang="scss" scoped>
.videoContainer {
  position: relative;
  overflow: hidden;
  background-image: url('~@/assets/images/section/section_1.png');
  background-attachment: fixed;
  background-position: left;
  background-size: cover;
  .videoContainer__video {
    position: absolute;
    right: 0;
    left: 0;
    bottom:0;
  }
  .videoContainer__text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
  }
}
</style>
