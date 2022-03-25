
<template>
  <div>
    <h1>Post</h1>
    <div v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <h5>{{ post.content }}</h5>
      <p>{{ post.category ? post.category.name : "" }}</p>
      <p>
        <span v-for="(tag, index) in post.tags" :key="index">
          {{ tag.name + "" }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getData() {
      axios
        .get(`api/post/${this.$route.params.slug}`)
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