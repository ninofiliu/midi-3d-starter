# Midi 3D starter

I experiment with a lot MIDI-controlled 3D shit and they all start out the same so I figured I'd create a proper boilerplate repo for this

## Getting started

1. If that's not already the case, install [Node](https://nodejs.org/en/) and [Pnpm](https://pnpm.io/)
2. Install dependencies: `pnpm install`
3. Run the development environment: `pnpm run dev`
4. Navigate to the dev URL displayed by the command above in Chromium-based browsers
5. Connect your MIDI device, it should be automatically detected, if not, uh, oopsie ^^ maybe check out [this guide](https://web.dev/usb/)?
6. Play some notes and tweak some knobs

## How it works

Just a simple combination of existing technologies:

- [Web MIDI](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API), a set of functionalities allowing browsers to directly talk with MIDI controllers
  > **Note**
  > Web MIDI is [only supported](https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API#browser_compatibility) on Chromium-based browsers (Chrome, Chromium, Edge, etc), so Firefox and Safari users will have to wait :'(
- [ThreeJS](https://threejs.org/), the de-facto standard for doing powerful 3D shit on the web
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber), a wrapper library to simplify ThreeJS usage by allowing to declaratively describe your scene in React components
- [React](https://reactjs.org/) no need to introduce this one
- [Vite](https://vitejs.dev/), to allow for fast rebuild of the code when developing
