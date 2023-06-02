"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Bug, CreditCard, LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SignButton: FC = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex gap-2">
        <Link href="/signup" className={buttonVariants({ variant: "outline" })}>
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src={session.user?.image!} alt="" />
          <AvatarFallback className="uppercase">
            {session.user?.name?.split(" ")[0][0]}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-4 top-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div className="flex flex-row gap-2 items-center">
              <Avatar>
                <AvatarImage src={session.user?.image!} alt="" />
                <AvatarFallback className="uppercase">
                  {session.user?.name?.split(" ")[0][0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <p>"{session.user?.name}"</p>
                <p className="text-xs">{session.user?.email}</p>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <div className="flex flew-row gap-1">
              <User size={18} />
              <span>Profile</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <div className="flex flew-row gap-1">
              <CreditCard size={18} />
              <span>Billing</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex flew-row gap-1">
              <Bug size={18} />
              <span>Report</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button onClick={() => signOut()} className="flex flew-row gap-1">
            <LogOut size={18} />
            <span>Log out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SignButton;