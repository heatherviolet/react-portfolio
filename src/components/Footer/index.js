import React from 'react';
import { library, icon } from '@fortawesome/fontawesome-svg-core';

function Footer() {
    return (
<footer>
    <div class="container">
        <div class="row vcenter">
            <div class="pull-left col-lg-4 col-xs-12">
                <p>Copyright &copy;2016 by Me</p>
            </div>
            <div class="col-lg-4 col-lg-offset-4 col-xs-12">
                <div class="pull-right">
                    <a href="#"><i class="fa fa-behance-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-linkedin-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-twitter-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-skype fa-icon"></i></a>
                    <a href="#"><i class="fa fa-facebook-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-github-square fa-icon"></i></a>
                    
                </div>
            </div>
        </div>
    </div>
</footer>   
);
  }

export default Footer;