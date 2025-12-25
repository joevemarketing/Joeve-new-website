-- Create profiles table
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    role TEXT CHECK (role IN ('admin', 'editor', 'viewer')) DEFAULT 'viewer',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Grant permissions
GRANT SELECT ON profiles TO anon;
GRANT ALL ON profiles TO authenticated;

-- Create services table
CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    service_type TEXT CHECK (service_type IN ('core', 'supporting')) DEFAULT 'supporting',
    short_tagline TEXT,
    hero_title TEXT,
    hero_subtitle TEXT,
    long_description TEXT,
    icon TEXT,
    primary_cta_label TEXT,
    primary_cta_url TEXT,
    secondary_cta_label TEXT,
    secondary_cta_url TEXT,
    starting_price NUMERIC(10,2),
    is_featured BOOLEAN DEFAULT false,
    ad_landing_priority INT DEFAULT 100,
    status TEXT CHECK (status IN ('draft', 'published')) DEFAULT 'draft',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_services_slug ON services(slug);
CREATE INDEX idx_services_type ON services(service_type);
CREATE INDEX idx_services_featured ON services(is_featured);

-- Grant permissions
GRANT SELECT ON services TO anon;
GRANT ALL ON services TO authenticated;

-- Create service_sections table
CREATE TABLE service_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    service_id UUID REFERENCES services(id) ON DELETE CASCADE,
    type TEXT CHECK (type IN ('problem', 'benefits', 'process', 'features', 'pricing', 'faq', 'cta', 'custom')),
    title TEXT NOT NULL,
    content TEXT,
    order_index INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_service_sections_service_id ON service_sections(service_id);
CREATE INDEX idx_service_sections_order ON service_sections(order_index);

-- Grant permissions
GRANT SELECT ON service_sections TO anon;
GRANT ALL ON service_sections TO authenticated;

-- Create portfolio_items table
CREATE TABLE portfolio_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    client_name TEXT NOT NULL,
    industry TEXT,
    short_summary TEXT,
    full_story TEXT,
    services UUID[],
    metrics JSONB,
    thumbnail_url TEXT,
    gallery_urls TEXT[],
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_portfolio_slug ON portfolio_items(slug);
CREATE INDEX idx_portfolio_published ON portfolio_items(published_at);

-- Grant permissions
GRANT SELECT ON portfolio_items TO anon;
GRANT ALL ON portfolio_items TO authenticated;

-- Create testimonials table
CREATE TABLE testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    role TEXT,
    company TEXT,
    quote TEXT NOT NULL,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    logo_url TEXT,
    service_id UUID REFERENCES services(id),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_testimonials_service_id ON testimonials(service_id);
CREATE INDEX idx_testimonials_featured ON testimonials(featured);

-- Grant permissions
GRANT SELECT ON testimonials TO anon;
GRANT ALL ON testimonials TO authenticated;

-- Leads table already exists in shared DB
-- CREATE TABLE leads (
--     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--     source_page TEXT NOT NULL,
--     campaign_id TEXT,
--     name TEXT NOT NULL,
--     email TEXT NOT NULL,
--     phone TEXT,
--     company TEXT,
--     service_interest TEXT,
--     budget_range TEXT,
--     message TEXT,
--     status TEXT CHECK (status IN ('new', 'contacted', 'qualified', 'lost')) DEFAULT 'new',
--     created_at TIMESTAMPTZ DEFAULT NOW()
-- );

-- Create indexes
-- CREATE INDEX idx_leads_email ON leads(email);
-- CREATE INDEX idx_leads_status ON leads(status);
-- CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Grant permissions
-- GRANT SELECT ON leads TO anon;
-- GRANT ALL ON leads TO authenticated;

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public read access for published content
CREATE POLICY "Public read for published services" ON services
    FOR SELECT USING (status = 'published');

CREATE POLICY "Public read for service sections" ON service_sections
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM services 
            WHERE services.id = service_sections.service_id 
            AND services.status = 'published'
        )
    );

-- Admin full access
CREATE POLICY "Admin full access on services" ON services
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.role = 'admin'
        )
    );
