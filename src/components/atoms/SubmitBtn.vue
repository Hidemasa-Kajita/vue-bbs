<template>
  <v-btn color="success" @click="onSubmit">
    {{ name }}
  </v-btn>
</template>

<script>
export default {
  name: "SubmitBtn",
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit");
    },
  },
};
</script>
