import PostMetaTitle from './PostMetaTitle';
import PostAuthor from './PostAuthor';

export default function InfoPost({
    category,
    date,
    title,
    shortDesc,
    authorAvatar,
    authorName,
    authorJob
}) {
    return(
    <>
    <PostMetaTitle
        category={category}
        date={date}
        title={title}
    />
    <p className="text-white/60 mt-5 w-10/12">
        {shortDesc}
    </p>
    <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJob={authorJob}
    />
    </>
    );
}