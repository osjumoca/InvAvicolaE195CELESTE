import { ReactNode } from "react";

interface MockupFrameProps {
  title: string;
  storyId: string;
  children: ReactNode;
}

const MockupFrame = ({ title, storyId, children }: MockupFrameProps) => (
  <div className="relative bg-card rounded-xl border-2 border-border shadow-lg overflow-hidden">
    <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-destructive/60" />
          <span className="w-3 h-3 rounded-full bg-accent/80" />
          <span className="w-3 h-3 rounded-full bg-primary/60" />
        </div>
        <span className="wireframe-annotation ml-3">{storyId}</span>
      </div>
      <span className="text-xs font-semibold text-muted-foreground">{title}</span>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

export default MockupFrame;
