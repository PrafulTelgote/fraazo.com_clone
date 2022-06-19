@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        
*{
list-style: none;
text-decoration: none;
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Open Sans', sans-serif;
}
body{
background: #f5f6fa;
}
.wrapper .sidebar{
background: rgba(245, 249, 252, 0.979);
position: fixed;
top: 0;
left: 0;
width: 225px;
height: 100%;
padding: 20px 0;
transition: all 0.5s ease;
}


.wrapper .sidebar .profile{
	margin-bottom: 30px;
	text-align: center;
}
.wrapper .sidebar .profile img{
	display: block;
	width: 100px;
	height: 100px;
    border-radius: 50%;
	margin: 0 auto;
}
.wrapper .sidebar .profile h3{
	color: #272626;
	margin: 10px 0 5px;
}
.wrapper .sidebar .profile p{
	color: rgb(206, 240, 253);
	font-size: 14px;
}
.wrapper .sidebar ul li a{
	display: block;
	padding: 13px 30px;
	/* border-bottom: 1px solid #060707; */
    line-height: 25px;
	color: rgb(241, 237, 237);
	font-size: 16px;
	position: relative;
}
.wrapper .sidebar ul li a .icon{
	color: #08090a;
	width: 30px;
	display: inline-block;
}
.wrapper .sidebar ul li a{
	display: block;
	padding: 13px 30px;
	/* border-bottom: 1px solid #0c0e0f; */
	color: rgb(19, 16, 16);
	font-size: 16px;
	position: relative;
}
.wrapper .sidebar ul li a .icon{
	color: #060708;
	width: 30px;
	display: inline-block;
}
.wrapper .sidebar ul li a:hover,
.wrapper .sidebar ul li a.active{
	color: #0b0c0c;
	background:white;
    /* border-right: 2px solid rgb(11, 12, 12); */
}
.wrapper .sidebar ul li a:hover .icon,
.wrapper .sidebar ul li a.active .icon{
	color: #101111;
}
.wrapper .sidebar ul li a:hover:before,
.wrapper .sidebar ul li a.active:before{
	display: block;
}

<!--Top Menu & Menu button-->
<div class="sidebar">
  <div class="profile">
	<!--Profile Image-->
	<img
	  src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
	  alt="profile_picture"
	/>
	<!--MObile no.-->
	<h3>+919450987009</h3>
  </div>
  <!-- <i class="fas fa-home"></i> -->
  <!--Menu item-->

  <ul>
	<li>
	  <a href="#" class="active">
		<span class="icon"
		  ><img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAYAAACZZ43PAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgB7ZQxb8IwEIXvxVGaNsyJ2goo3TvDDDs7e3f+Red2756dnc5lLnuIIoHMjgqo8fUMtEIhElSsvSWxfe/znc9nUIlFURQ6vt8FUZNgKmzwblarWGs9L/qiRBwo33uRlYDZGRI4EKcOMc/z5bovkMW+v1sEuL7fZHCYM/o6TZMNtFodKoUndeV1ZDjY93eKAAN+sLv9iK3pLBvbLzMaRf8DwF8NuxC7SlFPhsFJKomQoIbTySSGPXF1efEq4X0AZsyEJgiRJDMoyKQq0Ew8YqYGgFb+ueq55HmhXTXGxDbX67taSGwq0zSL99U39VrbgJLZJItv6/W2gFqibZx9BgdlNIwBMY2L8zkhlvnkKGBXvqRk/o1K7OwU/gEWsF5v29Ol+1NFbEy0VTuLTS/I7XuWn5MBG4j0wyzNHn8flEiup8KOfMTAjv5aLkf2cfkGJYWOd3BeY1QAAAAASUVORK5CYII="
		/></span>
		<span class="item"> My Orders</span>
	  </a>
	</li>
	<li>
	  <a href="#">
		<span class="icon"
		  ><img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBzZTNTcNAEIXfrA2KhIR8NFgiU4JLgEoQFUAHQAdQCVBBkgpwBywRCB994gQ7vM0Pt0ixs4d8l9WM5aeZ2Z0nIJVWtSG7NpiiF/L85eeP/1GppWY4fDUGBml6KEFg5wHhovUf0xjnDge3AegMjknvtxUqVZVibxlE1zlHkRh0fYQ2kS/LRX2qZ6wwzLb/9VcXjXLOcVStb72c6HjCVM2vBXYgzm5RGdUb3uYV8KMYQAb35OAu83ViNTOPAXBEXTwdEpJULEcC+BpeAmyaROzTz2/iuX9tFloUI4yKJGJHOJ7QKJokbdpqe1K/M3sXSB2XFTsilSqXPMSe6WnmMQAWQ5PEvcRgaXThjukxBkDXmX3DPfwB2xVZk+woqxoAAAAASUVORK5CYII="
		/></span>
		<span class="item">My Credits</span>
	  </a>
	</li>
	<li>
	  <a href="#">
		<span class="icon"
		  ><img
			src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIdSURBVHgBlVM7cNNAEN09GSex/JGYiTQYHJOkTUMVatS7ogkFFT3UpKLAPX16U7uicerQ0CQNRT628JhTgwk+AvHojl3ZYYyQk3hnJJ32dt/tvX2LMDW/VtsSQjRoacMtTRiz3+/1Ory2+HW/Xn+CAnYRjSvAfEMwcNNjADwQEBRK5UN1fh7lpuCBMSYadMMXsIBVH9Za01sciRm/nA3yfd+mx5v599JAaMQJgE6oyGWdxEnWcr4JiN69tbUOCEHX0UG1XoviX5evpZRROkdkAVkr+YBBklOJBwaZlICeVcg/zsrJBIpjUDDH4hjVrYFkGLapKydpP/vktN3/AZF+Ggb1RnpDX/zenQXjNfvScYhio7q+3rAc131OTD4gR7Hk3h3/GA4/c4BSajwafv9QrJRsiv4yOOu9YR/vcUcrq6tPATXzZRuj7yCJ8S310dYAp0h6AtITGmz151yBJ8AS8IqJJ+0dUo5P1Uqr7DiBBjMmMTYLdvEUhXjEii07le3C0vInqkJdAZRd9yUp4VlyTQ3vvvbC92XH3Wad/6Mj2e8f0OfAp5GhUdmxVpb2Eh3BRAbEnCIa9gZnYTtdaaYgZbe7Tzx8JD01UOAOUc1VteKLyzaJMbP9mUAJ2CSh5W9udmA0UvMA/gJp0D+pY1tzAY+Po+sADGifwzDpgoVN7pYBIWEBw0R/aMdEPLKDyc1dzdMCRpJR1L02TcLRH5Ci4YcRQKs4AAAAAElFTkSuQmCC"
		/></span>
		<span class="item">Invite A Friend</span>
	  </a>
	</li>
	<li>
	  <a href="#">
		<span class="icon"
		  ><img
			src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguMDAwMTYgMTQuNjY2N0MxMS42ODIxIDE0LjY2NjcgMTQuNjY2OCAxMS42ODE5IDE0LjY2NjggOEMxNC42NjY4IDQuMzE4MSAxMS42ODIxIDEuMzMzMzMgOC4wMDAxNiAxLjMzMzMzQzQuMzE4MjYgMS4zMzMzMyAxLjMzMzUgNC4zMTgxIDEuMzMzNSA4QzEuMzMzNSAxMS42ODE5IDQuMzE4MjYgMTQuNjY2NyA4LjAwMDE2IDE0LjY2NjdaIiBzdHJva2U9IiM0QzRDNEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYuMDYwMDYgNS45OTk5N0M2LjIxNjc5IDUuNTU0NDEgNi41MjYxNiA1LjE3ODcxIDYuOTMzMzYgNC45MzkzOUM3LjM0MDU2IDQuNzAwMDcgNy44MTkzMiA0LjYxMjU5IDguMjg0ODQgNC42OTI0NEM4Ljc1MDM2IDQuNzcyMjkgOS4xNzI2IDUuMDE0MzIgOS40NzY3OCA1LjM3NTY1QzkuNzgwOTUgNS43MzY5OSA5Ljk0NzQzIDYuMTk0MzIgOS45NDY3MiA2LjY2NjYzQzkuOTQ2NzIgNy45OTk5NyA3Ljk0NjcyIDguNjY2NjQgNy45NDY3MiA4LjY2NjY0IiBzdHJva2U9IiM0QzRDNEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTggMTEuMzMzM0g4LjAwNjY3IiBzdHJva2U9IiM0QzRDNEMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
		/></span>
		<span class="item">Help & Support</span>
	  </a>
	</li>
	<li>
	  <a href="#">
		<span class="icon"
		  ><img
			src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMTRIMy4zMzMzM0MyLjk3OTcxIDE0IDIuNjQwNTcgMTMuODU5NSAyLjM5MDUyIDEzLjYwOTVDMi4xNDA0OCAxMy4zNTk0IDIgMTMuMDIwMyAyIDEyLjY2NjdWMy4zMzMzM0MyIDIuOTc5NzEgMi4xNDA0OCAyLjY0MDU3IDIuMzkwNTIgMi4zOTA1MkMyLjY0MDU3IDIuMTQwNDggMi45Nzk3MSAyIDMuMzMzMzMgMkg2IiBzdHJva2U9IiNEMDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEwLjY2NiAxMS4zMzMyTDEzLjk5OTMgNy45OTk4NEwxMC42NjYgNC42NjY1IiBzdHJva2U9IiNEMDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDhINiIgc3Ryb2tlPSIjRDAxNDE0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
		/></span>
		<span class="item" style="color: red">Logout</span>
	  </a>
	</li>
  </ul>
</div>