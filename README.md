## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Learn More

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Notes

- when we upload any file or media content, it is post which has type=attachment
- Everthing is a post type in wordpress like post, page, attachment these post types on wordpress


| Feature/Field                | `post` Type                                            | `attachment` Type                                         |
|------------------------------|--------------------------------------------------------|-----------------------------------------------------------|
| **Purpose**                  | Represents a standard blog post or content page.       | Represents a media file (e.g., image, video, PDF).         |
| **`post_type` Value**        | `post`                                                 | `attachment`                                               |
| **Common Fields**            | Uses fields like `post_title`, `post_content`, `post_excerpt`, `post_status`, etc., for managing content. | Uses fields like `post_title` (media filename), `post_mime_type`, and other metadata for managing media. |
| **Post Content (`post_content`)** | Contains the main content of the blog post or page. | Usually empty, but can contain a caption or additional information about the media file. |
| **Post Title (`post_title`)**| The title of the post or page, used for display purposes. | The original file name of the uploaded media file.         |
| **Post Status (`post_status`)**| Defines the status of the post (e.g., `publish`, `draft`). | Defines the status of the attachment (usually `inherit`).   |
| **Parent Post (`post_parent`)** | Usually `0` for a top-level post; can reference another post ID for hierarchical structures like pages. | Refers to the ID of the post the attachment is associated with (e.g., a featured image or embedded media in a post). |
| **Post MIME Type (`post_mime_type`)** | Not used for regular posts (often empty).                       | Stores the MIME type of the file (e.g., `image/jpeg`, `application/pdf`). |
| **Guid (`guid`)**            | A unique identifier, often the permalink to the post.  | A unique identifier, usually the URL to the attachment file.|
| **Metadata (`wp_postmeta`)** | Metadata such as custom fields for a post, SEO settings, etc. | Metadata for the attachment file, such as file size, dimensions, etc. |
| **Attachment Details**       | Not applicable.                                        | Contains details like file URL, file path, dimensions (for images), and alternative text. |
| **Associated Features**      | Categories, tags, comments, etc., that categorize and organize content. | Generally does not use categories or tags; instead, it is directly associated with the post it is attached to. |
| **Relationship with `wp_postmeta`** | May have custom fields for additional information or settings. | Often has meta entries related to file properties (like `_wp_attached_file`, `_wp_attachment_metadata`). |
# Code Fragments
