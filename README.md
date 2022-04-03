# [Open Graph Image as a Service](https://og-image.vercel.app)

This is a fork of Vercel's [Open Graph Image as a Service](https://og-image.vercel.app). 

This service is used to dynamically generate the Open Graph images that are used in link previews on social media sites. We primarily use this service to dynamically generate debate preview images. 

The images are configured via query parameters and generated via headless Chrome running in a Lambda. Since the operation of generating an image is relatively heavy, the images are [strongly cached](api/index.ts#L22) to avoid generating too often. 

## Query Parameters

The service accepts the following query parameters:
- `host` - a source image URL for a profile photo of the debate host
- `invitee` - a source image URL for a profile photo of the debate invitee
- `topic` - the debate topic

## Development

Run locally with `yarn vercel dev`

While running, there is a

## Deployment

The service is deployed to https://og.rallydebates.com via Vercel. 

## Example Image

