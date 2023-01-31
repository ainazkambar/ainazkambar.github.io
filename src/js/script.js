import * as iswebp from "./modules/iswebp.js";
import * as carousel from "./modules/carousel.js";
import * as catalog from "./modules/catalog.js";
import * as modal from "./modules/modal.js";
import * as validate from "./modules/validation.js";
import * as pageScroll from "./modules/pageScroll.js";

$(document).ready(function(){
  iswebp.isWebp();
  carousel.carouselInner();
  catalog.catalogTabs();
  modal.modalWindows();
  validate.formValidating();
  pageScroll.pageup();
});