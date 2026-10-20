<script>
import { resolve } from '$app/paths';
</script>
<footer>
<section class ="section1">
<div class="header_logo">
   <div class='logo'>
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
 </svg>
</div>

<h3 class='logo_name'>
    Aether<span class='highlight'>Forge</span>
</h3>
 
</div>
</section>
<section class="section2">
<div class="footer_columns">
 <div class="column_box">
    <nav class='footer_links'>
        <h3 class='column_header'>
            Platform
        </h3>
        <ul>
            <li><a class="footer_link" href="#">Templates</a></li>
            <li><a class="footer_link" href={`${resolve}/#pricing-heading`}>Pricing</a></li>
            <li><a class="footer_link" href="#">AI Prompting</a></li>
            <li><a class="footer_link" href="#">Deploy</a></li>
        </ul>

    </nav>
<nav class='footer_links'>
<h3 class='column_header'>
 Resources
</h3>
<ul>

<li><a class="footer_link" href="#">Documentation</a></li>
<li><a class="footer_link" href="#">Tutorials</a></li>
<li><a class="footer_link" href="#">Community</a></li>
<li><a class="footer_link" href="#">Blog</a></li>
<li><a class="footer_link" href="#">Changelog</a></li>
<li><a class="footer_link" href="#">Support tickets</a></li>

</ul>
</nav>
<nav class='footer_links'>
<h3 class='column_header'>
 Company
</h3>
<ul>
<li><a class="footer_link" href="#">About</a></li>
<li><a class="footer_link" href="#">Contact information</a></li>
<li><a class="footer_link" href="#">Policy</a></li>
<li><a class="footer_link" href="#">Social media</a></li>
<li><a class="footer_link" href="#">Affiliates</a></li>
</ul>



</nav>

</div> 
<section class="section3">
    <div class="logo_box">
    
       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70%" height="70%" viewBox="0 0 512 512">
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
   
 
    
</div>
</section>

</div>

</section>
<section class="section4">
<div class='copyright'>
<p>&copy; 2026 AetherForge. All rights reserved. </p>
 <p> Built with AI, powered by ambition.</p>
 

</div>  
</section>
</footer>
<style>
footer
{
    position:relative;
    background-color:white;
   padding:1px;
    
}
h3
{
    font-weight: bold;
}

.footer_columns
{
    display: grid;
    grid-template-columns: 1fr 1fr;

}


.header_logo
{
    display:flex;
    flex-shrink:0;
    align-items: center;
    gap: 6px;
    border: 1px solid black;
    padding: 9px
}
.logo
{
    background-color: rgb(36, 99, 235);
    border-radius: 8px;
    padding: 6px;
    color: white;
}
.footer_links
{
    display: flex;
    flex-direction: column;   
    padding: 2px;
   
}

.footer_link
{
    font-size: 15px;
    font-family: Inter;
    text-decoration: none;
    color: black; 
}
.logo_box
{
    display:grid;
    flex-direction:column;
    
    border-right: 1px solid black;
}
.column_box
{
    display:grid;
    border-right: 1px solid black;
    border-left: 1px solid black;
    grid-template-columns: 1fr 1fr 1fr;
    
    
}
.footer_link:hover {
    color:darkblue;
    text-decoration: underline;
    
}
.footer_link:focus
{
    color: black;
}
.footer_link:active
{
    color: green;
}
.summary
{
    
    font-family: Inter;
    font-size: 13.5px;
    
    
}

.copyright
{
    border: 1px solid black;
    display:flex;
    justify-content: space-between;
}

.highlight
{
    color: rgb(36, 99, 235)
}
ul
{
list-style-type: none;
padding: 2px;
}
li
{
    padding: 6px;
}
*
{
    box-sizing: border-box;
}
</style>