import Container from '../components/Container';
import Layout from '../components/Layout';
import PostMetaTitle from '../components/PostMetaTitle';
import PostAuthor from '../components/PostAuthor';
import Head from 'next/head';

export default function Detail() {
    return (
        <Layout>
            <Head>
                <title>detail &mdash; Nextblog</title>
            </Head>
            <Container>
                <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
                    <PostMetaTitle
                        category="UI Design"
                        date="July 2, 2021"
                        title="How to design a product that can grow itself 10x in year"
                        center
                    />
                    <PostAuthor
                        authorName="Leslie Alexandra"
                        authorJob="UI Designer"
                        authorAvatar="/author-1.png"
                    />
                </div>
                <div className='md:w-10/12 w-full mx-auto my-10'>
                    <img src='/detail-image.png' className='w-full rounded-lg' />
                </div>
                <div className='md:w-8/12 w-full mx-auto'>
                    <p className='text-xl'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
            </Container>
        </Layout>
    );
}