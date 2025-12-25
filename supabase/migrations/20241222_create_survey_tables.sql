-- Create survey responses table
CREATE TABLE IF NOT EXISTS survey_responses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    survey_type VARCHAR(50) NOT NULL CHECK (survey_type IN ('roi_calculator', 'web_app_guide')),
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address INET,
    metadata JSONB DEFAULT '{}',
    completed BOOLEAN DEFAULT false
);

-- Create survey answers table
CREATE TABLE IF NOT EXISTS survey_answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    survey_id UUID REFERENCES survey_responses(id) ON DELETE CASCADE,
    question_key VARCHAR(100) NOT NULL,
    answer_value JSONB NOT NULL,
    answered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create download tokens table
CREATE TABLE IF NOT EXISTS download_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    survey_id UUID REFERENCES survey_responses(id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    used BOOLEAN DEFAULT false,
    used_at TIMESTAMP WITH TIME ZONE
);

-- Create report generations table
CREATE TABLE IF NOT EXISTS report_generations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    survey_id UUID REFERENCES survey_responses(id) ON DELETE CASCADE,
    report_type VARCHAR(50) NOT NULL,
    file_path VARCHAR(500),
    generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    report_data JSONB DEFAULT '{}'
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_survey_responses_email ON survey_responses(email);
CREATE INDEX IF NOT EXISTS idx_survey_responses_type ON survey_responses(survey_type);
CREATE INDEX IF NOT EXISTS idx_survey_responses_created ON survey_responses(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_survey_answers_survey_id ON survey_answers(survey_id);
CREATE INDEX IF NOT EXISTS idx_survey_answers_question ON survey_answers(question_key);
CREATE INDEX IF NOT EXISTS idx_download_tokens_token ON download_tokens(token);
CREATE INDEX IF NOT EXISTS idx_download_tokens_expires ON download_tokens(expires_at);

-- Grant permissions
GRANT SELECT ON survey_responses TO anon;
GRANT INSERT ON survey_responses TO anon;
GRANT SELECT ON survey_answers TO anon;
GRANT INSERT ON survey_answers TO anon;
GRANT SELECT ON download_tokens TO anon;
GRANT INSERT ON download_tokens TO anon;
GRANT SELECT ON report_generations TO anon;
GRANT INSERT ON report_generations TO anon;

GRANT ALL PRIVILEGES ON survey_responses TO authenticated;
GRANT ALL PRIVILEGES ON survey_answers TO authenticated;
GRANT ALL PRIVILEGES ON download_tokens TO authenticated;
GRANT ALL PRIVILEGES ON report_generations TO authenticated;

-- Enable RLS
ALTER TABLE survey_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE survey_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE download_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE report_generations ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY users_view_own_responses ON survey_responses
    FOR SELECT USING (email = auth.email());

CREATE POLICY tokens_select_policy ON download_tokens
    FOR SELECT USING (true);

CREATE POLICY reports_select_policy ON report_generations
    FOR SELECT USING (true);