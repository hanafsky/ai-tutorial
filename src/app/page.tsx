import { AIDialog } from '@/components/ai-dialog';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-24">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">AI Tutorial</h1>
        <p className="text-xl text-muted-foreground">
          Chat with AI using our dialog interface
        </p>
        <AIDialog />
      </div>
    </div>
  );
}