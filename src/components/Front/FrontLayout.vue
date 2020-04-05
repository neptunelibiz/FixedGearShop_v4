<template>
  <div>
    <shared-alert/>
    <front-header/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
// components
import FrontHeader from '@/components/Front/FrontHeader.vue';
import SharedAlert from '@/components/Shared/SharedAlert.vue';

export default {
  components: {
    FrontHeader,
    SharedAlert,
  },
};
</script>
