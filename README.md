# [Open Graph Image as a Service](https://og-image.vercel.app)

This is a fork of Vercel's [Open Graph Image as a Service](https://og-image.vercel.app). 

This service is used to dynamically generate the Open Graph images that are used in link previews on social media sites. We primarily use this service to dynamically generate debate preview images. 

The images are configured via query parameters and generated via headless Chrome running in a Lambda. Since the operation of generating an image is relatively heavy, the images are [strongly cached](api/index.ts#L22) to avoid generating too often. 

## Query Parameters

The service accepts the following query parameters:
- `hostImg` - a source image URL for a profile photo of the debate host
- `inviteeImg` - a source image URL for a profile photo of the debate invitee
- `topic` - the debate topic

## Development

Run locally with `yarn vercel dev`

The app will run at http://localhost:3000 by default. An image generation page is available at the root. 

To generate a debate preview image, you must specify `debate.[png/jpeg]` as the file path. An example debate preview page:

```
http://localhost:3000/debate.png?hostImg=https://pbs.twimg.com/profile_images/1503591435324563456/foUrqiEw_400x400.jpg&inviteeImg=https://pbs.twimg.com/profile_images/1296929570231390209/hNsDkcQg_400x400.jpg&topic=Wealth%20Inequality
```

## Deployment

The service is deployed to https://og.rallydebates.com via Vercel. 