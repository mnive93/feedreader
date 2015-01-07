var feeds = [];
angular.module('feedReader',['ngResource'])
       
        .factory('FeedFetcher',function($resource) {
        return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
			fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
		}); 
        })
           
        .service('FeedList',function($rootScope,FeedFetcher) {
            this.get = function() {
                var sourcefeeds = [
                    {title: 'NDTV', url: 'http://feeds.feedburner.com/NdtvNews-TopStories?format=xml'},
                ];
            
            if(feeds.length === 0)
            {
                for(var i=0 ;i<sourcefeeds.length;i++)
                {
                    FeedFetcher.fetch({q: sourcefeeds[i].url, num: 10}, {}, function (data) {
						var feed = data.responseData.feed;
						feeds.push(feed);
					});
                
                }
            } 
                return feeds;
            };
        })


        .controller('FeedParser',function($scope,FeedList) {
           $scope.feeds = FeedList.get();
            console.log($scope.feeds);
            $scope.$on('FeedList',function(event,data)
                       {
                           $scope.feeds = data;
                       });    
                   
        });