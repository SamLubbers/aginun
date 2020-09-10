<template>
  <div>
    <div id="page-content" :style="containerMargin">
      <slot name="page-content" />
    </div>
    <div id="drawer" :style="drawerStyle" :class="{ active: isDrawerOpen }">
      <div>
        <div id="drawer-header">
          <v-btn
            v-if="this.$vuetify.breakpoint.smAndDown"
            icon
            @click="$emit('close-drawer', false)"
          >
            <v-icon color="primary">
              mdi-arrow-left
            </v-icon>
          </v-btn>
          <slot name="drawer-header" />
        </div>
        <div id="drawer-content">
          <slot name="drawer-content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageWithDrawer",
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: false,
    },
    drawerWidth: {
      type: String,
      default: "400px",
    },
  },
  computed: {
    isMobile: function() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    containerMargin: function() {
      if (this.isDrawerOpen && !this.isMobile) {
        return { marginRight: this.drawerWidth };
      }
      return {};
    },
    drawerStyle: function() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return {
          top: this.$store.state.styles.navbarHeight,
          width: this.drawerWidth,
        };
      }
      return {};
    },
  },
};
</script>
<style lang="scss" scoped>
#drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border-left-style: solid;
  border-left-width: 1px;
  z-index: 16;
  transition: transform 0.3s ease-out;
  overflow-y: auto;
  transform: translateX(100%);
  &.active {
    transform: translateX(0);
  }
  .theme--light & {
    background: white;
    border-color: rgba(0, 0, 0, 0.12);
  }
}

#drawer-header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 0.5rem;
}

#drawer-content {
  padding: 0.5rem;
}
</style>
