import React from 'react';
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
<footer>
    <div class="container">
        <div class="row vcenter">
            <div class="pull-left col-lg-4 col-xs-12">
                <p class="text-primary">Copyright &copy;2022 by Heather Albjerg</p>
            </div>
            <div class="col-lg-4 col-lg-offset-4 col-xs-12">
                <div class="pull-right">
                    <a href="https://www.linkedin.com/in/heather-albjerg-b80b03219/"><FontAwesomeIcon icon={faBehanceSquare}/></a>
                    <a href="https://www.linkedin.com/in/heather-albjerg-b80b03219/"><i class="fa fa-linkedin-square fa-icon"></i></a>
                    <a href="#"><i class="fa fa-facebook-square fa-icon"></i></a>
                    <a href="https://github.com/heatherviolet"><i class="fa fa-github-square fa-icon"></i></a>
                    
                </div>
            </div>
        </div>
    </div>
</footer>   
);
  }

export default Footer;