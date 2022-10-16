<div class="thundery">
	<div class="thundery__cloud"></div>
	<div class="thundery__rain"></div>
</div>

<style lang="scss">
.thundery__cloud {
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

.thundery {
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

.thundery {
	&__cloud {
		&:before {
			background-color: #4d5656;
			background-image: radial-gradient(#4d5656, #393c3c);
			animation: thunder 4s linear .02s infinite alternate;
		}
		&:after {
			background-color: #4d5656;
			background-image: radial-gradient(#4d5656, #393c3c);
			animation: thunder 4s linear infinite alternate;
		}
	}
	&__rain {
		&:before {
			animation: fadeIn .5s ease-out infinite reverse,
				scaleUp .5s ease-out infinite;
		}
		&:after {
			animation: fadeIn .75s ease-out .2s infinite reverse,
				scaleUp .75s ease-out .2s infinite;
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

@keyframes thunder {
	0% { box-shadow: 0 0 25px #fff; }
	2% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	49% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	50% { box-shadow: 0 0 25px #fff; }
	52% { box-shadow: 0 0 25px #f7db6e; }
	53% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	69% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	70% { box-shadow: 0 0 25px #fff; }
	71% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	75% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	76% { box-shadow: 0 0 25px #fff; }
	77% { box-shadow: 0 0 25px #a8d3f0; }
	78% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
	100% { box-shadow: 0 0 25px rgba(0,0,0,.3); }
}
</style>
