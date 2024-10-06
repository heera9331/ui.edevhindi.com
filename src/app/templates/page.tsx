import { LinkIcon } from "lucide-react";
import "../globals.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

function Templates() {
  return (
    <div className="page grid grid-cols-12 px-2">
      <div className="md:col-span-12 lg:col-span-8 pr-2">
        <h1 className="mb-4 text-3xl" id="page-title">Templates</h1>
        <p className="">Temlates are complete pages of website that is best fit for your next project, here are some template if you like it then download use in your next project</p>
        <p className="text-gray-500"><b className="text-black">Note : </b>These templates are absolutely free for everyone, use it in any of projects.   </p>

        <h2 className="text-2xl mt-4">1. Portfolio Template</h2>

        <p className="mb-4">
          This is a sample portfolio template use it your own details.
        </p>

        <Image
          className="mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
          src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-19-08.png`}
          alt="heera portfolio"
          width={1000}
          height={1000}
        />

        <Image
          className="mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
          src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-58-38.png`}
          alt="heera singh portfolio"
          width={1000}
          height={1000}
        />

        <div className="flex gap-2">
          <Link
            target="_blank"
            href={'https://edevhindi.com/portfolio'}
            className="flex gap-4  border px-4 py-2 rounded-xl"
          >
            <span className="flex items-center" id="live-preview">
              Live Preview
              <LinkIcon className="pl-2 w-5 h-5" />
            </span>
          </Link>
          <Link
            target="_blank"
            href={'https://github.com/heera9331/portfolio'}
            className="flex gap-4  border px-4 py-2 rounded-xl"
          >
            <span className="flex items-center" id="live-preview">
              View source code
              <LinkIcon className="pl-2 w-5 h-5" />
            </span>
          </Link>
          <Link
            target="_blank"
            href={'https://github.com/heera9331'}
            className="flex gap-4  border px-4 py-2 rounded-xl"
          >
            <span className="flex items-center" id="live-preview">
              Author
              <LinkIcon className="pl-2 w-5 h-5" />
            </span>
          </Link>
        </div>

        <h2 id="used-tech" className="my-4 text-2xl">Used technologies and libraries</h2>

        <ul className="flex flex-col gap-2 list-disc pl-6">
          <li className="text-gray-600">HTML - 5</li>
          <li className="text-gray-600">CSS - 3</li>
          <li className="text-gray-600">JS</li>
          <li className="text-gray-600">Google fonts</li>
          <li className="text-gray-600">Google icons</li>
        </ul>

        <h2 id="about" className="my-4 text-2xl">About author</h2>
        <p>
          Hay, I am Heera Singh Lodhi, Full Stack web developer.
        </p>
        <p>I am Heera Singh Lodhi, a passionate and dedicated fresher with a strong foundation in computer science and engineering.</p>

        <Separator className="h-5 mt-5 border-t" />

        <h2 className="text-2xl">2. React Portfolio</h2>
        <p>Interactive react template, that is responsive and attension grabing design.</p>

        <Image
          className="mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
          src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-19-08.png`}
          alt="heera portfolio"
          width={1000}
          height={1000}
        />

        <Image
          className="mb-4 rounded-lg hover:scale-[102%] transition transition-all delay-150"
          src={`https://edevhindi.com/wp-content/uploads/2024/10/Screenshot-from-2024-10-06-23-58-38.png`}
          alt="heera singh portfolio"
          width={1000}
          height={1000}
        />

        <h2 id="used-tech2" className="my-4 text-2xl">Used technologies and libraries</h2>

        <ul className="flex flex-col gap-2 list-disc pl-6">
          <li className="text-gray-600">HTML - 5</li>
          <li className="text-gray-600">CSS - 3</li>
          <li className="text-gray-600">JSX</li>
          <li className="text-gray-600">React</li>
          <li className="text-gray-600">Google fonts</li>
          <li className="text-gray-600">Google icons</li>
        </ul>
      </div>

      <div className="md:col-span-12 lg:col-span-4 border-l pl-2">
        <h2 className="font-semibold mb-2">Contents</h2>
        <div className="text-gray-500 flex flex-col gap-2">
          <Link href={'#page-title'}>
            1. Portfolio
          </Link>
          <Link href={'#live-preview'}>
            2. Live preview
          </Link>
          <Link href={'#used-tech'}>
            3. Used tech
          </Link>
          <Link href={'#about'}>
            4. About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Templates;
