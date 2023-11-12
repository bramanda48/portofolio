<script lang="ts">
    export let segment: string;
</script>

<style>
    .navbar {
        margin-top: -20px;
        z-index: 2;
    }
    .navbar .navbar-logo {
        width: 120px;
        overflow: hidden; 
    }

    .navbar .navbar-nav .nav-link:hover {
        color: var(--green);
    }

    @media only screen and (max-width: 992px) {
        .navbar {
            margin-top: auto;
        }
    }
</style>

<nav class="navbar navbar-expand-lg navbar-dark pb-0 justify-content-center bg-transparent">
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
        <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item mr-3 {segment == undefined ? 'active': ''}">
                <a class="nav-link" href="/">About Me</a>
            </li>
            <li class="nav-item mr-3 {segment == 'career' ? 'active': ''}">
                <a class="nav-link" href="/#career">Career Sumary</a>
            </li>
            <li class="nav-item mr-3 {segment == 'portofolio' ? 'active': ''}">
                <a class="nav-link" href="/#portofolio">Portofolio</a>
            </li>
        </ul>
    </div>
    <div class="order-0 order-md-1 position-relative">
        <div class="navbar-logo rounded-circle">
            <a class="mx-auto" href="/">
                <img src="images/logo.png" class="w-100" alt="">
            </a>
        </div>
    </div>
    <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul class="navbar-nav mr-auto text-center">
            <li class="nav-item ml-3 mr-3 {segment == 'skill' ? 'active': ''}">
                <a class="nav-link" href="/#skill">Skills & Tools</a>
            </li>
            <li class="nav-item mr-3 {segment == 'articles' ? 'active': ''}">
                <a class="nav-link disabled" href="/articles">Articles</a>
            </li>
            <li class="nav-item {segment == 'contact' ? 'active': ''}">
                <a class="nav-link" href="/#contact">Contact Us</a>
            </li>
        </ul>
    </div>
</nav> 