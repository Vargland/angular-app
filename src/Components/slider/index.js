import sliderController from './slider.controller';
import template from './slider.template.html';
import styles from './slider.style.scss';

export default angular
    .module('myApp.slider', [])
    .component('slider', {
        template,
        styles,
        controller: sliderController,
    })
    .name;