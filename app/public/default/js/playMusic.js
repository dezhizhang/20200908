
		$('.play').click(function() {
			let audio = document.getElementById('audio');
			$(".play").attr("style", "display:none;");
			$(".pause").attr("style", "display:block;");
			if (audio.paused) {
				document.getElementById('audio').play(); //audio.play();// 这个就是播放  
			} else {
				document.getElementById('audio').pause(); // 这个就是暂停
			}
			 event.stopPropagation(); 
		})

		$('.pause').click(function() {
			let audio =document.getElementById('audio');
			$("#play").attr("style", "display:block;");
			$("#pause").attr("style", "display:none;");
			if (audio.paused) {
				document.getElementById('audio').play(); //audio.play();// 这个就是播放  
			} else {
				document.getElementById('audio').pause(); // 这个就是暂停
			}
			 event.stopPropagation(); 
		})

		function initMusic() {
			//动态创建一个audio节点
			var audio = document.createElement('audio');
			audio.setAttribute('id', 'audio');
			audio.setAttribute('autoplay', 'autoplay');
			audio.setAttribute('loop', 'loop');
			audio.innerHTML = '<source src="/public/default/mp3/bgm.mp3" type="audio/mpeg">';

			//将audio节点追加到dom
			document.body.appendChild(audio);
			audio.load();

			//iOS Safari可能是出于防止骚扰用户的考虑，首次非用户触发的play不会生效
			console.log('audio', audio)
			setTimeout(() => {
				audio.pause()
				audio.load()
			}, 10)
			document.addEventListener("WeixinJSBridgeReady", function() {
				//微信H5环境，监听WeixinJSBridgeReady事件，再次进行play
				//亲测iOS 微信H5页面能够自动播放
				document.getElementById('audio').play();
			}, false);
		}

		window.onload = function() {
			//初始化一段音乐，并直接进行播放
			initMusic();
		};