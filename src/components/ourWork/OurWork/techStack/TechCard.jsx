/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
export default function TechCard({techLogo, techName,size,color}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="border-2 border-slate-600 w-[85%] h-[220px]  lg:h-[35vh] rounded-full max-lg:rounded-[5] hover:border-blue-600 flex items-center justify-center">
      <Icon icon={techLogo} width={size}  color={color}/>
      </div>
      <div >{techName}</div>
    </div>
  );
}
