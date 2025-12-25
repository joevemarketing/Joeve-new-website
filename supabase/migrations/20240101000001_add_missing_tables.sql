-- Create blog_posts table
CREATE TABLE blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    content TEXT,
    category TEXT,
    tags TEXT[],
    featured_image_url TEXT,
    author_id UUID REFERENCES profiles(id),
    published_at TIMESTAMPTZ,
    status TEXT CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);

-- Grant permissions
GRANT SELECT ON blog_posts TO anon;
GRANT ALL ON blog_posts TO authenticated;

-- Create faqs table
CREATE TABLE faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    service_id UUID REFERENCES services(id),
    order_index INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_faqs_service_id ON faqs(service_id);

-- Grant permissions
GRANT SELECT ON faqs TO anon;
GRANT ALL ON faqs TO authenticated;

-- Create site_settings table
CREATE TABLE site_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT UNIQUE NOT NULL,
    value JSONB NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Grant permissions
GRANT SELECT ON site_settings TO anon;
GRANT ALL ON site_settings TO authenticated;

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read for published blog posts" ON blog_posts
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public read for faqs" ON faqs
    FOR SELECT USING (true);

CREATE POLICY "Public read for site settings" ON site_settings
    FOR SELECT USING (true);

-- Admin full access
CREATE POLICY "Admin full access on blog_posts" ON blog_posts
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.role = 'admin'
        )
    );

CREATE POLICY "Admin full access on faqs" ON faqs
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.role = 'admin'
        )
    );

CREATE POLICY "Admin full access on site_settings" ON site_settings
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.role = 'admin'
        )
    );
