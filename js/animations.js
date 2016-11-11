$(document).ready(function() {

    function hideTweetControls() {
        $("#tweet-controls").hide();
    }

    $(document).on('click', '.tweet-compose', function() {
        $(this).css('height', '5em');
        $('#tweet-controls').show();
    });

    $(document).on('click', '.tweet', function() {
        $(this).find('.stats').show();
        $(this).find('.reply').show();
    });

    $(document).on('mouseenter', '.tweet', function() {
        $(this).find('.tweet-actions').show();
    });
    $(document).on('mouseleave', '.tweet', function() {
        $(this).find('.tweet-actions').hide();
    });
    
    $(document).keyup(function() {
        var tweetTextLength = $('.tweet-compose').val().length;
        $('#char-count').text(140 - tweetTextLength);
        if (tweetTextLength >= 130) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', '#999');
        }
        if (tweetTextLength > 140) {
            $('#tweet-submit').prop('disabled', true);
        } else {
            $('#tweet-submit').prop('disabled', false);
        }
    });

    $('#tweet-submit').click(function() {
        var tweetText = $('.tweet-compose').val();
        var userName = $('#username-display').text();
        if (tweetText) {
        $('#stream').prepend('<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">' + userName + '</strong>' +
							'<span class="username"> @' + userName + '</span>' +
							'<p class="tweet-text">' + tweetText + '</p>' +
							'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
								'</ul>' +
							'</div>' +
							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +
										'<img src="img/jennyshen.jpg" />' +
										'<img src="img/damenleeturks.jpg" />' +
									'</div>' +
								'</div>' +
								'<div class="time">' +
									'1:04 PM - 19 Sep 13' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>')
        }
    });



});