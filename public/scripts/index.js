setCollapsibles();
addEmailToClipboard();

function setCollapsibles() {
	var cardBtns = document.querySelectorAll(".card-button");
	var moreBtn = document.querySelector("#more-btn");
	var restOfBio = moreBtn.parentNode.nextElementSibling;
	var lessBtn = document.querySelector("#less-btn");
	var openedCollapsible = [];
	
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

	for (var i = 0; i < cardBtns.length; ++i) {
		cardBtns[i].addEventListener("click", function () {
			var sectionItem = this.nextElementSibling;
			if (sectionItem.style.maxHeight) {
				sectionItem.style.maxHeight = null;
				sectionItem.style.paddingBottom = "0px";
				openedCollapsible.pop();
			} else {
				if (openedCollapsible.length !== 0) {
					var alreadyOpened = openedCollapsible.pop();
					alreadyOpened.click();
				}
				openedCollapsible.push(this);
				sectionItem.style.maxHeight = sectionItem.scrollHeight + "px";
				sectionItem.style.paddingBottom = "15px";
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
