<script lang="ts">
    import Fa from 'svelte-fa';
    import { faAt } from '@fortawesome/free-solid-svg-icons';
    import { faLinkedin, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<style>
    .social {
        width: 40px;
        position: fixed;
        bottom: 0px;
        left: 40px;
        right: auto;
        z-index: 2;
    }
    .social::after {
        content: "";
        display: block;
        width: 1px;
        height: 90px;
        margin: 0px auto;
        background-color: var(--navy-dark);
    }
    .social .content {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        position: relative;
    }
    
    .social ul {
        list-style: none;
    }
    .social ul li {
        margin-bottom: 3px;
        transition: transform .2s ease-in-out;
    }
    .social ul li:hover {
        transform: scale(1.2);
    }
    .social ul li a {
        text-decoration: none;
        font-size: 25px;
        color: var(--white);
    }
</style>

<div class="social d-none d-lg-block">
    <div class="content">
        <ul class="pl-0">
            <li>
                <a href="https://www.linkedin.com/in/bramanda48" class="linkedin" target="_blank">
                    <Fa icon={faLinkedin}/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/bramanda.febri" class="instagram" target="_blank">
                    <Fa icon={faInstagram}/>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/bram.febri" class="facebook" target="_blank">
                    <Fa icon={faFacebookSquare}/>
                </a>
            </li>
            <li>
                <a href="mailto:bramanda48@gmail.com" class="at">
                    <Fa icon={faAt}/>
                </a>
            </li>
        </ul>
    </div>
</div>