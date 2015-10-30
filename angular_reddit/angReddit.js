var app = angular.module('angularReddit', []);
app.controller('redditContent', function($scope) {
  $scope.showPostForm = false;
  $scope.showCommentForm = false;
  $scope.showComments = false;
  $scope.sortBy = '-votes';
  $scope.posts = [
    {
      title: 'A Post!',
      author: 'Me',
      imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/a1/e3/6b/a1e36bcb8ce179bd8cc8db28ff4ef6fb.jpg',
      description: 'Here is an english muffin picture i found.',
      votes: 0,
      date: moment('2015-10-27T17:25'),
      comments: [
        {
          author: 'nope!',
          text: 'i want a muffin'
        }
      ]
    },
    {
      title: 'Halloween Tombstone Recipe',
      author: 'Me',
      imageUrl: 'http://www.findingdulcinea.com/docroot/dulcinea/fd_images/features/feature-articles/2008/october/Halloween-Baking--Tips-on-Making-Terrifyingly-Tasty-Treats-/features/0/image.jpg',
      description: 'Brownies are even better on halloween!!',
      votes: 0,
      date: moment('2015-10-27T18:35'),
      comments: [
        {
          author: 'me',
          text: 'omg i LOVE brownies!!!'
        },
        {
          author: 'no',
          text: 'so cute! looks delish!'
        }
      ]
    }
  ];
  $scope.newPost = {};
  $scope.addPost = function(isValid) {
    $scope.submitted = true;
    if (isValid) {
      $scope.newPost.date = moment();
      $scope.newPost.votes = 0;
      $scope.newPost.comments = [];
      console.log($scope.newPost);
      $scope.posts.push($scope.newPost);
      $scope.newPost = {};
    }
  };
  $scope.upVote = function(post) {
    post.votes++;
  };
  $scope.downVote = function(post) {
    post.votes--;
  };
  $scope.addComment = function(post, comment) {
    console.log(post);
    console.log(comment);
    post.comments.push(comment);
    $scope.newComment = {};
  };
});