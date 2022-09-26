<template>
	<div class="post">
		<NuxtLink class="openButton" :to="{name: 'post-details', params: { postId: post.id, userId: post.userId }}">Show</NuxtLink>
	     <div class="title">{{ post.title }}</div>
	     <div class="content">{{ post.body }}</div>
	</div>
</template>

<script>
export default {
	props: ['post']
}
</script>

<style>
	.title {
		font-family: Verdana;
		text-align: center;
		margin-bottom: 2rem;
		color: rgb(231, 90, 201);
	}

    .post {
	align-items: center;
	justify-content: space-between;
	background-color: rgb(52, 47, 78);
	padding: 1rem;
	border-radius: 0.5rem;
    margin-bottom: 1rem;
	}

	.content{
	text-align: center;
	 display: -webkit-box;
  	 overflow: hidden;
  	 -webkit-line-clamp: 3;
  	 -webkit-box-orient: vertical;
	 text-overflow: ellipsis;
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