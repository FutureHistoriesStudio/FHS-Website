/// <reference types="vite/client" />

declare module '*.png' {
  const src: string;
  export default src;
}

interface ImportMetaEnv {
  readonly VITE_ELEVENLABS_AGENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'agent-id'?: string;
      'dismissible'?: string;
      'expand-text'?: string;
      'action-text'?: string;
      'avatar-orb-color-1'?: string;
      'avatar-orb-color-2'?: string;
    };
  }
}
