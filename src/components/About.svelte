
<script lang="ts">
    import Fa from 'svelte-fa';
    import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
    import { onMount } from 'svelte';

    let visible = false;
    onMount(async () => {
        visible = true;
    });

    const typewriter = (node, { speed = 50 }) => {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);
		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length * speed;
		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<style>
    .introduce {
        padding-top: 15px;
    }
    .introduce .col-lg-7 {
        align-self: center;
    }
    .introduce .col-lg-5 {
        height: 400px;
    }
    .introduce .col-lg-5::before {
        content: '';
        background-image: url("/images/bg-photo.png");
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        top: 25px;
        left: 10px;
        opacity: 0.8;
    }
    
    .introduce .introduce-name .background {
        position: absolute;
        left: -15%;
        font-size: 170px;
        font-family: "Monoton", sans-serif;
        color: rgb(255, 255, 255);
        opacity: 0.05;
        z-index: 1;
    }  
    .introduce .introduce-name h3 {
        font-size: 40px;
        position: relative;
        letter-spacing: 3px;
        z-index: 2;
    }
    .introduce .introduce-name h3::after {
        content: '';
        width: 440px;
        height: 2px;
        position: absolute;
        top: 50%;
        left: 23%;
        background: var(--white);
    }
    .introduce .introduce-name h1 {
        letter-spacing: 6px;
        font-weight: 400;
        z-index: 2;
    }
    .introduce .introduce-name h1 span {
        font-weight: 700;
        color: var(--green);
    }  
    .introduce .introduce-photo {
        width: 250px;
        overflow: hidden;
        box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
        border: 5px solid var(--navy-dark);
        z-index: 2;
    }

    @media only screen and (max-width: 992px) {
        .introduce .col-lg-5::before {
            display: none;
        }
    }

    @media only screen and (max-width: 600px) {
        .introduce .introduce-name h3::after {
            display: none;
        }
        .introduce .introduce-name h1 {
            font-size: 18px;
        }
    }
</style>

<div class="container">
    <div class="row introduce">
        <div class="col-lg-7">
            <div class="introduce-name mb-3">
                <div class="background d-none d-sm-block">
                    manda
                </div>
                <div class="text">
                    <h3 class="text-uppercase font-weight-bold">Hello</h3>
                    <h1 class="position-relative">
                        I'AM {#if visible}<span in:typewriter={{ speed: 100 }} class="text-uppercase">Bramanda Febri S</span>{/if}
                    </h1>
                </div>
            </div>
            {#if visible}
            <div class="introduce-desc mb-3">
                <p>A developer from <strong>Malang, Indonesia</strong>. I'm a developer with a passion for new technologies and clean code. I specialize in web programming and scripting, especially PHP, Node.js, and .NET Core API. My primary expertise is in backend development, and sometimes I also do the frontend development.</p>
                <p>I love programming a lot of things such as websites, automation, applications and others. I have more than 4 years experience in programming and always learning new technology to keep me up to date.</p>
            </div>
            {/if}
            
            <a href="/#contact" class="btn btn-outline-light btn-lg">Get In Touch</a>
        </div>
        <div class="col-lg-5 d-flex justify-content-center">
            <div class="introduce-photo align-self-center rounded-circle">
                <img src="images/photo.png" class="w-100" alt="">
            </div>
        </div>
    </div>
    <div class="row navigation mt-3">
        <div class="col-md-12 text-center animation-bounce">
            <a href="/#career">
                <Fa icon={faChevronDown} color="#007bff" size="2x"/>
            </a>
        </div>
    </div>
</div>