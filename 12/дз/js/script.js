(() => {
	
	let ballX = $('.field')[0].width - $('.ball')[0].width;
	let rightScore = $('.score-right')[0];
	let leftScore = $('.score-left')[0];
	
	$('.ball').click(() => {
		
		let ballY = Math.random() * ($('.field')[0].height - $('.ball')[0].height + 1);
		let animationProps = {
			top: ballY,
			left: ballX,
		}

		$('.ball').animate(animationProps, 1000, () => {
			if (($('.ball').position().top*100)/$('.field').height() > 40 && ($('.ball').position().top*100)/$('.field').height() < 50) {
				if (ballX > 0) {
					rightScore.innerText = Number(rightScore.innerText) + 1;
				} else {
					leftScore.innerText = Number(leftScore.innerText) + 1;
				}
			}
		})
		
		if (ballX > 0) {
			ballX = 0;
		} else {
			ballX = $('.field')[0].width - $('.ball')[0].width;
		}
	})

})()

