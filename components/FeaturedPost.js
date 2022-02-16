import Link from 'next/link';
import InfoPost from './InfoPost';

export default function FeaturedPost() {
    return (
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
                    <Link href="/detail">
                        <a>
                        <img src="/featured-thumbnail.png" className="rounded-xl w-full mb-4 md:mb-0"/>
                        </a>
                    </Link>
                </div>
                
                <div className="lg:w-4/12 md:w-5/12 w-full px-4">
                    <InfoPost 
                        category="UI Design"
                        date="July 2, 2021"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        shortDesc="Nulla Lorem mollit copide tru a d asdasd djahsd  dhd ddgdasdhd sdjkadh dsadd dhdhd ddgsd djdkj jhdffjkk sjfhkfh kfgsf jsf dshfkjshfkj."
                        authorAvatar="/author-1.png"
                        authorName="Leslie Alexandra"
                        authorJob="UI Designer"
                    />
                </div>
            </div>
            <hr className='border-white/10 mt-10 md:hidden' />
        </article>
    )
}