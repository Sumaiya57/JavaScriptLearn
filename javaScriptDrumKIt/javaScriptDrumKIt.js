(()=>{
    const AudioContext=window.AudioContext || window.webKitAudioContext;
    let ctx = null;
    const state={
        master:null, // master volume control (GainNode)
        unlocked:false
    };

    //function which create GainNode for every source
    const gainFor=(value=0.8)=>{
        const g=ctx.createGain();   //create new gainNode
        g.gain.value=value;         //volume level
        g.connect(state.master);      //connect with master GainNode
        return g;
    };

    //function which create gainNode for all audio system
    function ceateContext(){
        if(ctx)
            return;  // AudioContext has been created before,Then it will do nothing and exit the function.
        state.master = ctx.createGain();
        state.master.gain.value=0.9;
        state.master.connect(ctx.destination);   //connect Speaker/Headphones — means the last output
    }
    
    function playKick(time=0,velocity=1){
        const t= const.currentTime + time;
        const osc=ctx.createOscillator();
        const g=ctx.createGain();
        osc.type='sine';
        osc.frequency.setValueAtTime(120,t);
        osc.frequency.exponentialRampToValueAtTime(35, t + 0.25);       //প্রথম 0.25 সেকেন্ডে ধীরে ধীরে 120 Hz থেকে 35 Hz-এ নামবে।
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.8 * velocity, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.00001, t + 0.6);
        osc.connect(g);
        g.connect(state.master);
        osc.start(t);
        osc.stop(t + 0.8);
    }
})

// (() => {


//   

//   

//   // Snare: noise burst + tone
//   function playSnare(time = 0, velocity = 1) {
//     const t = ctx.currentTime + time;
//     // noise
//     const bufferSize = ctx.sampleRate * 0.2;
//     const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
//     const data = buffer.getChannelData(0);
//     for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);

//     const noise = ctx.createBufferSource();
//     noise.buffer = buffer;

//     const noiseFilter = ctx.createBiquadFilter();
//     noiseFilter.type = 'bandpass';
//     noiseFilter.frequency.value = 1800;

//     const noiseGain = ctx.createGain();
//     noiseGain.gain.setValueAtTime(0.0001, t);
//     noiseGain.gain.exponentialRampToValueAtTime(0.7 * velocity, t + 0.005);
//     noiseGain.gain.exponentialRampToValueAtTime(0.00001, t + 0.25);

//     noise.connect(noiseFilter);
//     noiseFilter.connect(noiseGain);
//     noiseGain.connect(state.master);
//     noise.start(t);
//     noise.stop(t + 0.25);

//     // body tone
//     const osc = ctx.createOscillator();
//     osc.type = 'triangle';
//     osc.frequency.setValueAtTime(180, t);

//     const g = ctx.createGain();
//     g.gain.setValueAtTime(0.0001, t);
//     g.gain.linearRampToValueAtTime(0.6 * velocity, t + 0.01);
//     g.gain.exponentialRampToValueAtTime(0.00001, t + 0.3);

//     osc.connect(g);
//     g.connect(state.master);
//     osc.start(t);
//     osc.stop(t + 0.3);
//   }

//   // Hi-hat: filtered noise short
//   function playHiHat(time = 0, velocity = 1) {
//     const t = ctx.currentTime + time;
//     // noise buffer
//     const bufferSize = ctx.sampleRate * 0.05;
//     const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
//     const data = buffer.getChannelData(0);
//     for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1);

//     const s = ctx.createBufferSource();
//     s.buffer = buffer;

//     const bandpass = ctx.createBiquadFilter();
//     bandpass.type = 'highpass';
//     bandpass.frequency.value = 7000;

//     const gain = ctx.createGain();
//     gain.gain.setValueAtTime(0.0001, t);
//     gain.gain.exponentialRampToValueAtTime(0.7 * velocity, t + 0.001);
//     gain.gain.exponentialRampToValueAtTime(0.00001, t + 0.06);

//     s.connect(bandpass);
//     bandpass.connect(gain);
//     gain.connect(state.master);
//     s.start(t);
//     s.stop(t + 0.06);
//   }

//   // Simple tom using sine
//   function playTom(freq = 220, time = 0, velocity = 1) {
//     const t = ctx.currentTime + time;
//     const osc = ctx.createOscillator();
//     const g = ctx.createGain();
//     osc.type = 'sine';
//     osc.frequency.setValueAtTime(freq, t);
//     osc.frequency.exponentialRampToValueAtTime(freq * 0.6, t + 0.25);

//     g.gain.setValueAtTime(0.0001, t);
//     g.gain.exponentialRampToValueAtTime(0.6 * velocity, t + 0.01);
//     g.gain.exponentialRampToValueAtTime(0.00001, t + 0.5);

//     osc.connect(g);
//     g.connect(state.master);
//     osc.start(t);
//     osc.stop(t + 0.6);
//   }

//   // Clap (multiple short noise bursts)
//   function playClap(time = 0, velocity = 1) {
//     const t = ctx.currentTime + time;
//     for (let i = 0; i < 3; i++) {
//       const bufferSize = ctx.sampleRate * 0.06;
//       const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
//       const data = buffer.getChannelData(0);
//       for (let j = 0; j < bufferSize; j++) data[j] = (Math.random() * 2 - 1) * (1 - j / bufferSize);

//       const noise = ctx.createBufferSource();
//       noise.buffer = buffer;

//       const highpass = ctx.createBiquadFilter();
//       highpass.type = 'highpass';
//       highpass.frequency.value = 1000;

//       const g = ctx.createGain();
//       const start = t + i * 0.02;
//       g.gain.setValueAtTime(0.0001, start);
//       g.gain.exponentialRampToValueAtTime(0.9 * velocity, start + 0.002);
//       g.gain.exponentialRampToValueAtTime(0.00001, start + 0.12);

//       noise.connect(highpass);
//       highpass.connect(g);
//       g.connect(state.master);
//       noise.start(start);
//       noise.stop(start + 0.12);
//     }
//   }

//   // Ride / Perc / Cowbell: short tones
//   function playRide(time = 0, velocity = 1) {
//     const t = ctx.currentTime + time;
//     const osc = ctx.createOscillator();
//     osc.type = 'square';
//     osc.frequency.setValueAtTime(1200, t);

//     const g = ctx.createGain();
//     g.gain.setValueAtTime(0.0001, t);
//     g.gain.exponentialRampToValueAtTime(0.5 * velocity, t + 0.002);
//     g.gain.exponentialRampToValueAtTime(0.00001, t + 0.15);

//     osc.connect(g);
//     g.connect(state.master);
//     osc.start(t);
//     osc.stop(t + 0.15);
//   }

//   function playPerc(time = 0, velocity = 1) {
//     const t = ctx.currentTime + time;
//     const osc = ctx.createOscillator();
//     osc.type = 'sawtooth';
//     osc.frequency.setValueAtTime(600, t);
//     const g = ctx.createGain();
//     g.gain.setValueAtTime(0.0001, t);
//     g.gain.exponentialRampToValueAtTime(0.5 * velocity, t + 0.001);
//     g.gain.exponentialRampToValueAtTime(0.00001, t + 0.12);
//     osc.connect(g);
//     g.connect(state.master);
//     osc.start(t);
//     osc.stop(t + 0.12);
//   }

//   function playCowbell(time = 0, velocity = 1) {
//     const t = ctx.currentTime + time;
//     // two-tone cowbell-ish
//     const o1 = ctx.createOscillator();
//     const o2 = ctx.createOscillator();
//     o1.type = 'square';
//     o2.type = 'square';
//     o1.frequency.setValueAtTime(800, t);
//     o2.frequency.setValueAtTime(1200, t);

//     const g = ctx.createGain();
//     g.gain.setValueAtTime(0.0001, t);
//     g.gain.exponentialRampToValueAtTime(0.6 * velocity, t + 0.002);
//     g.gain.exponentialRampToValueAtTime(0.00001, t + 0.16);

//     o1.connect(g);
//     o2.connect(g);
//     g.connect(state.master);

//     o1.start(t); o2.start(t);
//     o1.stop(t + 0.16); o2.stop(t + 0.16);
//   }

//   // Map keys to instrument functions
//   const keyMap = {
//     'A': () => playKick(),
//     'S': () => playSnare(),
//     'D': () => playHiHat(),
//     'F': () => playTom(300),
//     'G': () => playTom(240),
//     'H': () => playClap(),
//     'J': () => playRide(),
//     'K': () => playPerc(),
//     'L': () => playCowbell()
//   };

//   // UI wiring
//   const pads = Array.from(document.querySelectorAll('.pad'));
//   const masterVol = document.getElementById('masterVol');
//   const unlockBtn = document.getElementById('unlockAudio');

//   function flashPad(el) {
//     el.classList.add('playing');
//     setTimeout(() => el.classList.remove('playing'), 130);
//   }

//   function playInstrumentByKey(key) {
//     if (!ctx) createContext();
//     if (!ctx) return; // not supported
//     const k = key.toUpperCase();
//     const fn = keyMap[k];
//     if (!fn) return;
//     fn();
//     const pad = document.querySelector(`.pad[data-key="${k}"]`);
//     if (pad) flashPad(pad);
//   }

//   // keyboard events
//   window.addEventListener('keydown', (e) => {
//     if (e.repeat) return;
//     const k = e.key.toUpperCase();
//     if (!keyMap[k]) return;
//     // unlock audio on first real user gesture
//     if (!state.unlocked) {
//       createContext();
//       state.unlocked = true;
//     }
//     playInstrumentByKey(k);
//   });

//   // mouse / touch on pads
//   pads.forEach(p => {
//     p.addEventListener('mousedown', (evt) => {
//       if (!state.unlocked) {
//         createContext();
//         state.unlocked = true;
//       }
//       const k = p.dataset.key;
//       playInstrumentByKey(k);
//     });
//     p.addEventListener('touchstart', (evt) => {
//       evt.preventDefault();
//       if (!state.unlocked) {
//         createContext();
//         state.unlocked = true;
//       }
//       const k = p.dataset.key;
//       playInstrumentByKey(k);
//     }, {passive:false});
//   });

//   // master volume
//   masterVol.addEventListener('input', (e) => {
//     if (!ctx) return;
//     state.master.gain.value = Number(e.target.value);
//   });

//   // Unlock button (some browsers require a user gesture)
//   unlockBtn.addEventListener('click', () => {
//     if (!ctx) createContext();
//     state.unlocked = true;
//     unlockBtn.textContent = 'Audio unlocked ✅';
//     setTimeout(() => unlockBtn.style.opacity = '0.7', 100);
//   });

//   // Accessibility: let user click letters on keyboard to focus
//   pads.forEach(p => p.setAttribute('role', 'button'));
// })();
