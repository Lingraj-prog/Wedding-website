// Web Audio API based ambient sitar & tanpura melodic synthesizer
// Guarantees zero CORS failures, works offline, and delivers an authentic royal soothing ambient aura.

class WeddingSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private intervalId: number | null = null;

  // Raag Yaman / Bhupali romantic wedding notes (frequencies in Hz)
  private scale = [
    220.00, // A3 (Sa)
    246.94, // B3 (Re)
    277.18, // C#4 (Ga)
    329.63, // E4 (Pa)
    369.99, // F#4 (Dha)
    440.00, // A4 (Sa')
    493.88, // B4 (Re')
    554.37  // C#5 (Ga')
  ];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime); // gentle ambient volume
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public play() {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // Start soothing tanpura drone
    this.startTanpuraDrone();

    // Start melodic gentle sitar arpeggios
    let noteIndex = 0;
    const melodySeq = [0, 2, 3, 4, 3, 2, 4, 5, 4, 3, 1, 0, 2, 4, 3];
    
    this.intervalId = window.setInterval(() => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const freq = this.scale[melodySeq[noteIndex % melodySeq.length]];
      noteIndex++;
      this.pluckPluckedString(freq);
    }, 1200);
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        if (this.ctx && this.ctx.state === 'running') {
          this.ctx.suspend();
        }
      }, 500);
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  private startTanpuraDrone() {
    if (!this.ctx || !this.masterGain) return;
    const droneFreqs = [110, 164.81, 220]; // A2, E3, A3
    
    droneFreqs.forEach(freq => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const droneGain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      droneGain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      
      osc.connect(droneGain);
      droneGain.connect(this.masterGain);
      osc.start();
    });
  }

  private pluckPluckedString(freq: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm envelope
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 1.2);
  }
}

export const weddingSoundscape = new WeddingSoundscape();
