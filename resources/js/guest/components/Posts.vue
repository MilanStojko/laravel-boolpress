
<template>
  <div>
    <h1>Post</h1>
    <div v-for="(post, index) in posts" :key="index">
      <h3>Titolo : {{ post.title }}</h3>
      <h5>Contenuto: {{ post.content }}</h5>
      <p>Categoria : {{ post.category ? post.category.name : "" }}</p>
      <p>
        Tags:
        <span v-for="(tag, index) in post.tags" :key="index">
          {{ tag.name + "" }}
        </span>
      </p>
      <router-link :to="{ name: 'post', params:{slug: post.slug} }">Visualizza il singolo post</router-link>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("api/post")
        .then((risposta) => {
          this.posts = risposta.data;
          console.log(this.posts);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style></style>