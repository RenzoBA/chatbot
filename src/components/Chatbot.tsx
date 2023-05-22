import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ChatbotHeader from "./ChatbotHeader";
import ChatbotInput from "./ChatbotInput";
import ChatbotMessages from "./ChatbotMessages";

const ChatBot: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 bottom-8 w-80 bg-white border border-gray-200 rounded-md overflow-hidden">
          <AccordionTrigger className="px-6 border-b border-zinc-300">
            <ChatbotHeader />
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col h-80">
              <ChatbotMessages className="px-2 py-3 flex-1" />
              <ChatbotInput className="px-4" />
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ChatBot;