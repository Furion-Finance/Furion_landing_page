import Vue from 'vue';
import Element from 'element-ui/lib/element-ui.common';
import locale from 'element-ui/lib/locale/lang/en';

export default ({ store }) => {
  Vue.use(Element, {
    locale,
    // size: 'small',
  });
};
