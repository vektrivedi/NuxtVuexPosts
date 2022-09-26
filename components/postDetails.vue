<template>
	<div  class="postDetails">
		<nuxt-link class="openButton" to="/">Back</nuxt-link>
	    <div v-if="postData.user.name">
			<div class="user">Created By {{ postData.user.name }} from {{ postData.user.company.name }}</div>

			<div class="title">{{ postData.post.record.title }}</div>
			<div class="content">{{ postData.post.record.body }}</div>

			<div class="commentTitle">Comments</div>

			<div class="commentsTasks">
				<PostComment
					v-for="(comment, i) in postData.post.comments.data"
					:key="i"
					:commentBody="comment.body" />		 
			</div>

		</div>
		<div v-else>
			<div class="title">Please select the valid Post...</div>
		</div>
	</div>
</template>

<script>
import PostComment from './PostComment.vue';
export default {
    props: ["postData"],
    created() {
        console.log(this.postData);
    },
    components: { PostComment }
}
</script>

<style>
	.title {
		font-family: Verdana;
		text-align: center;
		margin-bottom: 2rem;
		color: rgb(231, 90, 201);
	}

	.commentTitle {
		font-family: Verdana;
		text-align: center;
		margin-top: 5rem;
		color: rgb(90, 231, 137);
	}

	.user {
		font-family: 'Lucida Sans';
		font-size: 0.8rem;
		text-align: right;
		margin-bottom: 2rem;
		color: rgb(74, 141, 161);
	}

    .postDetails {
	align-items: center;
	justify-content: space-between;
	background-color: rgb(52, 47, 78);
	padding: 1rem;
	border-radius: 0.5rem;
    margin-bottom: 1rem;
	}

	.commentsTasks {
	padding: 1rem;
    width: 100%;
    margin-top: 1rem;
	color: rgb(90, 231, 137);
  }

	.content{
		font-family: 'Times New Roman', Times, serif;
		text-align: center;
		margin-bottom: 2rem;
		color: rgb(214, 130, 196);
	}

	.openButton {
	appearance: none;
	border: none;
	outline: none;
	color: rgb(47, 214, 111);
	font-weight: bold;
	background-color: #000;
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	margin-left: 0.5rem;
	cursor: pointer;
    }	
		
</style>