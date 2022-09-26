export const state = () => ({
	posts: [],
	hashedUsers:{},
	hashedPosts:{},
	totalUsers: 0
})

export const mutations = {
	storePosts(state, res){
		if(res.status===200){
			state.posts = res.data;

			for (const post of res.data) {
				if(post.hasOwnProperty("id")){
					state.hashedPosts[post.id] = post
				}
			}

		}
	},
	storeUsers(state, res){
		if(res.status===200){
			for (const user of res.data) {
				if(user.hasOwnProperty("id")){
					state.hashedUsers[user.id] = user
				}
			}
			state.totalUsers = Object.keys(state.hashedUsers).length;
		}
	}
}

export const getters = {
	getUser(state){
	  var self = this
	  return function(userId){
			console.log(userId)
			if(userId && state.hashedUsers){
				return state.hashedUsers[userId];
			} else {
				return null;
			}
		}
	},
	getPost(state){
		var self = this
		return function(postId){
			  console.log(postId)
			  if(postId && state.hashedPosts){
				  return state.hashedPosts[postId];
			  } else {
				  return null;
			  }
		  }
	  }
  
}