<template lang="pug">
    nav(:class="{ scrolled }")
        .content
            .nav--links
                nuxt-link(to="/" tag="h2").logo
                    .inner #hack<span class="bold">the</span>cord
                    .inner.slide #hack<span class="bold">the</span>cord

                a(href="https://devcord.com").sponsor sponsored by 
                    span.bold Devcord

                //- nuxt-link(to="/") About
                //- nuxt-link(to="/teams") Teams
                //- nuxt-link(to="/projects") Projects
                //- nuxt-link(to="/individuals") Individuals
                //- nuxt-link(to="/account") Account
</template>

<script>
    export default {
        data () {
            return {
                scrolled: false
            }
        },

        mounted () {
            window.addEventListener('scroll', () => {
                Object.assign(this, { 
                    scrolled: document.querySelector('html').scrollTop > 0
                })
            })
        }
    }
</script>

<style lang="sass" scoped>
    nav
        display: flex    
        justify-content: center    
        width: 100%     
        background-color: transparent
        position: fixed
        top: 0   
        transition: background-color 0.2s
        z-index: 2

        &.scrolled
            background-color: #212121   

        .content     
            display: flex    
            align-items: center    
            justify-content: space-between    
            .nav--links    
                display: flex    
                align-items: center    
                
        .nav--links
            display: flex
            width: 100%

            a     
                padding: 0.5rem    
                margin-right: 0.5rem    
                color: #f4f4f4    
                font-weight: 700    
                box-shadow: inset 0 0 0 0 #f0134d    
                transition: 0.2s    

                &.router-link-exact-active     
                    &:hover     
                        color: #f4f4f4 !important    
                    
                &:hover     
                    color: #f4f4f4    
                    box-shadow: inset 0 -3rem 0 0    #f0134d    
                    
                &.join--button     
                    background-color: #111111    
                    color: #f4f4f4    
                    margin-right: 0    
                    transition: 0.2s    
                    cursor: pointer    
                    
            .logo     
                display: flex    
                padding: 0    
                font-weight: 200
                cursor: pointer
                position: relative
                

                .inner
                    height: 100%
                    display: flex
                    align-items: center
                    justify-content: center
                    clip-path: inset(0 0 0 0)
                    transition: clip-path 0.2s

                .slide
                    position: absolute
                    top: 0
                    left: 0
                    color: #f0134d 
                    clip-path: inset(100% 0 0 0)
                    transition: clip-path 0.2s

                &:hover
                    .inner
                        clip-path: inset(0 0 100% 0)

                    .slide
                        clip-path: inset(0 0 0 0)

                svg     
                    rect#black     
                        animation: fillBlackDown normal forwards 0.2s    
                    
                &:hover     
                    svg     
                        rect#black     
                            animation: fillRedUp normal forwards 0.2s    
                        
                    box-shadow: none    

            .sponsor
                font-size: 12px
                margin-right: auto
                font-weight: 200
                opacity: 0.9

                &:hover
                    box-shadow: none

                .bold
                    margin: 0
                    padding: 0
                    
        
    @media only screen and (max-width: 800px)     
        nav     
            img     
                margin-right: 1rem    
            
        
    @keyframes fillRedUp     
        0%     
            height: 100%    
            
        100%     
            height: 0%    
            
        
    @keyframes fillBlackDown     
        0%     
            height: 0%    
            
        100%     
            height: 100%    
</style>
