<div class="sunny"></div>

<style lang="scss">
.sunny {
	position: relative;
	width: 5rem;
	height: 5rem;
	margin-top: 4rem;
}

.sunny{
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

// Animations
@keyframes fadeIn {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
@keyframes scaleDown {
	0% { transform: scale(1); }
	100% { transform: scale(.8); }
}

</style>
