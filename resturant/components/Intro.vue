<template>
    <section class="intro">
<h1>
    page name
</h1>
    </section>
</template>
<style>
.intro{
    height: 300px;
    position: relative ;
    padding: 30px;
    box-sizing: border-box;
    background-image: url();
    background-position: center;
    background-size: cover;
}
.intro::after{
    background: #000;
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0%;
    width: 100%;
}
.intro>h1{
    position: absolute;
    top:10%;
    left: 5%;
    width: 90%;
    font-size: 1.5%;
    color: white;
    padding: 10px;
    text-align: center;
    z-index: 999;
}
@media (min-width: 768px){
    .intro h1{
        font-size: 2rem;
    }
}
</style>