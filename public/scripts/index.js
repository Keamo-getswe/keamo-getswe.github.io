setCardCollapsibles();
addEmailToClipboard();

function setCardCollapsibles() {
	var buttons = document.querySelectorAll(".card-button");
	var openedCollapsible = [];

	for (var i = 0; i < buttons.length; ++i) {
		buttons[i].addEventListener("click", function () {
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
