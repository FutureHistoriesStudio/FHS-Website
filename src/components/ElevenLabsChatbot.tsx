import { useEffect } from 'react';

const ELEVENLABS_SCRIPT_ID = 'elevenlabs-convai-script';
const ELEVENLABS_WIDGET_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID;

function ensureWidgetScript() {
  if (document.getElementById(ELEVENLABS_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement('script');
  script.id = ELEVENLABS_SCRIPT_ID;
  script.src = ELEVENLABS_WIDGET_SRC;
  script.async = true;
  script.type = 'text/javascript';
  document.body.appendChild(script);
}

export function ElevenLabsChatbot() {
  useEffect(() => {
    if (!agentId) {
      return;
    }

    ensureWidgetScript();
  }, []);

  if (!agentId) {
    return null;
  }

  return (
    <div className="chatbot-shell" aria-label="Future Histories Studio assistant">
      <elevenlabs-convai
        agent-id={agentId}
        dismissible="true"
        expand-text="Ask about FHS"
        action-text="Explore Future Histories Studio"
        start-call-text="Talk with the FHS guide"
        avatar-orb-color-1="#f0cf18"
        avatar-orb-color-2="#f28f5e"
      ></elevenlabs-convai>
    </div>
  );
}
