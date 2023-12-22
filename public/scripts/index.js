setBioCollapsibles();
setCardCollapsibles();
addEmailToClipboard();

function setBioCollapsibles() {
	var moreBtn = document.querySelector("#more-btn");
	var restOfBio = moreBtn.parentNode.nextElementSibling;
	var lessBtn = document.querySelector("#less-btn");
	
	moreBtn.addEventListener('click', function () {
		lessBtn.innerHTML = "Less...";
		moreBtn.innerHTML = "";
		restOfBio.style.maxHeight = restOfBio.scrollHeight + "px";
	});

	lessBtn.addEventListener('click', function () {
		restOfBio.style.maxHeight = null; 
		moreBtn.innerHTML = "More...";
		lessBtn.innerHTML = "";
	})
}

function setCardCollapsibles() {
	var cardBtns = document.querySelectorAll(".card-button");
	var openedCollapsible = [];
	for (var i = 0; i < cardBtns.length; ++i) {
		cardBtns[i].addEventListener("click", function () {
			var sectionItem = this.nextElementSibling.nextElementSibling;
            var arrow = this.nextElementSibling.children[0];
			if (sectionItem.style.maxHeight) {
				sectionItem.style.maxHeight = null;
				sectionItem.style.paddingBottom = "0px";
				openedCollapsible.pop();
                arrow.src = "public/images/plus-sign.png";
			} else {
				if (openedCollapsible.length !== 0) {
					var alreadyOpened = openedCollapsible.pop();
					alreadyOpened.click();
				}
				openedCollapsible.push(this);
				sectionItem.style.maxHeight = sectionItem.scrollHeight + "px";
				sectionItem.style.paddingBottom = "15px";
                arrow.src = "public/images/minus-sign.png";
			}
		});
	}
}

function addEmailToClipboard() {
	var emailButton = document.querySelector("#email button");
	emailButton.addEventListener('click', function () {
		navigator.clipboard.writeText("morobikmobi@gmail.com");
		this.nextElementSibling.animate([
		{ visibility: 'hidden' },
		{ visibility: 'visible' },
		{ opacity: '1' },
		{ opacity: '0' },
		], {
			duration: 3000
		});
	});
}

var prevSlideBtn = document.getElementById("previous-slide");
var nextSlideBtn = document.getElementById("next-slide");

prevSlideBtn.addEventListener('click', function () {
	let currentSlide = document.getElementsByClassName("current")[0];
	let prevSlide = currentSlide.previousElementSibling;
	if (prevSlide !== null) {
		currentSlide.classList.toggle("current");
		prevSlide.classList.toggle("current");
		prevSlide.classList.toggle("old-slide");
	}
});

nextSlideBtn.addEventListener('click', function () {
	let currentSlide = document.getElementsByClassName("current")[0];
	let nextSlide = currentSlide.nextElementSibling;
	if (nextSlide !== null) {
		currentSlide.classList.toggle("old-slide");
		currentSlide.classList.toggle("current");
		nextSlide.classList.toggle("current");
	}
});

