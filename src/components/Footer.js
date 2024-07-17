import React from 'react';

function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="footer-content">
                <p className="copyright">
                {/* Copyright &copy; 2022, KaranChandekar - All Rights Reserved */}
                </p>
                <div className="social-list">
                <a href="https://www.facebook.com/profile.php?id=61562051698467" ><i className="fab fa-facebook" /></a>
                <a href="https://www.linkedin.com/in/karan-chandekar-a87263219/" target="_blank"  rel="noreferrer"><i className="fab fa-linkedin" /></a>
                <a href="https://www.twitter.com/karanchandekar1" ><i className="fab fa-twitter" /></a>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default Footer;