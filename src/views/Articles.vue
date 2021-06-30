<template>
  <v-app class="blue-grey darken-3">
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mt-5">
              Let`s Post Article
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Post Article</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="flex-column" align-content="center">
                  <v-text-field
                    label="title"
                    v-model="title"
                    required
                    counter
                  ></v-text-field>

                  <v-textarea
                    label="contents"
                    v-model="contents"
                    required
                    counter
                  ></v-textarea>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="onPost()"> Post </v-btn>
              <v-btn color="blue darken-1" text @click="onCancel()">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row class="fill-height">
        <v-col
          cols="12"
          sm="6"
          md="3"
          v-for="article in getArticles"
          :key="article.id"
        >
          <v-card class="mx-auto" outlined hover max-width="100%">
            <v-btn class="ma-2" text icon color="black lighten-2">
              <v-icon>mdi-account</v-icon>{{ article.user.name }}
              <!-- TODO: ユーザーの画像を入れたい -->
            </v-btn>
            <div @click="onLinkDetail(article.id)">
              <v-card-title>
                {{ article.title }}
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                {{ article.contents }}
              </v-card-text>
            </div>
            <v-divider></v-divider>
            <v-btn
              @click="onFavorate(article.id)"
              class="ma-2"
              text
              icon
              :color="atachColor(article.is_favorate)"
            >
              <v-icon>mdi-heart</v-icon>{{ countFavorate(article.id) }}
            </v-btn>
            <v-btn class="ma-2" text icon color="gray lighten-2">
              <v-icon>mdi-message-text</v-icon>{{ countComment(article.id) }}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      dialog: false,
      title: "",
      contents: "",
    };
  },
  computed: {
    getArticles() {
      return this.$store.getters.articles;
    },
    getUserId() {
      return this.$store.getters.user.id;
    },
    atachColor() {
      return (isFavorate) => {
        return isFavorate ? "red lighten-2" : "gray lighten-2";
      };
    },
    countFavorate() {
      return (articleId) => {
        return this.$store.getters.articles.find((v) => v.id === articleId)
          .favorite_count;
      };
    },
    countComment() {
      return (articleId) => {
        return this.$store.getters.articles.find((v) => v.id === articleId)
          .comment_count;
      };
    },
  },
  methods: {
    onLinkDetail(articleId) {
      this.$router.push({ name: "Article", params: { articleId } });
    },
    onFavorate(articleId) {
      this.$store.dispatch("favorate", { articleId });
    },
    onOpenModel() {
      this.isOpenModel = !this.isOpenModel;
    },
    onPost() {
      this.$store.dispatch("postArticle", {
        title: this.title,
        contents: this.contents,
      });
      this.title = "";
      this.contents = "";
      this.dialog = false;
    },
    onCancel() {
      this.dialog = false;
    },
  },
};
</script>
