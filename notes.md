# dev@payloadcms.com test
# How to run
## create .env and added database connection credentials 

## supabase storage:
  - installed s3 package
 - updated .env with supabase credentials
 - added plugin in payload.config
 - added images/remotePatterns in next.config
 - commented vercel blob storage at all these places

# RenderBlocks excludes few blocks: 
# RenderBlocks is used at the from following collections > pages:
- Post Collection > BlogPost page
- Pages Collection > Home page and static pages
- > case-studies page
- > partners pages
- ResuableContent Component