<template>
  <v-btn color="success" :disabled="isDisabled" @click="onSubmit">
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
    isDisabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit");
    },
  },
};
</script>
