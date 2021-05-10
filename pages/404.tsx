import Image from 'next/image'


export default function Custom404() {
    return (
        <>
         <a href="/" className="text-indigo-600 hover:text-indigo-500">
          <Image
            src="/img/404.svg"
            alt="Picture of the author"
            layout="fill"
          />
        </a>
                      </>
    )
  }