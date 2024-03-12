import Image from "next/image";
import ImageInterface from "@/interfaces/image";
import Link from "next/link";

export default function CoreImage(
  {
    image,
    alt,
    title,
    width,
    height,
    link = undefined,
    className = 'w-full'
  }: ImageInterface) {
  const backend_url = process.env.ORION_BACKEND_URL;
  if (link) {
    return (
      <Link href={link} title={title}>
        <Image
          className={className}
          src={backend_url + image?.data?.attributes?.url}
          alt={alt ? alt : ''}
          width={width}
          height={height}/>
      </Link>
    )
  }
  return (
    <Image
      src={backend_url + image?.data?.attributes?.url}
      title={title}
      alt={alt ? alt : ''}
      width={width}
      height={height}/>
  );
}