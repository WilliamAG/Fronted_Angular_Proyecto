import { transition, trigger, style, animate, state } from "@angular/animations";

export const showModal = 
    trigger('enterModal', [

        state('void', style({
            top: "94px",
            opacity: 0
        })),
        state('end', style({
            top: "0px",
            opacity: 1
        })),

        transition("void => end", [
            animate(200)
        ]),
        transition("end => void", [
            animate(200)
        ])
    ])

export const sliceImageModal = 
    trigger('sliceImage',[

        state('static',style({
            left: 0,
            opasity:1,
        })),
        state('sliceRight',style({
            left: "100%",
            opasity:0,
        })),
        state('sliceLeft',style({
            left: "-100%",
            opasity:0,
        })),

        transition('static => sliceLeft',[
            animate(300)
        ]),
        transition('static => sliceRight',[
            animate(300)
        ]),
        transition('sliceRight => static',[
            animate(300)
        ]),
        transition('sliceLeft => static',[
            animate(300)
        ]),
    ])

export const showDataImage = 
    trigger('DataImage', [

        state('show', style({
            opacity: 1
        })),
        state('hide', style({
            opacity: 0
        })),

        transition("show => hide", [
            animate(200)
        ]),
        transition("hide => show", [
            animate(200)
        ])
    ])