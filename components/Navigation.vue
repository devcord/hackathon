<template lang="pug">
    nav
        .content
            .nav--links
                nuxt-link(to="/" tag="h2").logo
                    .inner #hack<span class="bold">the</span>cord
                    .inner.slide.background--dark #hack<span class="bold">the</span>cord

                nuxt-link(to="/") Home
                nuxt-link(to="/teams") Teams
                nuxt-link(to="/projects") Projects
                nuxt-link(to="/individuals") Individuals
                nuxt-link(to="/account") Account
            //- a.join--button(href="https://discord.gg/devcord", title="Join 5000 others on devcord!")    Join us
</template>

<style lang="sass" scoped>
    nav     
        display: flex    
        justify-content: center    
        width: 100%    
        background-color: #212121    
        position: sticky    
        top: 0   

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
                margin-right: auto    
                font-weight: 200
                cursor: pointer
                position: relative

                .inner
                    height: 100%
                    display: flex
                    align-items: center
                    justify-content: center

                .slide
                    position: absolute
                    top: 0
                    left: 0
                    color: #f0134d 
                    clip-path: inset(100% 0 0 0)
                    transition: clip-path 0.2s

                &:hover > .slide
                    clip-path: inset(0 0 0 0)

                .bold
                    font-weight: 600

                svg     
                    rect#black     
                        animation: fillBlackDown normal forwards 0.2s    
                    
                &:hover     
                    svg     
                        rect#black     
                            animation: fillRedUp normal forwards 0.2s    
                        
                    box-shadow: none    
                    
        
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
