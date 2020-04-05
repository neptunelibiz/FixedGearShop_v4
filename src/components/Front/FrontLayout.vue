<template>
  <div>
    <front-header/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
// components
import FrontHeader from '@/components/Front/FrontHeader.vue';

export default {
  components: {
    FrontHeader,
  },
};
</script>
