export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          role: 'admin' | 'editor' | 'viewer'
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          role?: 'admin' | 'editor' | 'viewer'
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'admin' | 'editor' | 'viewer'
          created_at?: string
        }
      }
      services: {
        Row: {
          id: string
          slug: string
          name: string
          service_type: 'core' | 'supporting'
          short_tagline: string | null
          hero_title: string | null
          hero_subtitle: string | null
          long_description: string | null
          icon: string | null
          primary_cta_label: string | null
          primary_cta_url: string | null
          secondary_cta_label: string | null
          secondary_cta_url: string | null
          starting_price: number | null
          is_featured: boolean
          ad_landing_priority: number
          status: 'draft' | 'published'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          name: string
          service_type?: 'core' | 'supporting'
          short_tagline?: string | null
          hero_title?: string | null
          hero_subtitle?: string | null
          long_description?: string | null
          icon?: string | null
          primary_cta_label?: string | null
          primary_cta_url?: string | null
          secondary_cta_label?: string | null
          secondary_cta_url?: string | null
          starting_price?: number | null
          is_featured?: boolean
          ad_landing_priority?: number
          status?: 'draft' | 'published'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          name?: string
          service_type?: 'core' | 'supporting'
          short_tagline?: string | null
          hero_title?: string | null
          hero_subtitle?: string | null
          long_description?: string | null
          icon?: string | null
          primary_cta_label?: string | null
          primary_cta_url?: string | null
          secondary_cta_label?: string | null
          secondary_cta_url?: string | null
          starting_price?: number | null
          is_featured?: boolean
          ad_landing_priority?: number
          status?: 'draft' | 'published'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
