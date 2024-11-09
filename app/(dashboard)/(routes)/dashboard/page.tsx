"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageCircleCodeIcon,ImageDownIcon,VideotapeIcon,Music2Icon,Code2Icon,Settings2Icon, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


const tools =[
  {
    label:"Conversation",
    icon: MessageCircleCodeIcon,
    href:"/conversation",
    color:"text-violet-500",
    bgcolor:"bg-violet-500/10",
},
{
    label:"Image",
    icon: ImageDownIcon,
    href:"/image",
    color:"text-pink-500",
    bgcolor:"bg-pink-500/10"
},
{
    label:"Video",
    icon: VideotapeIcon,
    href:"/video",
    color:"text-orange-500",
    bgcolor:"bg-orange-500/10"
},
{
    label:"Music",
    icon: Music2Icon,
    href:"/music",
    color:"text-emerald-500",
    bgcolor:"bg-emerald-500/10"
},
{
    label:"Code",
    icon: Code2Icon,
    href:"/code",
    color:"text-green-500",
    bgcolor:"text-green-500/10"
}, 

]

const DashboardPage = () => {

  const router =useRouter();

  return (
    <div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool)=>(
          <Card
          onClick={()=>router.push(tool.href)}
          key={tool.href}
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md",tool.bgcolor)}>
                <tool.icon className={cn("w-8 h-8",tool.color)} />

              </div>
              <div className="font-semibold">
                {tool.label}
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
      
    </div>
    
  );
}
export default DashboardPage;
