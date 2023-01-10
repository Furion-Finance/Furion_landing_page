<style lang="scss" scoped></style>

<template>
  <div>
    <div class="relative">
      <Admin-header></Admin-header>
      <nuxt/>

    </div>

    <NetworkInformationDialog />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NetworkInformationDialog from '@/components/Dialog/NetworkInformationDialog.vue';

export default {
    head: {
        meta: [
            {
              hid: "viewport",
              name: "viewport",
              content: "width=1440,user-scalable=no",
            },
        ],
    },
    computed: {
        ...mapState(["chainId"]),
        ...mapState(["userInfo"]),
    },
    components: { NetworkInformationDialog }
};
</script>
