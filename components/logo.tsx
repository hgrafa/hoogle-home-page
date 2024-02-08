import Image from 'next/image'

import logo from '@/public/logo.svg'

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Image
        src={logo}
        width={30}
        height={30}
        alt="Website logo"
        quality={100}
        loading="eager"
      />
      {/* <div className=" text-bold font-josefin text-3xl text-primary">
        {'Hoogle Education'}
      </div> */}
    </div>
  )
}
