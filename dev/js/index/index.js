tl = new TimelineMax({
    delay: 1,
    repeat: -1,
    repeatDelay: 2
});
var road1 = MorphSVGPlugin.pathDataToBezier("#chemin1", {
    align: "relative",
    offsetX: -50,
    offsetY: -5
});
var road2 = MorphSVGPlugin.pathDataToBezier("#chemin2", {
    align: "relative"
});
var road3 = MorphSVGPlugin.pathDataToBezier("#chemin3", {
    align: "relative"
});
tl
    .staggerFromTo($("#guineapigs > g:not(#yopick)"), .15, {
        rotation: -5
    }, {
        rotation: 5,
        yoyo: true,
        repeat: -1
    }, 0.4, 0)
    .fromTo($("#guineapigs .cls-32"), 0.15, {
        transformOrigin: "top right",
        rotation: -25
    }, {
        rotation: 25,
        yoyo: true,
        repeat: -1
    }, 0)
    .fromTo($("#yopick"), 0.15, {
        rotation: -25
    }, {
        rotation: 25,
        yoyo: true,
        repeat: -1
    }, 0)
    .staggerTo($("#guineapigs > g:not(#yopick) "), 5, {
        bezier: {
            values: road1,
            type: "cubic",
            autoRotate: false
        },
        transformOrigin: "50% 100%",
        ease: Linear.easeNone,
        repeat: -1,
        repeatDelay: 3
    }, 0.8, 0)
    .to($("#yopick"), 3, {
        bezier: {
            values: road1,
            type: "cubic",
            autoRotate: false
        },
        transformOrigin: "50% 100%",
        ease: Linear.easeNone,
        repeat: -1,
        delay: 3,
        repeatDelay: 1
    }, 0.6, 0)
    .fromTo($('#dancing'), 1, {
        transformOrigin: "center center",
        rotation: -5
    }, {
        rotation: 5,
        repeat: -1,
        yoyo: true,
        ease: Circ.easeInOut
    }, 0)
    .fromTo($('#dancing .cls-32'), 1, {
        transformOrigin: "top center",
        rotation: -5
    }, {
        rotation: 25,
        repeat: -1,
        yoyo: true,
        ease: Circ.easeInOut
    }, 0);

function init() {
    reHw();
 
}
var htmlWidth = window.innerWidth;
var htmlHeight = window.innerHeight;
var svgX = document.getElementsByTagName("svg")[0].viewBox.baseVal.x;
let homeX = document.getElementsByTagName("text")[0].attributes.x.nodeValue - (-12);
let homeY = document.getElementsByTagName("text")[0].attributes.y.nodeValue - 7;
let backX = document.getElementsByTagName("text")[1].attributes.x.nodeValue - (-12);
let backY = document.getElementsByTagName("text")[1].attributes.y.nodeValue - 7;
document.getElementsByTagName("text")[0].attributes.x.textContent = homeX - 16;
document.getElementsByTagName("text")[1].attributes.x.textContent = backX - 16;
window.addEventListener("resize", reHw, false);
window.addEventListener("load", init, false);


function reHw() {
    htmlWidth = window.innerWidth;
    htmlHeight = window.innerHeight;

    if (htmlWidth > 1627) {
        // document.getElementsByTagName("svg")[0].style.width = htmlWidth;
        // document.getElementsByTagName("svg")[0].style.height = 1280;
        // document.getElementsByTagName("svg")[0].viewBox.baseVal.width = 490;
        // document.getElementsByTagName("svg")[0].viewBox.baseVal.x = 38;
        // document.getElementsByTagName("text")[0].attributes.x.nodeValue = 161;
        // document.getElementsByTagName("text")[1].attributes.x.nodeValue = 374;
        // document.getElementsByTagName("svg")[0].style.height= htmlHeight;
    }  if (htmlWidth >= 997) {
        // document.getElementsByTagName("svg")[0].style.width = window.innerWidth;
        // document.getElementsByTagName("svg")[0].style.height = window.innerHeight + 40;
        // document.getElementsByTagName("svg")[0].viewBox.baseVal.width = 0;
        // document.getElementsByTagName("svg")[0].viewBox.baseVal.x =0 ;
        // document.getElementsByTagName("text")[0].attributes.x.nodeValue = 163;
        // document.getElementsByTagName("text")[1].attributes.x.nodeValue = 375;
        // homeX = document.getElementsByTagName("text")[0].attributes.x.nodeValue - (-10);
        // backX = document.getElementsByTagName("text")[1].attributes.x.nodeValue - (-11);
  
        
    }
     if (736>htmlWidth){
     //   document.getElementsByTagName("svg")[0].attributes.height=htmlHeight;
      
        document.getElementsByTagName("svg")[0].viewBox.baseVal.x =35;
        document.getElementsByTagName("svg")[0].viewBox.baseVal.width=490;
        document.getElementsByTagName("text")[0].attributes.x.nodeValue=156;
        homeX = document.getElementsByTagName("text")[0].attributes.x.nodeValue - (-16);
        document.getElementsByTagName("text")[1].attributes.x.nodeValue = 369;
        backX = document.getElementsByTagName("text")[1].attributes.x.nodeValue - (-16);
        console.log(456);
    }
     if (htmlWidth < 415) {
         console.log();
        document.getElementsByTagName("svg")[0].viewBox.baseVal.x = 100;
        document.getElementsByTagName("svg")[0].viewBox.baseVal.width = 160;
        document.getElementsByTagName("text")[0].attributes.x.nodeValue = 124;
        homeX = document.getElementsByTagName("text")[0].attributes.x.nodeValue - (-16);
        document.getElementsByTagName("text")[1].attributes.x.nodeValue = 207;
        backX = document.getElementsByTagName("text")[1].attributes.x.nodeValue - (-16);
        console.log(123);

    }
    blob1 = createBlob({
        element: document.querySelector("#path1"),
        numPoints: 10,
        centerX: homeX ,
        centerY: homeY,
        minRadius: 22,
        maxRadius: 28,
        minDuration: 1,
        maxDuration: 2
    });
    blob2 = createBlob({
        element: document.querySelector("#path2"),
        numPoints: 10,
        centerX: homeX ,
        centerY: homeY,
        minRadius: 22,
        maxRadius: 28,
        minDuration: 2,
        maxDuration: 3
    });
    blob3 = createBlob({
        element: document.querySelector("#path3"),
        numPoints: 20,
        centerX: homeX,
        centerY: homeY,
        minRadius: 22,
        maxRadius: 28,
        minDuration: 1.5,
        maxDuration: 2.5
    });
    blob4 = createBlob({
        element: document.querySelector("#path4"),
        numPoints: 100,
        centerX: homeX,
        centerY: homeY,
        minRadius: 20,
        maxRadius: 22,
        minDuration: 1.5,
        maxDuration: 2
    });
    blob5 = createBlob({
        element: document.querySelector("#path5"),
        numPoints: 10,
        centerX: backX,
        centerY: backY,
        minRadius: 22,
        maxRadius: 28,
        minDuration: 1,
        maxDuration: 2
    });
    blob6 = createBlob({
        element: document.querySelector("#path6"),
        numPoints: 10,
        centerX: backX,
        centerY: backY,
        minRadius: 22,
        maxRadius: 30,
        minDuration: 2,
        maxDuration: 3
    });
    blob7 = createBlob({
        element: document.querySelector("#path7"),
        numPoints: 20,
        centerX: backX,
        centerY: backY,
        minRadius: 22,
        maxRadius: 28,
        minDuration: 3,
        maxDuration: 4
    });
    blob8 = createBlob({
        element: document.querySelector("#path8"),
        numPoints:100,
        centerX: backX ,
        centerY: backY,
        minRadius: 20,
        maxRadius: 22,
        minDuration: 3,
        maxDuration: 4
    });}
function createBlob(p) {
    var s = [];
    var q = p.element;
    var t = (Math.PI * 2) / p.numPoints;
    var u = random(Math.PI * 2);
    var v = new TimelineMax({
        onUpdate: x
    });
    for (var o = 0; o < p.numPoints; o++) {
        var i = u + o * t;
        var n = random(p.minDuration, p.maxDuration);
        var r = {
            x: p.centerX + Math.cos(i) * p.minRadius,
            y: p.centerY + Math.sin(i) * p.minRadius
        };
        var w = TweenMax.to(r, n, {
            x: p.centerX + Math.cos(i) * p.maxRadius,
            y: p.centerY + Math.sin(i) * p.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
        });
        v.add(w, -random(n));
        s.push(r)
    }
    p.tl = v;
    p.points = s;

    function x() {
        q.setAttribute("d", cardinal(s, true, 1))
    }
    return p
}

function cardinal(t, s, B) {
    if (t.length < 1) {
        return "M0 0"
    }
    if (B == null) {
        B = 1
    }
    var A = t.length - (s ? 0 : 1);
    var z = "M" + t[0].x + " " + t[0].y + " C";
    for (var u = 0; u < A; u++) {
        var v, w, x, y;
        if (s) {
            v = t[(u - 1 + A) % A];
            w = t[u];
            x = t[(u + 1) % A];
            y = t[(u + 2) % A]
        } else {
            v = u == 0 ? t[0] : t[u - 1];
            w = t[u];
            x = t[u + 1];
            y = u == A - 1 ? x : t[u + 2]
        }
        var i = w.x + (x.x - v.x) / 6 * B;
        var q = w.y + (x.y - v.y) / 6 * B;
        var p = x.x - (y.x - w.x) / 6 * B;
        var r = x.y - (y.y - w.y) / 6 * B;
        z += " " + i + " " + q + " " + p + " " + r + " " + x.x + " " + x.y
    }
    return s ? z + "z" : z
}

function random(e, d) {
    if (d == null) {
        d = e;
        e = 0
    }
    if (e > d) {
        var f = e;
        e = d;
        d = f
    }
    return e + (d - e) * Math.random()
};

const selectSVG = id => {
    const el = document.getElementById(id);
    return new SVGElement(el);
  };
  
  const createSVG = type => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', type);
    return new SVGElement(el);
  };
  
  class SVGElement {
    constructor(element) {
      this.element = element;
    }
  
    set(attributeName, value) {
      this.element.setAttribute(attributeName, value);
    }
  
    style(property, value) {
      this.element.style[property] = value;
    }
  }
  
  const colors = [
    { main: '#FBDB4A', shades: ['#FAE073', '#FCE790', '#FADD65', '#E4C650'] },
    { main: '#F3934A', shades: ['#F7B989', '#F9CDAA', '#DD8644', '#F39C59'] },
    { main: '#EB547D', shades: ['#EE7293', '#F191AB', '#D64D72', '#C04567'] },
    { main: '#9F6AA7', shades: ['#B084B6', '#C19FC7', '#916198', '#82588A'] },
    { main: '#5476B3', shades: ['#6382B9', '#829BC7', '#4D6CA3', '#3E5782'] },
    { main: '#2BB19B', shades: ['#4DBFAD', '#73CDBF', '#27A18D', '#1F8171'] },
    { main: '#70B984', shades: ['#7FBE90', '#98CBA6', '#68A87A', '#5E976E'] }
  ];
  const svg = selectSVG('svg');
  const text = document.getElementById('text');
  const offscreenText = document.getElementById('offscreen-text');
  const input = document.getElementById('input');
  let width = window.innerWidth;
  let height = window.innerHeight;
  let textSize = 0;
  let textCenter = 0;
  const letters = [];//fantastic zoo
  const prompt = ['F', 'a', 'n', 't', 'a', 's','t', 'i', 'c', ' ', 'Z', 'o', 'o'];
  let runPrompt = true;
  
  const resizePage = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    svg.set('height', height);
    svg.set('width', width);
    svg.set('viewBox', `0 0 ${width} ${height}`);
    resizeLetters();
  }
  
  const resizeLetters = () => {
    textSize = width / (letters.length+2);
    if (textSize > 100) textSize = 100;
    text.style.fontSize = `${textSize}px`;
    text.style.height = `${textSize}px`;
    text.style.lineHeight = `${textSize}px`;
  //  text.style.fontFamily="Microsoft JhengHei";
    offscreenText.style.fontSize = `${textSize}px`;
    const textRect = text.getBoundingClientRect();
    textCenter = textRect.top + textRect.height/2;
    positionLetters();
  };
  
  const positionLetters = () => {
    letters.forEach(letter => {
      const timing = letter.shift ? 0.1 : 0;
      TweenLite.to(letter.onScreen, timing, {x:letter.offScreen.offsetLeft+'px', ease: Power3.easeInOut});
      letter.shift = true;
    });
  }
  
  const animateLetterIn = letter => {
    const yOffset = (0.5+Math.random()*0.5) * textSize;
    TweenLite.fromTo(letter, 0.4, {scale:0}, {scale:1, ease: Back.easeOut});
    TweenLite.fromTo(letter, 0.4, {opacity:0}, {opacity: 1, ease: Power3.easeOut});
    TweenLite.to(letter, 0.2, {y:-yOffset, ease: Power3.easeInOut});
    TweenLite.to(letter, 0.2, {y:0, ease: Power3.easeInOut, delay: 0.2});
    const rotation = -50 + Math.random()*100;
    TweenLite.to(letter, 0.2, {rotation: rotation, ease: Power3.easeInOut});
    TweenLite.to(letter, 0.2, {rotation: 0, ease: Power3.easeInOut, delay: 0.2});
  }
  
  const addDecor = (letter, color) => {
    setTimeout(() => {
      var rect = letter.getBoundingClientRect();
      const x0 = letter.offsetLeft + letter.offsetWidth/2;
      const y0 = textCenter - textSize*0.5;
      const shade = color.shades[Math.floor(Math.random()*4)];
      for (var i = 0; i < 8; i++) addTri(x0, y0, shade);
      for (var i = 0; i < 8; i++) addCirc(x0, y0);
    }, 150);
  };
  
  const addTri = (x0, y0, shade) => {
    const tri = createSVG('polygon');
    const a = Math.random();
    const a2 = a + (-0.2 + Math.random()*0.4);
    const r = textSize*0.52;
    const r2 = r + textSize*Math.random()*0.2;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a2);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a2);
    const triSize = textSize * 0.1;
    const scale = 0.3 + Math.random()*0.7;
    const offset = triSize*scale;
    tri.set('points', `0,0 ${triSize*2},0 ${triSize},${triSize*2}`);
    tri.style('fill', shade);
    svg.element.appendChild(tri.element);
    TweenLite.fromTo(tri.element, 0.6, {rotation: Math.random()*360, scale: scale, x: x-offset, y: y-offset, opacity: 1}, {x: x2-offset, y: y2-offset, opacity: 0, ease: Power1.easeInOut, onComplete: () => {
      svg.element.removeChild(tri.element);
    }});
  }
  
  const addCirc = (x0, y0) => {
    const circ = createSVG('circle');
    const a = Math.random();
    const r = textSize*0.52;
    const r2 = r + textSize;
    const x = x0 + r * Math.cos(2 * Math.PI * a);
    const y = y0 + r * Math.sin(2 * Math.PI * a);
    const x2 = x0 + r2 * Math.cos(2 * Math.PI * a);
    const y2 = y0 + r2 * Math.sin(2 * Math.PI * a);
    const circSize = textSize * 0.05 * Math.random();
    circ.set('r', circSize);
    circ.style('fill', '#eee');
    svg.element.appendChild(circ.element);
    TweenLite.fromTo(circ.element, 0.6, {x: x-circSize, y: y-circSize, opacity: 1}, {x: x2-circSize, y: y2-circSize, opacity: 0, ease: Power1.easeInOut, onComplete: () => {
      svg.element.removeChild(circ.element);
    }});
  }
  
  const addLetter = (char, i) => {
    const letter = document.createElement('span');
    const oLetter = document.createElement('span');
    letter.innerHTML = char;
    oLetter.innerHTML = char;
    text.appendChild(letter);
    const color = colors[i%colors.length];
    letter.style.color = color.main;
    offscreenText.appendChild(oLetter);
    letters[i] = {offScreen: oLetter, onScreen: letter, char: char};
    animateLetterIn(letter);
    addDecor(oLetter, color);
  }
  
  const addLetters = value => {
    value.forEach((char, i) => {
      if (letters[i] && letters[i].char !== char) {
        letters[i].onScreen.innerHTML = char;
        letters[i].offScreen.innerHTML = char;
        letters[i].char = char;
      }
      if (letters[i] === undefined) {
        addLetter(char, i);
      }
    });
  };
  
  const animateLetterOut = (letter, i) => {
    TweenLite.to(letter.onScreen, 0.1, {scale: 0, opacity: 0, ease: Power2.easeIn, onComplete: () => {
      console.log('removing');
      console.log(letter);
      offscreenText.removeChild(letter.offScreen);
      text.removeChild(letter.onScreen);
      positionLetters();
    }});
    letters.splice(i, 1);
  }
  
  const removeLetters = value => {
    for (let i = letters.length-1; i >= 0; i--) {
      const letter = letters[i];
      if (value[i] === undefined) {
        animateLetterOut(letter, i)
      }
    }
  }
  
  const onInputChange = () => {
    const value = input.value === '' ? [] : input.value.toLowerCase().split('');
    addLetters(value);
    removeLetters(value);
    resizeLetters();
  };
  
  const keyup = (e) => {
    if (runPrompt) {
      input.value = '';
      runPrompt = false;
    };
    onInputChange();
  }
  
  const addPrompt = (i) => {
    setTimeout(() => {
      if (runPrompt && prompt[i]) {
        input.value = input.value + prompt[i];
        onInputChange();
        addPrompt(i+1);
      }
    }, 300);
  }
    
  resizePage();
  window.addEventListener('resize', resizePage);
  input.addEventListener('keyup', keyup);
  input.focus();
  addPrompt(0);
  