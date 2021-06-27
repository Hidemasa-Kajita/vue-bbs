<template>
  <v-app>
    <h1>Login</h1>
    <v-container>
      <v-row class="flex-column" justify="center" align-content="center">
        <TextInputBox
          :label="idInputName"
          :id="idofIdName"
          :inputValue.sync="idInputValue"
        />
        <TextInputBox
          :label="passwordInputName"
          :id="passwordIdName"
          :inputValue.sync="passwordInputValue"
        />
        <SubmitBtn :name="submitBtnName" @onSubmit="login" />
      </v-row>
    </v-container>

    {{ isLogin }}
    <p class="error__msg" v-if="isFailedLogin">
      IDまたはpasswordに誤りがあります。
    </p>
  </v-app>
</template>

<script>
import TextInputBox from "../components/atoms/TextInputBox.vue";
import SubmitBtn from "../components/atoms/SubmitBtn.vue";

export default {
  components: {
    TextInputBox,
    SubmitBtn,
  },
  name: "Login",
  data() {
    return {
      counter: 0,

      submitBtnName: "Login",

      idInputName: "ID",
      idofIdName: "userId",
      idInputValue: "",

      passwordInputName: "password",
      passwordIdName: "userPassword",
      passwordInputValue: "",
    };
  },
  computed: {
    isFailedLogin() {
      return !this.$store.getters.isLogin && this.counter > 0;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    login() {
      // TODO: formにバリデーションをして初期値ではログインできないようにする
      const user = this.$store.getters.user;
      if (
        user.id === this.idInputValue &&
        user.password === this.passwordInputValue
      ) {
        this.$store.dispatch("login", { msg: "success", isSuccess: true });
        this.counter = 0;
        return;
      }

      this.$store.dispatch("login", { msg: "failed", isSuccess: false });
      this.counter++;
    },
    handleId(id) {
      this.idInputValue = id;
    },
    handlePassword(password) {
      this.passwordInputValue = password;
    },
  },
};
</script>

<style>
.error__msg {
  color: red;
}
</style>
