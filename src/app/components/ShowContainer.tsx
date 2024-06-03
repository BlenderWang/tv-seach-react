import type { Show } from "@/models/Shows";
import Image from "next/image";

type Props = {
    show: Show;
};

export default function ShowContainer({ show }: Props) {
    return (
        <div className="h-64 bg-purple-200 dark:bg-blue-950 rounded relative overflow-hidden group">
            <Image
                src={show.image?.original ?? ""}
                alt={show.name}
                // width={250}
                // height={250}
                fill={true}
                sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                className="object-cover group-hover:opacity-75"
                priority
            />
            {/* <p>{show.name}</p>
            <p>{show.rating.average}</p> */}
        </div>
    );
}
