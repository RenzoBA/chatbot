import { FC } from "react";

type Props = {};

const ChatbotHeader: FC = (props: Props) => {
  return (
    <div className="w-full gap-3 justify-start items-center text-zinc-800">
      <div className="flex flex-col items-start text-sm">
        <p className="text-xs">Chat with</p>
        <div className="flex gap-1.5 items-center">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <p className="font-medium">FitGenie Support</p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotHeader;
