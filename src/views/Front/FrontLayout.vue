<template>
  <div class="l-stickyFooter">
    <shared-alert/>
    <router-view class="l-stickyFooter__main"/>
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
