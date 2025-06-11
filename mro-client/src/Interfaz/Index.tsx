// Interfaz/Index.tsx
import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* rejilla 3 columnas (en md) con tres tarjetas 16:9 */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
        <div className="aspect-video rounded-xl bg-muted/50" />
      </div>

      {/* tarjeta grande que “crece” para llenar la vista */}
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};

export default IndexPage;
