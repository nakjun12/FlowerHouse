"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NewpostHeader: React.FC = () => {
  const router = useRouter();

  return (
    <header className="flex fixed top-0 left-0 w-full h-16 bg-white p-3">
      <Image
        src="icons/newpost-icons/arrow-left-1.svg"
        className="cursor-pointer"
        alt="prev-arrow-icon"
        width={30}
        height={30}
        style={{ width: 30, height: 30 }}
        onClick={() => router.back()}
      />
      <div className="flex w-full justify-center items-center text-[#000000] cursor-default">
        새 게시물
      </div>
      <div
        className="absolute top-0 right-6 h-16 flex justify-center items-center text-[#007AFF] cursor-default"
        onClick={() => router.push("/newpost")}>
        <span className="invisible">다음</span>
      </div>
    </header>
  );
};

export default NewpostHeader;
