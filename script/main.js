let showNav = false;

const navToggleHandler = () => {
  let nav = document.getElementsByClassName("nav-mobile")[0];
  showNav ? (nav.style.display = "none") : (nav.style.display = "contents");
  showNav = !showNav;
};
