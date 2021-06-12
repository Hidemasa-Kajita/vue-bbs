<template>
  <v-col cols="12" sm="6" md="3">
    <v-text-field :label="label" v-model="setValue"> </v-text-field>
  </v-col>
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
