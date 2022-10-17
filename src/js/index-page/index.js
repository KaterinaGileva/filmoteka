import { openModalFooter } from '../common/modal-footer';
import { openModal } from '../common/modal';
import { searchMovies } from './search';
import goTopBtn from '../common/goTopBtn';
import { renderPopularMovies } from './renderPopularMovies';
import btnWhiteBlack from '../common/btn-white-black';
import { controlColor, controlColorFilter } from '../common/controlColor';

import '../common/headers-fixed';
export const APIKEY = '565e4989d784811de7dff7d665000157';
export const APIURL = 'https://api.themoviedb.org/';
import {langCurrent, setIndexLang} from '../lang/changeLang'
import { filterRenderGenre, filterRenderYear } from './filterRender';

filterRenderGenre();
filterRenderYear();

export const refs = {
  mainContainer: document.querySelector('.filmoteka__container'),
  openModalBtn: document.querySelector('.modal-footer-open'),
  searchResultText: document.querySelector('.form-text'),
  form: document.querySelector('.header_search'),
  enLangBTN: document.getElementById('e-lang-en'),
  uaLangBTN: document.getElementById('e-lang-ua'),
};

refs.mainContainer.addEventListener('click', openModal);
refs.openModalBtn.addEventListener('click', openModalFooter);
refs.form.addEventListener('submit', searchMovies);
refs.enLangBTN.addEventListener('click', ()=>changeLang('en'));
refs.uaLangBTN.addEventListener('click', ()=>changeLang('ua'));

function changeLang (lang){
  setIndexLang(lang);
  renderPopularMovies();
}

const currentLang = langCurrent();
renderPopularMovies();
setIndexLang(currentLang);
goTopBtn();
btnWhiteBlack();
controlColor();
controlColorFilter();
