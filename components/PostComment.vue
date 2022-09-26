<template>
	<div class="comment">
	     <div class="commentContent">{{ commentBody }}</div>
	</div>
</template>

<script>
export default {
	props: ['commentBody']
}
</script>

<style>
    .comment {
	align-items: center;
	justify-content: space-between;
	background-color: rgb(105, 136, 54);
	padding: 1rem;
	border-radius: 0.5rem;
    margin-bottom: 0.3rem;
	}

	.commentContent{
	text-align: center;
	 display: -webkit-box;
  	 overflow: hidden;
  	 -webkit-line-clamp: 3;
  	 -webkit-box-orient: vertical;
	 text-overflow: ellipsis;
	}

	
</style>