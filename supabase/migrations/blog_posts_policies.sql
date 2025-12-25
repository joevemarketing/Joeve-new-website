BEGIN;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_catalog.pg_policies WHERE schemaname = 'public' AND tablename = 'blog_posts' AND policyname = 'allow_public_read_published'
  ) THEN
    CREATE POLICY allow_public_read_published ON public.blog_posts
      FOR SELECT
      TO anon
      USING (status = 'published');
  END IF;
END $$;
COMMIT;
