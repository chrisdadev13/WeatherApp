<div class="rainy">
	<div class="rainy__cloud"></div>
	<div class="rainy__rain"></div>
</div>

<style lang="scss">
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

.rainy{
	position: relative;
	width: 5rem;
	height: 5rem;
	&__cloud {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 2;
		&:before {
			background-color: #95a5a6;
			background-image: radial-gradient(#95a5a6, #7f8c8d);
		}
		&:after {
			background-color: #95a5a6;
			background-image: radial-gradient(#95a5a6, #7f8c8d);
		}
	}
	&__rain {
		position: absolute;
		height: 100%;
		width: 100%;
		z-index: 1;
		overflow: hidden;
		&:before {
			content: "";
			position: absolute;
			height: 80%;
			width: 20%;
			top: 20%;
			right: 50%;
			z-index: 1;
			background-image: linear-gradient(transparent, #94cdd1);
			will-change: opacity, transform;
			animation: fadeIn 1s ease-out infinite reverse,
				scaleUp 1s ease-out infinite;
		}
		&:after {
			content: "";
			position: absolute;
			height: 60%;
			width: 20%;
			top: 40%;
			right: 20%;
			z-index: 1;
			opacity: 0;
			background-image: linear-gradient(transparent, #94cdd1);
			will-change: opacity, transform;
			animation: fadeIn 2s ease-out .4s infinite reverse,
				scaleUp 2s ease-out .4s infinite;
		}
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
