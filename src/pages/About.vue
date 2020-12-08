<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    msg: {
      type: String,
      default: "About"
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
