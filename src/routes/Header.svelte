<script>


</script>


<header>
<div class="main_content">
<div class="logo_container">
<div class="menu_container">
<button class="menu_button"><svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
 </button>
</div>

<div class="logo">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2rem" height="2rem" viewBox="0 0 512 512">
  <defs>
    <clipPath id="canvas-clip">
      <rect width="512" height="512" rx="112" ry="112"/>
    </clipPath>
  </defs>
  <rect width="512" height="512" rx="112" ry="112" fill="#F74562"  clip-path="url(#canvas-clip)"/>
  <g clip-path="url(#canvas-clip)">
    <g transform="rotate(0, 256, 256)">
      
      <g transform="translate(103 103) scale(12.791666666666666 12.791666666666666) translate(0 0)"><path fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10H6a4 4 0 0 1-4-4a1 1 0 0 1 1-1h4m0 0a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1a7 7 0 0 1-7 7H8a1 1 0 0 1-1-1zm2 7v5m6-5v5M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"/></g>
    </g>
  </g>
</svg>
<span class="logo_name">Tim Ford</span>
</div>
</div>

<div class="header_links_container">
<a href="#">Templates</a>
<a href="#">CAD Studio</a>
<a href="#">Media Studio</a>
<a href="#">Pricing</a>
<a href="#">Hosting</a>
</div>
<div class="login_container">
<a href="#" class="admin_login_button">
<svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M11.302 21.6149C11.5234 21.7441 11.6341 21.8087 11.7903 21.8422C11.9116 21.8682 12.0884 21.8682 12.2097 21.8422C12.3659 21.8087 12.4766 21.7441 12.698 21.6149C14.646 20.4785 20 16.9085 20 12.0001V8.20007C20 7.12617 20 6.58923 19.8345 6.20807C19.6662 5.82067 19.4986 5.61458 19.1536 5.37097C18.8141 5.13129 18.1486 4.99289 16.8177 4.71609C15.3508 4.41101 14.2243 3.8601 13.1944 3.06339C12.7005 2.68133 12.4536 2.49031 12.2603 2.43821C12.0564 2.38323 11.9436 2.38323 11.7397 2.43821C11.5464 2.49031 11.2995 2.68134 10.8056 3.06339C9.77572 3.8601 8.6492 4.41101 7.1823 4.71609C5.85137 4.99289 5.18591 5.13129 4.84645 5.37097C4.50142 5.61458 4.33379 5.82067 4.16554 6.20807C4 6.58923 4 7.12617 4 8.20007V12.0001C4 16.9085 9.35396 20.4785 11.302 21.6149Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
 <span class="">Admin Portal</span>
</a>
<a href="#" class="login_link">Login</a>
<button class="login_button">Login</button>
<a href="#" class="create_profile_button">Create Profile</a>
</div>
</div>
<div class="open_menu_containers">
<div class="open_menu">
<a href="#">Templates</a>
<a href="#">CAD Studio</a>
<a href="#">Media Studio</a>
<a href="#">Pricing</a>
<a href="#">Hosting</a>
<a href="#">Login</a>
<a href="#">Create Profile</a>
<a href="#">Admin Portal</a>

</div>
<div class="open_login">
<a href="#">Login</a>
<a href="#">Create Profile</a>
<a href="#">Admin Portal</a>
</div>
</div>
</header>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
font-size: 1.1rem;
font-family: Inter;
font-weight: 300;
transition: all 0.3s ease;
color: #111111;
}

*:hover {
font-weight: 400;
color: #000000;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}


header, .main_content, .open_menu_containers {
align-self: stretch;
}



header {
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
justify-content: flex-start;
padding: 20px;
background-color: lightgrey;
margin: 0px;
}

.main_content {
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: space-between;
padding: 0px;
background-color: white;
margin: 0px;
gap: 20px;
}

.main_content > * {
    min-width: 0;
}

.open_menu_containers {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
}

.open_menu {
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
justify-content: flex-start;
padding: 20px;
background-color: red;
margin: 0px;
gap: 7px;
}

.open_login {
display: flex;
flex-direction: column;
flex-wrap: nowrap;
align-items: flex-start;
justify-content: flex-start;
padding: 30px;
background-color: yellow;
margin: 0px;
gap: 7px;
}

.login_button {
display: none;
}

.menu_container {
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
margin-right: 0px;
}

.menu_button {
display: flex;
align-items: center;
justify-content: center;
display: none;
border: none;
background: none;
cursor: pointer;
}

.logo_container {
display: flex;
flex-wrap: nowrap;
align-items: flex-start;
justify-content: flex-start;
gap: 0px;
background-color: transparent;
}

.logo {
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
background-color: orange;
}

.logo_name, a {
white-space: nowrap;
text-decoration: none;
}

.header_links_container {
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
background-color: coral;
gap: 20px;
}

.login_container {
display: flex;
flex-wrap: nowrap;
align-items: center;
justify-content: flex-end;
gap: 20px;
}

@media (max-width: 1050px) {
.admin_login_button, .create_profile_button, .login_link {
display: none;
}

.login_button {
display: flex;
}

}

@media (max-width: 800px) {
.header_links_container {
display: none;
}

.menu_container, .menu_button {
display: flex;
}

.logo, .login_container  {
display: none;
}


} 

@media (max-width: 600px) {
.login_container {
display: none;
}
}

@media (max-width: 405px) {
* {
font-size: 1.2rem;
}
svg {
scale: 1.1;
}
}


</style>
