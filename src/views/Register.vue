<template>
  <v-app class="blue-grey darken-3">
    <v-row class="flex-column mt-10" align-content="center">
      <v-col cols="12" sm="6" md="3">
        <v-card elevation="3">
          <v-container>
            <h1>Register</h1>
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
            <TextInputBox
              :label="passwordConfirmInputName"
              :id="passwordConfirmIdName"
              :inputValue.sync="passwordConfirmInputValue"
            />
            <SubmitBtn
              :name="submitBtnName"
              :isDisabled="isDisabled"
              @onSubmit="regist"
            />
            <v-card-text>
              アカウントをお持ちの方は<router-link to="/login"
                >こちら</router-link
              >
            </v-card-text>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import TextInputBox from "../components/TextInputBox.vue";
import SubmitBtn from "../components/SubmitBtn.vue";

export default {
  name: "Register",
  components: {
    TextInputBox,
    SubmitBtn,
  },
  data() {
    return {
      submitBtnName: "Regist",

      idInputName: "ID",
      idofIdName: "userId",
      idInputValue: "",

      passwordInputName: "password",
      passwordIdName: "userPassword",
      passwordInputValue: "",

      passwordConfirmInputName: "passwordConfirm",
      passwordConfirmIdName: "userPasswordConfirm",
      passwordConfirmInputValue: "",
    };
  },
  computed: {
    isDisabled() {
      if (
        this.idInputValue !== "" &&
        this.passwordInputValue !== "" &&
        this.passwordConfirmInputValue !== "" &&
        this.passwordInputValue === this.passwordConfirmInputValue
      ) {
        return false;
      }
      return true;
    },
  },
  methods: {
    regist() {
      // TODO: バリーデーション追加用
      // console.log(this.$refs.regist_form.validate())

      this.$store.dispatch("regist", {
        email: this.idInputValue,
        password: this.passwordInputValue,
      });

      this.$router.push({ name: "Login" });
    },
  },
};
</script>
