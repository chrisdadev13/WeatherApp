<div class="cloudy"></div>

<style lang="scss">
.cloudy {
	position: relative;
	width: 5rem;
	height: 5rem;
}
.cloudy{
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
</style>
