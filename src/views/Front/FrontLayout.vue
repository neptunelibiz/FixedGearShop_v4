<template>
  <div>
    <shared-alert/>
    <router-view/>
    <front-footer/>
  </div>
</template>

<script>
// components
import SharedAlert from '@/components/Shared/SharedAlert.vue';
import FrontFooter from '@/components/Front/FrontFooter.vue';

export default {
  components: {
    SharedAlert,
    FrontFooter,
  },
};
</script>
