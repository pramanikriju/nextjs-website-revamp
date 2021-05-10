import React,   { useState }  from "react";

import { useSpring, useTrail, animated } from 'react-spring'


function Icon() {

    const boxes = [
        <path
        fill="#3f3d56"
        d="M922.351 606.563H939.528V623.74H922.351z"
        transform="rotate(90 956.19 435.052)"
    ></path>,
    <path
        fill="#5b86e5"
        d="M894.676 606.563H911.8530000000001V623.74H894.676z"
        transform="rotate(90 928.515 435.052)"
    ></path>,
    <path
        fill="#3f3d56"
        d="M867.002 606.563H884.179V623.74H867.002z"
        transform="rotate(90 900.84 435.052)"
    ></path>,
    <path
        fill="#3f3d56"
        d="M839.327 606.563H856.504V623.74H839.327z"
        transform="rotate(90 873.166 435.052)"
    ></path>,
    <path
    fill="#3f3d56"
    d="M811.653 606.563H828.83V623.74H811.653z"
    transform="rotate(90 845.492 435.052)"
  ></path>
    ];

    const springs = useTrail(
        boxes.length,
        {
          config: { frequency: 0.6 ,  mass : 1},
          to: {  rotateX: 10 },
          from: {  rotateX: -10, },
          // as we map over the envelopes, increase the delay
          // first envelope -> delay: 0ms
          // second envelope -> delay: 100ms
          // etc.
          //delay:  100,
          loop: { reverse: true }
        }
      );
    
      const animatedEnvelopes = springs.map((animatedStyle, index) => (
        // use `animated.g` instead of `g` as the `animatedStyle`
        // is a special react-spring flavour of the `style` property
        <animated.g
          key={index} // YOLO
          style={animatedStyle} // apply the animated style
        >
          {boxes[index]}
        </animated.g>
      ));

    const fade = useSpring({
        to: { opacity: 1 , translateX : 0},
        from: { opacity: 0.7, translateX: 50 },
        config: { frequency: 0.6 ,  mass : 1},
        //reset: true,
        //delay: 500,
      });

      const spin = useSpring({
        to: { scale : 1.1},
        from: { rotate3d : 1 },
        //reset: true,
        loop: true,
      });

      const bottomFade = useSpring({
        to: {  scale:1 },
        from: {  scale : 0.8 },
        delay: 200,
        loop:false,
        config : { mass: 2, tension:120, friction: 12, frequency: 1 }
      });

      const leftFade = useSpring({
        to: { translateX: 0},
        from: { translateX : 200 },
        //delay: 200,
        //loop:true,
        config : { mass: 1, tension: 120, friction: 14 }
      });

      const boxMove = useSpring({
        to: [
          { translateX: 0, translateY: 0},
           { translateX: -10, translateY: 0},
            { translateX: -10, translateY: -10},
            { translateX: 0, translateY: -10},
            { translateX: 0, translateY: 0},
            { translateX : 20, translateY: 0 },
          ],
        from: { translateX : 20, translateY: 0 },
        //delay: 200,
        loop:true,
        config : { mass: 1, tension: 120, friction: 14 }
      });
     

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      style={fade}
      data-name="Layer 1"
      viewBox="0 0 890.302 489.3"
    >
      <path fill="#e6e6e6" d="M182.972 0.399H886.548V451H182.972z"></path>
      <path fill="#fff" d="M245.187 60.907H499.187V321.907H245.187z"></path>
      <path fill="#fff" d="M594.187 65.969H848.187V382.969H594.187z"></path>
      <ellipse
        cx="844.802"
        cy="477.262"
        fill="#e6e6e6"
        rx="45.5"
        ry="6.5"
      ></ellipse>
      <ellipse
        cx="389.9"
        cy="477.407"
        fill="#e6e6e6"
        rx="45.5"
        ry="6.5"
      ></ellipse>
      <ellipse
        cx="104.425"
        cy="470.907"
        fill="#e6e6e6"
        rx="104.425"
        ry="5"
      ></ellipse>
      <path fill="#5b86e5" d="M182.672 0H886.248V29.89H182.672z"></path>
      <circle cx="204.884" cy="15.282" r="5.54" fill="#e6e6e6"></circle>
      <circle cx="225.913" cy="15.282" r="5.54" fill="#e6e6e6"></circle>
      <circle cx="246.941" cy="15.282" r="5.54" fill="#e6e6e6"></circle>
      <path
        fill="#3f3d56"
        d="M947.036 356.349h-1.538v-42.15a24.396 24.396 0 00-24.396-24.396H831.8a24.396 24.396 0 00-24.395 24.395V545.44a24.396 24.396 0 0024.395 24.396h89.302a24.396 24.396 0 0024.395-24.396V386.352h1.54z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#fff"
        d="M921.086 296.15H909.43a8.655 8.655 0 01-8.013 11.924h-51.16a8.656 8.656 0 01-8.014-11.925h-10.888a18.218 18.218 0 00-18.218 18.219V545.27a18.218 18.218 0 0018.218 18.218h89.732a18.218 18.218 0 0018.219-18.218V314.368a18.218 18.218 0 00-18.219-18.219z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path fill="#e6e6e6" d="M284.09 225.776H460.634V233.829H284.09z"></path>
      <path fill="#5b86e5" d="M284.09 251.776H460.634V259.829H284.09z"></path>
      <path fill="#e6e6e6" d="M284.09 277.776H460.634V285.829H284.09z"></path>
      <path fill="#e6e6e6" d="M670.839 243.346H773.903V251.399H670.839z"></path>
      <path fill="#e6e6e6" d="M670.839 268.346H773.903V276.399H670.839z"></path>
      <path fill="#e6e6e6" d="M670.839 293.346H773.903V301.399H670.839z"></path>



      <g id="boxes">
      {animatedEnvelopes}
      </g>

      {/* d="M692.742 138.99H750V196.24800000000002H692.742z" */}
      <animated.g style={boxMove}>
        <path
          fill="#5b86e5"
          d="M692.742 138.99H750V196.24800000000002H692.742z"
        ></path>
      </animated.g>
     
      <path
        fill="#a0616a"
        d="M504.454 480.943l-.74 1.482-2.224-11.117s-2.965-11.858 2.964-11.858 4.447 11.858 4.447 11.858v8.153zM601.696 479.425l.74 1.483 2.224-11.117s2.965-11.859-2.964-11.859-4.447 11.859-4.447 11.859v8.152z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M382.215 358.94L373.322 413.784 377.768 467.145 388.144 462.699 386.662 422.677 397.038 390.808 399.261 428.606 394.815 467.886 408.155 469.369 417.79 388.585 417.049 361.163 382.215 358.94z"
      ></path>
      <path
        fill="#2f2e41"
        d="M537.064 665.825l-5.188 8.153v18.216a2.209 2.209 0 001.857 2.18c2.543.418 6.97.714 8.52-1.868 2.223-3.706.74-11.858.74-11.858s2.965-5.93 1.483-10.376-2.965-5.188-2.965-5.188zM559.298 673.237l1.483 2.223s2.223 2.223.74 3.706a28.966 28.966 0 00-2.964 3.705s-8.152 2.224-8.152-.74v-9.636z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <circle cx="401.778" cy="288.795" r="9.824" fill="#a0616a"></circle>
      <path
        fill="#a0616a"
        d="M395.185 291.867L394.444 305.949 407.784 306.69 407.043 292.608 395.185 291.867z"
      ></path>
      <path
        fill="#575a89"
        d="M564.486 512.41l-2.104-5.14s-9.754-3.753-12.718-.048l-1.483 4.447-11.858-2.964-6.67 14.822 5.93 42.245s15.563 20.01 36.315.741l5.929-40.021-4.447-15.564z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#575a89"
        d="M417.049 308.543L418.531 305.578 433.354 296.684 442.4 269.907 449.4 272.907 441.506 304.837 420.013 324.847 417.049 308.543z"
      ></path>
      <path
        fill="#575a89"
        d="M382.956 304.837L381.474 303.355 365.91 293.72 354.793 271.486 345.9 274.45 355.534 301.872 379.251 321.142 382.956 304.837z"
      ></path>
      <path
        fill="#2f2e41"
        d="M563.919 479.1l1.606-.803-2.41-.803v-.803s-12.046-4.819-13.653 3.213a16.143 16.143 0 000 19.275v2.41l12.85 1.606 1.607-4.82s8.031-14.456 0-19.275z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#ffb8b8"
        d="M269.939 565.16l-2.856 1.427s-11.421 5.235-8.09 8.09 12.374-2.855 12.374-2.855l1.903-2.38z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M198.633 359.099L189.807 418.346 176.481 459.749 169.343 456.418 176.005 399.786 156.969 383.605 158.397 359.81 198.633 359.099z"
      ></path>
      <path
        fill="#2f2e41"
        d="M323.24 663.196s8.09-4.283 8.566 1.903l-.951 6.187s2.855 10.946-6.663 8.566-2.856-9.518-2.856-9.518zM318.005 583.72l-6.187 5.235s0 32.361 4.284 37.12 31.41 29.03 32.36 29.982 5.236-9.518 5.236-9.518l-25.699-29.982 1.904-18.56z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M350.842 645.112s7.615-1.428 7.615 3.807a115.231 115.231 0 00.952 12.373s1.903 16.657-4.283 14.277-8.567-19.036-8.567-19.036a7.09 7.09 0 012.856-3.331c1.903-.952 1.427-8.09 1.427-8.09z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#ffb8b8"
        d="M172.198 288.424L173.626 306.033 169.819 312.695 159.349 302.701 158.397 289.376 172.198 288.424z"
      ></path>
      <circle cx="163.632" cy="282.713" r="11.422" fill="#ffb8b8"></circle>
      <path
        fill="#d0cde1"
        d="M168.391 305.557L173.15 291.756 181.716 301.274 197.421 361.713 185.523 368.852 180.289 361.237 179.337 371.231 156.017 366.472 154.114 302.701 158.87 296.002 168.391 305.557z"
      ></path>
      <path
        fill="#2f2e41"
        d="M161.728 373.135L158.873 296.039 152.686 300.798 141.264 308.412 148.879 335.539 151.258 364.093 161.728 373.135z"
      ></path>
      <path
        fill="#2f2e41"
        d="M144.596 308.888L141.264 308.412 131.746 336.49 112.71 360.286 119.849 367.9 141.74 346.484 149.831 328.876 144.596 308.888z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M351.417 565.595l-.649 3.126s-2.97 12.208 1.335 11.363 5.428-11.48 5.428-11.48l-.688-2.968z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M172.406 290.983L195.993 300.322 193.138 328.876 198.849 360.286 193.138 366.472 172.022 295.028 172.406 290.983z"
      ></path>
      <path
        fill="#2f2e41"
        d="M319.079 468.88l3.353-1.676v1.677l2.235-1.118v2.794s8.381 6.146 6.705 13.41-1.676 7.823-1.676 7.823-2.12-13.814-10.501-11.579-9.056 2.639-11.291 8.785l-.607 2.637s-9.451-21.635 11.782-22.752z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M192.662 300.322L196.469 300.322 202.656 333.635 202.656 362.665 195.042 361.237 188.855 317.454 192.662 300.322z"
      ></path>
      <path fill="#5b86e5" d="M3.535 370.772H143.856V468.283H3.535z"></path>

      <animated.g id="holding-box" style={bottomFade}>
        <path
          fill="#fff"
          d="M228.545 595.148a29.729 29.729 0 1029.729 29.73 29.816 29.816 0 00-29.73-29.73zm0 8.919a8.919 8.919 0 11-8.92 8.919 8.949 8.949 0 018.92-8.919zm0 42.936a21.657 21.657 0 01-17.838-9.52c.143-5.945 11.892-9.218 17.838-9.218s17.694 3.273 17.837 9.219a21.693 21.693 0 01-17.837 9.519z"
          transform="translate(-154.85 -205.35)"
        ></path>
      </animated.g>
     
      <path
        fill="#e6e6e6"
        d="M284.187 90.907H460.187V191.90699999999998H284.187z"
      ></path>
      <path
        fill="#ffb8b8"
        d="M963.051 496.584l.816-5.26s4.753-10.805.996-11.388-6.891 9.704-6.891 9.704l1.375 10.986z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#575a89"
        d="M846.67 321.051L813.089 314.306 809.187 289.847 799.302 289.084 799.785 320.707 828.962 336.004 846.67 321.051z"
      ></path>
      <path
        d="M846.67 321.051L813.089 314.306 809.187 289.847 799.302 289.084 799.785 320.707 828.962 336.004 846.67 321.051z"
        opacity="0.2"
      ></path>
      <path
        fill="#5b86e5"
        d="M910.162 482.062H1013.226V490.115H910.162z"
        transform="rotate(-180 884.27 383.413)"
      ></path>
      <path
        fill="#ffb8b8"
        d="M956.49 494.78l.007-5.322s3.056-11.402-.746-11.407-5.336 10.639-5.336 10.639l3.028 10.649z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M1000.202 510.025l4.608-1.123a11.862 11.862 0 0011.641-14.211 15.504 15.504 0 00-15.484-15.524 15.504 15.504 0 00-15.524 15.485 12.32 12.32 0 0014.76 15.373z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M818.254 381.458L822.005 422.524 828.797 462.833 840.203 462.847 838.732 423.305 832.709 375.393 818.254 381.458z"
      ></path>
      <path
        fill="#2f2e41"
        d="M985.17 665.904l-7.61 4.553s-12.168 1.505-9.891 5.31 28.893 1.557 28.895.036-.748-9.886-2.27-9.888zM1006.771 583.26s-.214 5.871-5.548 14.99l.725 28.135 27.33 35.012-9.895 8.352-33.41-38.062-8.306-45.633 10.658-10.632z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#2f2e41"
        d="M1026.997 661.394s9.123 1.532 7.597 5.332-5.35 21.284-15.231 18.99c0 0-4.563-.005-3.038-3.045a55.004 55.004 0 013.048-5.318l.013-9.885z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <circle cx="840.415" cy="294.041" r="11.406" fill="#ffb8b8"></circle>
      <path
        fill="#ffb8b8"
        d="M845.728 301.652L845.712 314.578 833.546 314.563 835.083 301.639 845.728 301.652z"
      ></path>
      <path
        fill="#575a89"
        d="M985.36 515.347l3.686-.905 11.521.924s6.075 6.091 5.313 7.61-4.61 38.775-4.61 38.775l6.81 26.622-24.335 1.49-12.164-1.536 2.341-47.901s-5.306-12.934 1.542-16.727a29.954 29.954 0 009.895-8.352z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#575a89"
        d="M844.193 313.056L809.978 311.492 802.404 287.911 792.518 288.658 797.801 319.841 828.964 330.526 844.193 313.056z"
      ></path>
      <circle cx="862.432" cy="278.279" r="7.359" fill="#2f2e41"></circle>
      <path
        fill="#2f2e41"
        d="M1010.492 479.674a7.355 7.355 0 018.807-7.205 7.355 7.355 0 10-4.588 13.862 7.353 7.353 0 01-4.22-6.657zM1004.179 483.847l-9.921-1.827-7.63 4.782a11.573 11.573 0 00-5.331 11.295l7.641-1.937 1.711-4.29 2.038 3.34 8.267 14.454 8.37-4.552 5.334-8.358z"
        transform="translate(-154.85 -205.35)"
      ></path>
      <path
        fill="#fff"
        d="M526.036 245.297H528.036V448.21799999999996H526.036z"
        transform="rotate(-60.15 272.31 377.78)"
      ></path>
      <path
        fill="#fff"
        d="M425.576 345.758H628.4970000000001V347.758H425.576z"
        transform="rotate(-29.846 64.347 534.6)"
      ></path>
      <path
        fill="#fff"
        d="M875.536 332.452H877.536V413.062H875.536z"
        transform="rotate(-45 551.232 457.002)"
      ></path>
      <path
        fill="#fff"
        d="M836.231 371.757H916.841V373.757H836.231z"
        transform="rotate(-45 551.232 457.002)"
      ></path>
    </animated.svg>
  );
}

export default Icon;
