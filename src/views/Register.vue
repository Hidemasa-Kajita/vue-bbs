<template>
  <v-app>
    <h1>Register</h1>
    <v-form ref="regist_form">
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
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import TextInputBox from "../components/atoms/TextInputBox.vue";
import SubmitBtn from "../components/atoms/SubmitBtn.vue";

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
        id: this.idInputValue,
        password: this.passwordInputValue,
      });

      this.$router.push({ name: "Login" });
    },
  },
};
</script>
