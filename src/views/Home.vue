<template>
  <div class="home">
    <header>
      <nav class="l-navbar l-navbar--fixedTop container px-0">
        <h1><a class="l-navbar__logo h-text-4" href="#">WheelTalk</a></h1>
        <ul class="l-navbar__menu">
          <li class="l-navbar__menu__item"><a href="#">首頁</a></li>
          <li class="l-navbar__menu__item"><a href="">產品</a></li>
          <li class="l-navbar__menu__item"><a href="#">作者</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="c-hero">
        <video :src="require('@/assets/video/headerVideo.mp4')" type="video/mp4"
        autoplay="true" muted="true" loop="true"></video>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },
};
</script>
