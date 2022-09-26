<template>
  <main>
    <h1>Total {{ $store.state.posts.length }} Posts By {{ $store.state.totalUsers }} Users</h1>
    <div class="tasks">
      <Post
        v-for="(post, i) in $store.state.posts"
        :key="i"
        :post="post" />
    </div>
  </main>
</template>

<script>
import Post from '~/components/post.vue';
export default {
    async asyncData(context) {
        console.log(context);
        let posts = await context.$axios.get("https://jsonplaceholder.typicode.com/posts");
        context.app.store.commit("storePosts", posts);
        let users = await context.$axios.get("https://jsonplaceholder.typicode.com/users");
        context.app.store.commit("storeUsers", users);
    },
    components: { Post }
}
</script>

<style>
  .tasks {
    width: 100%;
    max-width: 1300px;
    margin-top: 2rem;
  }
</style>