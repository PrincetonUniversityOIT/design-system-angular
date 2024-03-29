import {moduleMetadata, storiesOf} from '@storybook/angular';

const stories = storiesOf('Components/Footer', module);

stories.add('Default', () => {
  return {
    template:  `
        <footer role="contentinfo" class="jazz-footer">
        <div class="jazz-container jazz-footer__content">
            <div class="row">
                <div class="col-sm-3 col-xs-12">
                    <h2>General Information</h2>
                    <ul class="jazz-footer__list">
                        <li><a href="javascript:void(0);">Contact Us</a></li>
                        <li><a href="javascript:void(0);">About Us</a></li>
                        <li><a href="javascript:void(0);">News</a></li>
                        <li><a href="javascript:void(0);">Data Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 col-xs-12">
                    <h2>Services</h2>
                    <ul class="jazz-footer__list">
                        <li><a href="javascript:void(0);">Update Your Info</a></li>
                        <li><a href="javascript:void(0);">Online Resources</a></li>
                        <li><a href="javascript:void(0);">Visiting Campus</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 col-xs-12">
                    <h2>University Links</h2>
                    <ul class="jazz-footer__list">
                        <li><a href="javascript:void(0);">Princeton University</a></li>
                        <li><a href="javascript:void(0);">Princeton Athletics</a></li>
                        <li><a href="javascript:void(0);">Princeton Career Development</a></li>
                        <li><a href="javascript:void(0);">Princeton Prize</a></li>
                        <li><a href="javascript:void(0);">Princetoniana</a></li>
                        <li><a href="javascript:void(0);">Giving to Princeton</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 col-xs-12">
                    <h2>Social Media</h2>
                    <ul class="jazz-footer__icon-list">
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-2x jazz-footer__icon jazz-icon-facebook"></i><span class="jazz-visually-hidden">Follow Us on Facebook</span></a></li>
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-2x jazz-footer__icon jazz-icon-twitter"></i><span class="jazz-visually-hidden">Follow Us on Twitter</span></a></li>
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-2x jazz-footer__icon jazz-icon-linkedin"></i><span class="jazz-visually-hidden">Follow Us on Linked In</span></a></li>
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-2x jazz-footer__icon jazz-icon-instagram"></i><span class="jazz-visually-hidden">Follow Us on Instagram</span></a></li>
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-2x jazz-footer__icon jazz-icon-youtube"></i><span class="jazz-visually-hidden">Follow Us on You Tube</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="jazz-footer__subfooter">
            <div class="jazz-container">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        <a href="javascript:void(0)">Accessibility</a>
                    </div>
                    <div class="col-sm-4 col-xs-12 jazz-footer-text--center">
                        &copy; 2020 The Trustees of Princeton University
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <a href="https://www.princeton.edu" target="_blank" class="jazz-no-icon"><img class="jazz-footer__logo" src="../../assets/icons/pu-logo-stacked-white.svg" alt="Princeton University" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`
  };
});


stories.add('Sample1', () => {
  return {
    template:  `
      <footer role="contentinfo" class="jazz-footer">
        <div class="jazz-container jazz-footer__content">
            <div class="row">
                <div class="col-sm-3 col-xs-12">
                    <ul class="jazz-footer__list">
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-envelope jazz-icon-white" aria-hidden="true"></i>  finance@princeton.edu</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 col-xs-12">
                    <ul class="jazz-footer__list">
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-phone jazz-icon-white" aria-hidden="true"></i>  609-258-3080</a></li>
                        <li><a href="javascript:void(0);"><i class="jazz-icon jazz-icon-printer jazz-icon-white" aria-hidden="true"></i>  609-258-3080</a></li>
                    </ul>
                </div>
                <div class="col-sm-3 col-xs-12">
                    <ul class="jazz-footer__list">
                        <li><i class="jazz-icon jazz-icon-map-pin jazz-icon-transparent" aria-hidden="true"></i>  701 Carnegie Center</li>
                        <li><i class="jazz-icon jazz-icon-map-pin jazz-icon-white" aria-hidden="true"></i>  Suite 435</li>
                        <li><i class="jazz-icon jazz-icon-map-pin jazz-icon-transparent" aria-hidden="true"></i>  Princeton, NJ 08540</li>
                    </ul>
                </div>
                <div class="col-sm-3 col-xs-12 jazz-footer-text--right">
                    <ul class="jazz-footer__list">
                        <li><img class="jazz-footer__shield" src="../../assets/logos/shield.svg" />  Web Development Services</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="jazz-footer__subfooter">
            <div class="jazz-container">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        <a href="javascript:void(0)">Accessibility</a>
                    </div>
                    <div class="col-sm-4 col-xs-12 jazz-footer-text--center">
                        &copy; 2020 The Trustees of Princeton University
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <a href="https://www.princeton.edu" target="_blank" class="jazz-no-icon"><img class="jazz-footer__logo" src="../../assets/icons/pu-logo-stacked-white.svg" alt="Princeton University" /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`
  };
});
