<template>
  <v-text-field :label="label" v-model="setValue"> </v-text-field>
</template>

<script>
export default {
  name: "TextInputBox",
  props: {
    label: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    id: {
      type: String,
      require: true,
    },
    inputValue: {
      type: String,
      require: true,
    },
  },
  computed: {
    setValue: {
      get() {
        return this.inputValue;
      },
      set(newValue) {
        return this.$emit("update:inputValue", newValue);
      },
    },
  },
};
</script>
