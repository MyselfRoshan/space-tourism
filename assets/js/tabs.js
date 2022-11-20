const tabLists = document.querySelector('[role="tablist"]');
const tabs = tabLists.querySelectorAll('[role="tab"]');
const planetPics = document.querySelectorAll('[role="img"]');
const destinationInfos = document.querySelectorAll('[role="tabpanel"]');
let tabFocus = 0;

tabLists.addEventListener('keydown', (e) => {
  // Value for left Aroow key
  const keydownLeft = 37;
  // Value for Right Aroow key
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
    // Set aria-selected attritute to false and add it to the current tab
    tabs.forEach((tab) => tab.setAttribute('aria-selected', 'false'));
    tabs[tabindex].setAttribute('aria-selected', 'true');
    // Set d-none property to all pic and add it to the current tab pic
    planetPics.forEach((planetPic) => planetPic.classList.add('d-none'));
    planetPics[tabindex].classList.remove('d-none');
    // Set articles attribte to hidden and remove hidden from current article
    destinationInfos.forEach((destinationInfo) => {
      destinationInfo.setAttribute('hidden', '');
    });
    destinationInfos[tabindex].removeAttribute('hidden');
  });
}
