<template>
  <div class="home">
    <h1>This is a Vue template</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: {
      type: String,
      default: "Home"
    }
  },
  components: {},
  data: function() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
  mixins: []
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
}
</style>
