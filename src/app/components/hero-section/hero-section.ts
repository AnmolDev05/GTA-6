import { AfterViewInit, Component } from '@angular/core';
import { Gsap } from '../../services/gsap';
import { SecondScreen } from '../second-screen/second-screen';
@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection implements AfterViewInit {

  constructor(private gsapService: Gsap){
  }
  ngAfterViewInit(): void {
    this.gsapService.gsap.set('.hero-section-masking-div', {
      maskPosition: '50% -786vh',
      maskSize:'3370% 3375vh', 
    })

    this.gsapService.gsap.to('.scroll-icon', {
      y: 10,
      repeat: -1,
      scale : 1,
      opacity : 1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 1,
    })
    const tl = this.gsapService.gsap.timeline({
      scrollTrigger : {
        trigger : '.main-hero-section-div',
        start: 'top top',   
        end: '+=250%',
        scrub: 2.5,
        pin: true,  
      },
    })
    tl
    .to('.youtube-btn',{opacity : 0,duration: 0.1,ease: "power1.inOut" },'<')
    .to('.watch-trailer-btn',{opacity : 0,duration: 0.2,ease: 'power1.inOut'},'<')
    .to('.hero-section-main-overlay',{opacity : 0,scale : 1,ease: 'power1.inOut'},'<')
    .to('.hero-section-main-size',{scale : 1,ease: 'power1.inOut'},'<')
    .to('.hero-section-masking-div', {maskPosition: 'center 20%',maskSize: '30%',ease: 'power1.inOut' }, '<')
    .to('.hero-section-masking-div', {opacity : 0, duration : 1, ease: 'power4.inOut'}, '<')
    .to('.hero-section-on-mask-div', {opacity : 1,duration : 2,ease: 'power4.inOut', transformOrigin: "center bottom",
    }, "<")
    .to('.hero-section-on-mask-div', {opacity : 0,ease: 'power4.inOut',
    },">+1%");
//     .to('.hero-section-on-mask-div', {
//   opacity: 1,
//   y: -20,
//   scale: 1, 
//   transformOrigin: "center bottom",
//   ease: "power4.inOut",
// }, "<")



    // this.gsapService.gsap.ScrollTrigger('.hero-section-masking-div',{

    // })
    // this.gsapService.gsap.to('.hero-section-masking-div', {
    //   maskPosition: '48% -10vh',
    //   maskSize: '20% 78vh',
    //   duration: 10,
    //   scale : 1
    // });
    // this.gsapService.gsap.to('.hero-section-main-size', {
    //   duration: 10,
    //   background : '#fff'
    // });
  }
  
}
