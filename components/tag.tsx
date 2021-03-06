interface TagProps {
    name: string;
    color?: string;
  }
export default function Tag(prop: TagProps){
    return (
        <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-indigo-100 bg-indigo-700 rounded">
            {prop.name}
        </span>

    );
}