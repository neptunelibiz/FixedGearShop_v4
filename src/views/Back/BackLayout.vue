<template>
  <div>
    <shared-alert/>
    <back-header/>
    <div class="container-fluid">
      <div class="row">
        <back-sidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import BackHeader from '@/components/Back/BackHeader.vue';
import BackSidebar from '@/components/Back/BackSidebar.vue';
import SharedAlert from '@/components/Shared/SharedAlert.vue';

export default {
  components: {
    BackHeader,
    BackSidebar,
    SharedAlert,
  },
};
</script>

<style lang="scss" scoped>

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}

</style>
