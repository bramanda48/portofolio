<script lang="ts">
    import Fa from 'svelte-fa';
    import { faCode } from '@fortawesome/free-solid-svg-icons';
    import { fade } from 'svelte/transition';
</script>

<style>
    .page-wrap {
        min-height: 90vh;
    }

    .background {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-repeat: repeat-x;
        background-position: center;
        width: 100%;
        height: 100%;
        opacity: 0.1;
    }

    .contact h1 {
        font-size: 50px;
    }
    .contact .copyright {
        font-size: 15px;
    }
    .contact .copyright a {
        text-decoration: none;
        color: var(--white);
        letter-spacing: 1px;
    }
    .contact .copyright a:hover {
        text-decoration: underline;
    }
</style>

<div class="page-wrap position-relative d-flex flex-row align-items-center">
    <div class="background" style="background-image: url('/images/worldmap.png');"></div>
    <div class="container">
        <div class="row justify-content-center contact" in:fade>
            <div class="col-md-6 text-center">
                <h1 class="montserrat">Get In <strong>Touch</strong></h1>
                <div class="mb-3">
                    Tell me about your needs and let's start working together on the best solution for your business.
                </div>
                
                <a href="mailto:bramanda48@gmail.com" class="btn btn-outline-light btn-lg mb-3">Say Hello</a>

                <div class="mb-3 copyright">
                    &copy; 2021 Bramanda Febri Suwandi.<br/> Made with <Fa icon={faCode}/> using <a href="https://www.svelte.dev/" target="_blank"><strong>Svelte</strong></a>, <a href="https://sapper.svelte.dev/" target="_blank"><strong>Sapper</strong></a> and <a href="https://getbootstrap.com" target="_blank"><strong>Bootstrap</strong></a>
                </div>
            </div>
        </div>
    </div>
</div>