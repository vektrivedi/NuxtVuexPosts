<template>
    <PostDetails
      :postData="postData"
    >
    </PostDetails>
  </template>

<script>
  import PostDetails from '~/components/postDetails.vue';
  export default {
    async asyncData(context) {
      const postData = { user:{}, post:{}};
        console.log(context.route.params);

        if(context.route.params.hasOwnProperty("postId")){
          const postComments = await context.$axios.get("https://jsonplaceholder.typicode.com/posts/"+ context.route.params.postId + "/comments");

          postData.post["record"] = context.store.getters['getPost'](context.route.params.postId);

          postData.post["comments"] = postComments;
        }
        
        if(context.route.params.hasOwnProperty("userId")){
					postData.user= context.store.getters['getUser'](context.route.params.userId);
				}

        return { postData }
      },
      props: ['postId', 'userId'],
      components: { PostDetails }
  }
  </script>