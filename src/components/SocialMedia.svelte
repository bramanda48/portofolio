<script lang="ts">
    import Fa from 'svelte-fa';
    import { faAt } from '@fortawesome/free-solid-svg-icons';
    import { faLinkedin, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<style>
    .social {
        list-style-type: none;
    }
    .social ul li {
        display: inline-block;
        margin-right: 20px;
    }
    .social ul li a {
        text-decoration: none;
        font-size: 35px;
        color: #95a5a6;
        transition: color .2s ease-in-out;
    }
    .social ul li a.facebook:hover {
        color: #4867aa;
    }
    .social ul li a.linkedin:hover {
        color: #0077b5;
    }
    .social ul li a.instagram:hover {
        color: #b33793;
    }
    .social ul li a.at:hover {
        color: #ef6011;
    }
</style>

<div class="social">
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