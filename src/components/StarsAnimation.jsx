import React, { useRef, useEffect } from 'react'

// Canvas starfield with parallax and subtle nebula overlay
export default function StarsBackground(){
    const ref = useRef(null)

    useEffect(()=>{
        const canvas = ref.current
        const ctx = canvas.getContext('2d')
        let w, h, stars = []
        let scrollY = 0
        let targetScrollY = 0
        
        function resize(){
            w = canvas.width = innerWidth
            h = canvas.height = innerHeight
            stars = Array.from({length: Math.floor((w*h)/50000)}, ()=>({
                x: Math.random()*w,
                y: Math.random()*h,
                z: Math.random()*1.2 + 0.2,
                r: Math.random()*1.5 + 0.3,
                flickerSpeed: Math.random()*0.5 + 0.3,
                flickerPhase: Math.random()*Math.PI*2
            }))
        }
        resize()
        window.addEventListener('resize', resize)

        function handleScroll(){
            targetScrollY = window.scrollY
        }
        window.addEventListener('scroll', handleScroll)

        let t = 0
        function render(){
            t += 0.01
            
            // Slower easing for longer delay and persistence
            scrollY += (targetScrollY - scrollY) * 0.035
            
            ctx.clearRect(0,0,w,h)
            // nebula gradient - darker futuristic tones
            const g = ctx.createLinearGradient(0,0,w,h)
            g.addColorStop(0, 'rgba(15,5,45,0.45)')
            g.addColorStop(0.3, 'rgba(5,20,60,0.38)')
            g.addColorStop(0.7, 'rgba(0,15,45,0.42)')
            g.addColorStop(1,'rgba(0,5,15,0.5)')
            ctx.fillStyle = g
            ctx.fillRect(0,0,w,h)
            
            // stars
            for (let s of stars){
                const scrollOffset = scrollY * s.z * 0.1
                const px = (s.x + Math.sin(t*s.z*0.3)*20)
                const py = (s.y + Math.cos(t*s.z*0.3)*10) - scrollOffset
                
                // Realistic flickering
                const flicker = 0.7 + Math.sin(t * s.flickerSpeed + s.flickerPhase) * 0.3
                const brightness = flicker * s.z
                
                ctx.beginPath()
                ctx.fillStyle = `rgba(255,255,255,${brightness})`
                ctx.arc(px, py, s.r*s.z, 0, Math.PI*2)
                ctx.fill()
                
                // Add subtle glow for brighter stars
                if(s.r > 1.2){
                    ctx.beginPath()
                    ctx.fillStyle = `rgba(255,255,255,${brightness * 0.15})`
                    ctx.arc(px, py, s.r*s.z*2.5, 0, Math.PI*2)
                    ctx.fill()
                }
            }

            requestAnimationFrame(render)
        }
        render()

        return ()=> {
            window.removeEventListener('resize', resize)
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <canvas ref={ref} className="stars-canvas" />
    )
}