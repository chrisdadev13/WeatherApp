<div class="partly_cloudy">
	<div class="partly_cloudy__sun"></div>
	<div class="partly_cloudy__cloud"></div>
  <div style="margin-left: 25px; margin-top: 20px;" class="partly_cloudy__cloud"></div>
</div>


<style lang="scss">
.sunny {
	position: relative;
	width: 5rem;
	height: 5rem;
	margin-top: 4rem;
}

.sunny,
.partly_cloudy__sun {
	&:before {
		content: "";
		position: absolute;
		height: 80%;
		width: 80%;
		top: 10%;
		right: 10%;
		border-radius: 50%;
		z-index: 2;
		background-color: #f1c40f;
		background-image: radial-gradient(#f1c40f, #f39c12);
		box-shadow: 0 0 25px #917508;
	}
	&:after {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 50%;
		z-index: 1;
		background-color: #f39c12;
		will-change: opacity, transform;
		animation: fadeIn 1s linear infinite reverse,
			scaleDown 1s linear infinite reverse;
	}
}

.cloudy {
	position: relative;
	width: 5rem;
	height: 5rem;
}
.cloudy,
.partly_cloudy__cloud,
.rainy__cloud{
	&:before {
		content: "";
		position: absolute;
		height: 40%;
		width: 40%;
		top: 30%;
		right: 0%;
		border-radius: 50%;
		border-bottom-left-radius: 0;
		z-index: 2;
		background-color: #ecf0f1;
		background-image: radial-gradient(#ecf0f1, #bdc3c7);
		box-shadow: 0 0 25px rgba(0,0,0,.3);
	}
	&:after {
		content: "";
		position: absolute;
		height: 60%;
		width: 70%;
		top: 10%;
		right: 30%;
		border-radius: 50%;
		border-bottom-right-radius: 0;
		z-index: 1;
		background-color: #ecf0f1;
		background-image: radial-gradient(#ecf0f1, #bdc3c7);
		box-shadow: 0 0 25px rgba(0,0,0,.3);
	}
}

.partly_cloudy {
	position: relative;
	width: 5rem;
	height: 5rem;
	&__sun {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	&__cloud {
		position: absolute;
		width: 60%;
		height: 60%;
		top: 40%;
		z-index: 2;
		will-change: transform;
		animation: translateUp 2s linear infinite alternate;
	}
}

// Animations
@keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
@keyframes scaleDown {
	0% { transform: scale(1); }
	100% { transform: scale(.8); }
}

@keyframes translateUp {
	0% { transform: translatey(15%); }
	100% { transform: translatey(0); }
}

@keyframes scaleUp {
	0% { transform: scaley(0); }
	100% { transform: scaley(1); }
}

</style>
