<template>
  <v-app class="blue-grey darken-3">
    <v-container>
      <v-btn @click="backArticlePage" color="white">戻る</v-btn>

      <v-card class="mt-10">
        <v-btn class="ma-2" text icon color="black lighten-2">
          <v-icon>mdi-account</v-icon>{{ article.user.name }}
          <!-- TODO: ユーザーの画像を入れたい -->
        </v-btn>

        <v-dialog
          v-if="isEditEnableUser(article.user_id)"
          v-model="editPostDialog"
          persistent
          max-width="600px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              class="ma-2"
              text
              icon
              color="green lighten-2"
              @click="onReflectPost(article.title, article.contents)"
            >
              <v-icon>{{ mdiPencil }}</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Edit Article</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="flex-column" align-content="center">
                  <v-text-field
                    label="title"
                    v-model="editTitle"
                    required
                    counter
                  ></v-text-field>

                  <v-textarea
                    label="contents"
                    v-model="editContents"
                    required
                    counter
                  ></v-textarea>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="onPost()"> Post </v-btn>
              <v-btn color="blue darken-1" text @click="onPostEditCancel()">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-card-title>
          {{ article.title }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          {{ article.contents }}
        </v-card-text>
      </v-card>
      <v-dialog v-model="commentDialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mt-5">
            Add Comment
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Comment</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row class="flex-column" align-content="center">
                <v-textarea
                  label="comment"
                  v-model="comment"
                  required
                  counter
                ></v-textarea>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="onComment()">
              Comment
            </v-btn>
            <v-btn color="blue darken-1" text @click="onCommentCancel()">
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <div class="mt-10" v-for="comment in article.comments" :key="comment.id">
        <v-card>
          <v-card-text>
            {{ comment.contents }}
          </v-card-text>
          <v-divider></v-divider>
          By {{ comment.user.name }}
          <v-dialog
            v-if="isEditCommentEnableUser(comment.user_id)"
            v-model="editCommentDialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="ma-2"
                text
                icon
                color="green lighten-2"
                @click="onReflectComment(comment.contents)"
              >
                <v-icon>{{ mdiPencil }}</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Edit Comment</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row class="flex-column" align-content="center">
                    <v-textarea
                      label="comment"
                      v-model="editComment"
                      required
                      counter
                    ></v-textarea>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="onEditComment(comment.id)"
                >
                  Comment
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="onEditCommentCancel()"
                >
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { mdiPencil } from "@mdi/js";

export default {
  name: "Article",
  data() {
    return {
      commentDialog: false,
      editPostDialog: false,
      editCommentDialog: false,
      comment: "",
      mdiPencil,
      editTitle: "",
      editContents: "",
      editComment: "",
    };
  },
  computed: {
    articleId() {
      return this.$route.params["articleId"];
    },
    article() {
      this.$store.dispatch("getArticle", {
        articleId: Number(this.$route.params["articleId"]),
      });

      return this.$store.getters.article;
    },
    isEditEnableUser() {
      return (userId) => {
        return userId === this.$store.getters.user.id;
      };
    },
    isEditCommentEnableUser() {
      return (userId) => {
        return userId === this.$store.getters.user.id;
      };
    },
  },
  methods: {
    backArticlePage() {
      this.$router.push({ name: "Articles" });
    },
    onComment() {
      this.$store.dispatch("addComment", {
        articleId: Number(this.$route.params["articleId"]),
        contents: this.comment,
      });

      this.comment = "";
      this.commentDialog = false;
    },
    onCommentCancel() {
      this.commentDialog = false;
    },
    onPostEditCancel() {
      this.editPostDialog = false;
    },
    onPost() {
      this.$store.dispatch("editArticle", {
        articleId: Number(this.$route.params["articleId"]),
        title: this.editTitle,
        contents: this.editContents,
      });
      this.editTitle = "";
      this.editContents = "";
      this.editPostDialog = false;
    },
    onEditComment(commentId) {
      this.$store.dispatch("editComment", {
        articleId: Number(this.$route.params["articleId"]),
        commentId,
        contents: this.editComment,
      });
      this.editComment = "";
      this.editCommentDialog = false;
    },
    onEditCommentCancel() {
      this.editCommentDialog = false;
    },
    onReflectPost(title, contents) {
      if (this.editTitle === "" && this.editContents === "") {
        this.editTitle = title;
        this.editContents = contents;
      }
    },
    onReflectComment(contents) {
      if (this.editComment === "") {
        this.editComment = contents;
      }
    },
  },
};
</script>
