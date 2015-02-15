 (function() {
    var app = angular.module('feedReader',['ngResource']);
    var feeds = [];
    var sources = [{title: 'NDTV', url: 'http://feeds.feedburner.com/NdtvNews-TopStories?format=xml'},
                 {title: 'TECHCRUNCH', url : 'http://feeds.feedburner.com/techcrunch/startups?format=xml'},
                    ];
    app .factory('FeedFetcher',function($resource) {
            return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
                fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
            }); 
            })

          app.service('FeedList',function($rootScope,FeedFetcher) {
                this.get = function() {
               

                if(feeds.length === 0)
                {
                    for(var i=0 ;i<sources.length;i++)
                    {
                        FeedFetcher.fetch({q: sources[i].url, num: 10}, {}, function (data) {
                            var feed = data.responseData.feed;
                            feeds.push(feed);
                        });

                    }
                } 
                    return feeds;
                };
            })


         app.controller('FeedParser',function($scope,FeedList) {
                $scope.sourcefeeds = sources;
                $scope.feeds =  FeedList.get();
                $scope.$on('FeedList',function(event,data)
                           {
                               $scope.feeds = data;
                           });    
                      
  
            }


    );
}) ();
