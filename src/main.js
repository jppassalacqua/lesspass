import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import App from './app';
import LandingPage from './landing-page/LandingPage';
import LoginPage from './pages/login';
import SettingsPage from './pages/settings';
import EntriesPage from './pages/entries';
import EditEntryPage from './pages/edit-entry';
import auth from './services/auth';
import locales from './locales';

Vue.use(VueI18n);
const browserLanguage = (navigator.language || navigator.browserLanguage).split('-')[0];
const lang = locales.hasOwnProperty(browserLanguage) ? browserLanguage : 'en';
Vue.config.lang = lang;
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]);
});

Vue.use(VueRouter);
const router = new VueRouter();

router.map({
  '/': {
    component: LandingPage,
  },
  '/login/': {
    component: LoginPage
  },
  '/settings/': {
    component: SettingsPage,
    authRequired: true
  },
  '/entries/': {
    component: EntriesPage,
    authRequired: true
  },
  '/entries/:uuid/': {
    component: EditEntryPage,
    authRequired: true
  }
});

auth.localStorage = localStorage;

router.beforeEach(transition => {
  auth.checkAuth()
    .then(() => {
      if (transition.to.path === '/') {
        transition.redirect('/entries/');
      } else {
        transition.next();
      }
    })
    .catch(() => {
      if (transition.to.authRequired) {
        transition.redirect('/login/');
      } else {
        transition.next();
      }
    });
});

router.redirect({
  '*': '/'
});

router.start(App, 'app');
