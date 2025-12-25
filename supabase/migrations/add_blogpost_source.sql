ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS source_url text;
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS source_name text;
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS region text;
