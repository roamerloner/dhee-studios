import React from 'react'

 function Header() {
  return (
    <div>
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>dhee studios</title>
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700;800&family=Josefin+Slab:ital,wght@0,400;0,600;1,300;1,400;1,600&family=Muli:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" />


              <header className="header" id="home">
                  <div className="img-wrapper">
                    <img src="images/pic1.jpg" />
                  </div>
                  <div className="banner">
                    <h1>dhee studios</h1>
                    <p>Concept🤝Creation</p>
                    <button>Discover Now</button>
                  </div>
                </header>
        </div>

    </div>
  )
}

export default Header;