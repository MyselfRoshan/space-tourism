const tabLists = document.querySelector('[role="tablist"]');
const tabs = tabLists.querySelectorAll('[role="tab"]');
const planetPics = document.querySelectorAll('[role="img"]');
const destinationInfos = document.querySelectorAll('[role="tabpanel"]');
let tabFocus = 0;

tabLists.addEventListener('keydown', (e) => {
  const keydownLeft = 37;
  const keydownRight = 39;
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute('tabindex', -1);

    if (e.keyCode === keydownRight) {
      tabFocus++;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === keydownLeft) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute('tabindex', 0);
    tabs[tabFocus].focus();
  }
});

for (let tabindex = 0; tabindex < tabs.length; tabindex++) {
  tabs[tabindex].addEventListener('click', () => {
    // Remove active from all the tabs and add it to the current one
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabs[tabindex].classList.add('active');

    tabs.forEach((tab) => tab.setAttribute('aria-selected', 'false'));
    tabs[tabindex].setAttribute('aria-selected', 'true');

    planetPics.forEach((planetPic) => planetPic.classList.add('d-none'));
    planetPics[tabindex].classList.remove('d-none');

    destinationInfos.forEach((destinationInfo) => {
      destinationInfo.setAttribute('hidden', '');
    });
    destinationInfos[tabindex].removeAttribute('hidden');
  });
}
