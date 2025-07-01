'use client';

import { useCompletion } from '@ai-sdk/react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { sampleTexts, type SampleTextKey } from '@/data/sample-text';
import { useToast } from '@/hooks/use-toast';
import { copyToClipboard } from '@/lib/clipboard';
import { CopyIcon } from '@radix-ui/react-icons';

const presets = {
  summary: {
    name: '要約',
    instruction: '以下のテキストを簡潔に要約してください：'
  },
  translation: {
    name: '翻訳',
    instruction: '以下のテキストを英語に翻訳してください：'
  },
  proofreading: {
    name: '校正',
    instruction: '以下のテキストの文法や表現を校正し、改善案を提示してください：'
  },
  custom: {
    name: '自由記述',
    instruction: ''
  }
};

export function AIDialog() {
  const [open, setOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<keyof typeof presets>('summary');
  const [selectedText, setSelectedText] = useState<SampleTextKey>('article');
  const [customInstruction, setCustomInstruction] = useState('');
  const { toast } = useToast();
  
  const { completion, complete, isLoading } = useCompletion({
    api: '/api/completion',
  });

  const handlePresetSubmit = () => {
    const preset = presets[selectedPreset];
    const contextText = sampleTexts[selectedText];
    
    let finalInstruction;
    if (selectedPreset === 'custom') {
      finalInstruction = customInstruction;
    } else {
      finalInstruction = `${preset.instruction}\n\n${contextText}`;
    }
    
    complete(finalInstruction);
  };

  const handleCopyResponse = async () => {
    if (!completion) return;
    
    const success = await copyToClipboard(completion);
    
    if (success) {
      toast({
        title: "コピーしました",
        description: "AIのレスポンスがクリップボードにコピーされました。",
      });
    } else {
      toast({
        title: "コピーに失敗しました",
        description: "クリップボードへのコピーができませんでした。",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">AI Chat</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[700px] flex flex-col">
        <DialogHeader>
          <DialogTitle>AI Chat</DialogTitle>
          <DialogDescription>
            プリセットから選択するか、自由に質問してください。
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">指示のタイプ</label>
              <Select value={selectedPreset} onValueChange={(value) => setSelectedPreset(value as keyof typeof presets)}>
                <SelectTrigger>
                  <SelectValue placeholder="指示を選択" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(presets).map(([key, preset]) => (
                    <SelectItem key={key} value={key}>
                      {preset.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {selectedPreset !== 'custom' && (
              <div>
                <label className="text-sm font-medium mb-2 block">対象テキスト</label>
                <Select value={selectedText} onValueChange={(value) => setSelectedText(value as SampleTextKey)}>
                  <SelectTrigger>
                    <SelectValue placeholder="テキストを選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="article">記事（AI技術について）</SelectItem>
                    <SelectItem value="business">ビジネス文書</SelectItem>
                    <SelectItem value="technical">技術文書（英語）</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          
          {selectedPreset === 'custom' && (
            <div>
              <label className="text-sm font-medium mb-2 block">自由記述</label>
              <Textarea
                value={customInstruction}
                onChange={(e) => setCustomInstruction(e.target.value)}
                placeholder="自由に質問や指示を入力してください..."
                className="min-h-[100px]"
              />
            </div>
          )}
          
          <Button 
            onClick={handlePresetSubmit} 
            className="w-full"
            disabled={isLoading || (selectedPreset === 'custom' && !customInstruction.trim())}
          >
            {isLoading ? '処理中...' : selectedPreset === 'custom' ? '送信' : `${presets[selectedPreset].name}を実行`}
          </Button>
        </div>
        
        <ScrollArea className="flex-1 p-4 border rounded-lg">
          <div className="space-y-4">
            {(completion || isLoading) && (
              <div className="bg-muted rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-medium">AI Response</div>
                  {completion && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCopyResponse}
                      className="h-6 w-6 p-0"
                    >
                      <CopyIcon className="h-3 w-3" />
                    </Button>
                  )}
                </div>
                {completion ? (
                  <div className="whitespace-pre-wrap">{completion}</div>
                ) : (
                  <div className="text-muted-foreground">生成中...</div>
                )}
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}