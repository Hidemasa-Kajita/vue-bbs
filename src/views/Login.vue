<template>
  <v-app class="blue-grey darken-3">
    <v-row class="flex-column mt-10" align-content="center">
      <v-col cols="12" sm="6" md="3">
        <v-card>
          <h1>Login</h1>
          <v-container>
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
            <v-card-text>
              アカウント登録は<router-link to="/register">こちら</router-link
              >から
            </v-card-text>
            <p class="error__msg" v-if="isFailedLogin">
              IDまたはpasswordに誤りがあります。
            </p>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
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
      console.log(user);
      if (
        user.email === this.idInputValue &&
        user.password === this.passwordInputValue
      ) {
        this.$store.dispatch("login", { msg: "success", isSuccess: true });
        this.counter = 0;

        this.$router.push({ name: "Articles" });
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
