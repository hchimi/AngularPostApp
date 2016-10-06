var app = angular.module("FinalApp");

app.controller("MainController",function($scope,$resource){
	Post = $resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
	User = $resource("https://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
	$scope.posts = Post.query();
	$scope.users = User.query();

	$scope.removePost = function(post){
		Post.delete({id: post.id},function(data){
			console.log(data);
		});

		$scope.posts = $scope.posts.filter(function(element){
			return element.id != post.id;
		});

		// La manera villera
		/*for (var i = 0; i < $scope.posts.length; i++) {
			console.log($scope.posts[i]);

			if($scope.posts[i].id == post.id)
			{
				$scope.posts.splice(i,1);
			}
		}*/
	}
});

app.controller("PostController",function($scope,$routeParams,$resource){
		console.log($routeParams.id);
		Post = $resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
		$scope.post = Post.get({id: $routeParams.id});
		
});

app.controller("UserController",function($scope,$routeParams,$resource){
	Post = $resource("https://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
	$scope.user = Post.get({id: $routeParams.id});
});