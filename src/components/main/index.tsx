import useAPI from '../../hooks/useAPI'
import Loading from '../loading'
import Product from '../UI/Product'
import StreamDetails from '../UI/StreamDetails'
import TagDetails from '../UI/TagDetails'

const Main = () => {
  const { data, isLoading } = useAPI()

  console.log({ data })

  if (isLoading) {
    return <Loading />
  }

  return (
    <main className="w-full flex h-[91%] flex-col">
      {data?.tag && (
        <TagDetails
          id={data.tag.id}
          name={data.tag.name}
          label={data.tag.label}
          image={data.tag.image}
          banner={data.tag.banner}
          createdBy={data.tag.createdBy}
          createdAt={data.tag.createdAt}
          updatedAt={data.tag.updatedAt}
          isCurated={data.tag.isCurated}
          parentId={data.tag.parentId}
          isSubcategory={data.tag.isSubcategory}
          rank={data.tag.rank}
          isRankOverridden={data.tag.isRankOverridden}
          isNew={data.tag.isNew}
          followerCount={data.follower_count}
          streamsCount={data.streams_count}
          isFollowing={data.is_following}
          productsCount={data.products_count}
        />
      )}
      <div className="h-full overflow-y-auto p-4">
        <h3 className="font-bold text-3xl mb-4">Streams</h3>
        <div className="grid grid-cols-5 gap-2 mb-5">
          {data?.streams.map(stream => (
            <StreamDetails {...stream} key={stream.id} />
          ))}
        </div>
        <h3 className="font-bold text-3xl mb-4">Products</h3>
        <div className="grid grid-cols-5 gap-2">
          {data?.products.map(product => (
            <Product {...product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main

