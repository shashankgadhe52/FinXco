import ParallaxBG from "../../../components/cards/ParallaxBG";
import axios from "axios";
import PostPublic from "../../../components/cards/PostPublic";
import Head from "next/head";

const SinglePost = ({ post }) => {
  const head = () => (
    <Head>
      <title>
        FinXco - A Robust community for Financial Education and Traders
      </title>
      <meta name="description" content={post.content} />
      <meta
        property="og:description"
        content="A Robust community for Financial Education and Traders "
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FinXco" />
      <meta
        property="og:url"
        content={`http://finxco.com/post/view/${post._id}`}
      />
      <meta property="og:image:secure_url" content={imageSource(post)} />
    </Head>
  );

  const imageSource = (post) => {
    if (post.image) {
      return post.image.url;
    } else {
      return "/images/3.gif";
    }
  };

  return (
    <>
      {head()}
      <ParallaxBG url="/images/3.gif" />

      <div className="container">
        <div className="row pt-5">
          <div className="col-md-5 offset-md-3">
            <PostPublic key={post._id} post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { data } = await axios.get(`/post/${ctx.params._id}`);
  // console.log(data);
  return {
    props: {
      post: data,
    },
  };
}

export default SinglePost;
