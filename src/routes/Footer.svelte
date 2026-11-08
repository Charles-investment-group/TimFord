<script>
</script>
<footer class="footer_container">
<section class="top_footer_section">
<div class="home_logo_container">
<a class="home_logo" href="#"><img alt="home_logo" src="#"/></a>
</div>
<div class="home_email_container">
<div class="home_email">
<div class="home_email_color_box"></div>
<span class="home_email_newsletter_text">The Chlo.e newsletter</span>
<a href=# class="home_email_subscribe_button">Subscribe</a>
</div>
</div>
</section>

<section class="middle_footer_section">
<div class="middle_footer_section_featured_container">
<ul>
<li><span class="middle_footer_section_heading">Featured</span></li>
<li><a href="">Workshop</a></li>
<li><a href="">Database</a></li>
<li><a href="">Components</a></li>
<li><a href="">Consulting</a></li>
</ul>
</div>

<div class="middle_footer_section_support_container">
<ul>
<li><span class="middle_footer_section_heading">Support</span></li>
<li><a href="">Frequently asked questions</a></li>
<li><a href="">Affiliates</a></li>
<li><a href="">Workflow</a></li>
<li><a href="">Professional support</a></li>
<li><a href="">Community</a></li>

</ul>
</div>

<div class="middle_footer_section_company_container">
<ul>
<li><span class="middle_footer_section_heading">Company</span></li>
<li><a href="">Policies</a></li>
<li><a href="">Shop</a></li>
<li><a href="">News</a></li>
<li><a href="">Careers</a></li>

</ul>
</div>

<div class="middle_footer_section_image_container">
<img src="#" alt="#" />
</div>
</section>
</footer>
<style>

* {
color: white;
text-decoration: none;
list-style: none;
}

.footer_container {
background-color: rgba(0,0,0,1);
}

.top_footer_section {
display: flex;
align-items: center;
justify-content: space-between;
padding: 1vw;
}

.home_email {
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
}

.home_email_color_box {
width: 0.5rem;
height: 1rem;
background-color: blue;
}

.home_email_newsletter_text {
color: silver;
}

.home_email_subscribe_button {
background-color: blue;
padding: 10px 20px;
border-radius: 0px;
margin-left: 0.25rem;
transition: all 0.9s linear;
}

.home_email_subscribe_button:hover {
background-color: hotpink;
}

.middle_footer_section {
display: flex;
padding: 1vw;
border-top: 1px solid rgba(30,30,30,1);
align-items: center;
justify-content: flex-start;
}

.middle_footer_section_support_container,
.middle_footer_section_featured_container,
.middle_footer_section_company_container {
background-color: red;
flex-basis: 15%;
}

.middle_footer_section_image_container {
flex-basis: 40%;
}

.middle_footer_section_heading {
font-weight: 700;
font-size: 1rem;
padding-bottom: 10px;
background-color: none;;
display: block;
color: rgba(255,255,255,0.7);
}

</style>
