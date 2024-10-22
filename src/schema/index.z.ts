import { z } from 'zod'

export const tagSchema = z.object({
  id: z.number(),
  name: z.string(),
  label: z.string(),
  image: z.string(),
  createdBy: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  banner: z.string(),
  isCurated: z.boolean(),
  parentId: z.number(),
  isSubcategory: z.boolean(),
  rank: z.number(),
  isRankOverridden: z.boolean(),
  isNew: z.boolean()
})

export const hostInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
  nickname: z.string(),
  picture: z.string(),
  picture_thumbnail: z.string(),
  slug: z.string(),
  ratings: z.number()
})

export const groupOrCategorySchema = z.object({
  id: z.number().nullable(),
  name: z.string().nullable()
})

export const streamSchema = z.object({
  id: z.number(),
  title: z.string(),
  stream_slug: z.string(),
  start_datetime: z.string().datetime(),
  end_datetime: z.string().datetime(),
  likes: z.number(),
  featured: z.boolean(),
  publish: z.boolean(),
  preview_image: z.string(),
  preview_image_thumbnail: z.string().nullable(),
  preview_video: z.string().nullable(),
  preview_video_poster: z.string().nullable(),
  description: z.string(),
  host: z.number(),
  created_at: z.string().datetime(),
  host_is_live_at: z.string().datetime().nullable(),
  admin_tag: z.string(),
  viewer_count: z.number(),
  max_viewer_count: z.number(),
  watchlist_count: z.number(),
  stream_type: z.string(),
  host_info: hostInfoSchema,
  group: groupOrCategorySchema,
  category: groupOrCategorySchema,
  is_live: z.boolean(),
  is_in_watchlist: z.boolean()
})

export const liveStreamSchema = z.object({
  id: z.number(),
  title: z.string(),
  stream_slug: z.string(),
  start_datetime: z.string().datetime(),
  host_is_live_at: z.string().datetime().nullable()
})

export const upcomingStreamSchema = liveStreamSchema
  .extend({
    start_datetime: z.string().datetime()
  })
  .nullable()

export const productSchema = z.object({
  id: z.number(),
  slug: z.string(),
  sku: z.string(),
  name: z.string(),
  price: z.number(),
  list_price: z.number().nullable(),
  image: z.string(),
  description: z.string(),
  auction_enabled: z.boolean(),
  items_in_stock: z.number(),
  max_per_buyer: z.number().nullable(),
  sale_type: z.string(),
  item_type: z.string(),
  allow_raffle: z.boolean(),
  nft_id: z.string().nullable(),
  nft_blockchain: z.string().nullable(),
  is_live: z.boolean(),
  is_visible: z.boolean(),
  live_stream: liveStreamSchema,
  upcoming_stream: upcomingStreamSchema,
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  type: z.string(),
  nft_product: z.boolean(),
  raffle_product: z.boolean(),
  is_seller_only: z.boolean(),
  tags: z.array(z.string()),
  status: z.string(),
  increment_in_price_per_bid: z.number(),
  min_bid_amount: z.number()
})

export const responseSchema = z.object({
  tag: tagSchema,
  featuredCategoriesIds: z.array(z.number()),
  is_following: z.boolean(),
  follower_count: z.number(),
  streams_count: z.number(),
  products_count: z.number(),
  streams: z.array(streamSchema),
  products: z.array(productSchema),
  share_link: z.string().url()
})

// Type inference using z.infer
export type Tag = z.infer<typeof tagSchema>
export type HostInfo = z.infer<typeof hostInfoSchema>
export type GroupOrCategory = z.infer<typeof groupOrCategorySchema>
export type Stream = z.infer<typeof streamSchema>
export type LiveStream = z.infer<typeof liveStreamSchema>
export type UpcomingStream = z.infer<typeof upcomingStreamSchema>
export type Product = z.infer<typeof productSchema>
export type Response = z.infer<typeof responseSchema>

