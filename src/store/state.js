// 状態定義

export const state = {
  isLogin: false,
  user: {
    id: 1,
    email: "d",
    password: "d",
    name: "kajita",
  },
  article: {},
  articles: [
    {
      id: 1,
      title: "article1",
      contents: "content1",
      comment_count: 1,
      user_id: 1,
      favorite_count: 1,
      is_favorate: true,
      user: {
        name: "kajita",
      },
      comments: [
        {
          id: 1,
          contents: "comment1",
          user_id: 10,
          user: {
            name: "yamashita",
          },
        },
      ],
    },
    {
      id: 2,
      title: "article2",
      contents: "content2",
      comment_count: 2,
      user_id: 1,
      favorite_count: 1,
      is_favorate: false,
      user: {
        name: "yamada",
      },
      comments: [],
    },
    {
      id: 3,
      title: "article3",
      contents: "content3",
      comment_count: 3,
      user_id: 1,
      favorite_count: 1,
      is_favorate: false,
      user: {
        name: "sato",
      },
      comments: [],
    },
    {
      id: 4,
      title: "article4",
      contents: "content4",
      comment_count: 4,
      user_id: 2,
      favorite_count: 1,
      is_favorate: false,
      user: {
        name: "muto",
      },
      comments: [],
    },
    {
      id: 5,
      title: "article5",
      contents: "content5",
      comment_count: 5,
      user_id: 2,
      favorite_count: 4,
      is_favorate: false,
      user: {
        name: "yamashita",
      },
      comments: [],
    },
  ],
};
