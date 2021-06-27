<template>
  <v-btn icon>
    <v-icon>{{ type }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      require: true,
    },
  },
};
</script>
