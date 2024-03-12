import TitleInterface from "@/interfaces/title";

export default function CoreTitle({content, type}: TitleInterface) {
  switch(type) {
    case 'h1':
      return <h1>{content}</h1>
    case 'h2':
      return <h2>{content}</h2>
    case 'h3':
      return <h3>{content}</h3>
    case 'h4':
      return <h4>{content}</h4>
    case 'h5':
      return <h5>{content}</h5>
    case 'h6':
      return <h6>{content}</h6>
    case 'p':
      return <p>{content}</p>
    case 'span':
      return <span>{content}</span>
  }
}