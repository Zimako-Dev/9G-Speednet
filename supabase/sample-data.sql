-- Sample Data for 9G Speednet Database

-- Insert sample admin users (you'll need to create these in Supabase Auth first)
-- These are just profile records - the actual auth users need to be created via Supabase Auth
INSERT INTO public.profiles (id, email, full_name, role) VALUES
    ('00000000-0000-0000-0000-000000000001', 'admin@9gspeednet.com', 'System Administrator', 'super_admin'),
    ('00000000-0000-0000-0000-000000000002', 'manager@9gspeednet.com', 'Store Manager', 'admin'),
    ('00000000-0000-0000-0000-000000000003', 'staff@9gspeednet.com', 'Staff Member', 'admin'),
    ('00000000-0000-0000-0000-000000000004', 'admin@9gspeed.co.za', 'Main Administrator', 'super_admin');

-- Insert categories
INSERT INTO public.categories (name, slug, description, is_active, sort_order) VALUES
    ('Routers', 'routers', 'High-performance wireless routers for home and business', true, 1),
    ('Modems', 'modems', 'LTE and fiber modems for internet connectivity', true, 2),
    ('Antennas', 'antennas', 'Signal boosting antennas and accessories', true, 3),
    ('Cables', 'cables', 'Network cables and connectivity solutions', true, 4),
    ('Accessories', 'accessories', 'Network accessories and tools', true, 5),
    ('Packages', 'packages', 'Complete internet packages and bundles', true, 6);

-- Insert brands
INSERT INTO public.brands (name, slug, description, is_active) VALUES
    ('Huawei', 'huawei', 'Leading telecommunications equipment manufacturer', true),
    ('TP-Link', 'tp-link', 'Reliable networking solutions for home and business', true),
    ('Mikrotik', 'mikrotik', 'Professional networking equipment', true),
    ('Ubiquiti', 'ubiquiti', 'Enterprise wireless and networking solutions', true),
    ('D-Link', 'd-link', 'Innovative networking products', true),
    ('Netgear', 'netgear', 'Premium networking hardware', true),
    ('Asus', 'asus', 'High-performance routers and networking', true),
    ('Teltonika', 'teltonika', 'Industrial IoT and networking solutions', true);

-- Insert sample products
INSERT INTO public.products (
    name, description, short_description, price, original_price, category, brand, sku, 
    stock_quantity, in_stock, images, features, specifications, is_featured, is_active, 
    meta_title, meta_description, slug, created_by
) VALUES
    (
        'Huawei B535 4G Router',
        'The Huawei B535 is a high-performance 4G router that delivers fast internet speeds up to 300 Mbps. Perfect for home and small office use with excellent coverage and reliability.',
        'High-performance 4G router with speeds up to 300 Mbps',
        2499.00,
        2999.00,
        'router',
        'Huawei',
        'HW-B535-001',
        25,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'
        ],
        ARRAY[
            '4G LTE Cat6 support',
            'WiFi 802.11ac dual-band',
            'Up to 64 connected devices',
            'External antenna ports',
            'Gigabit Ethernet ports'
        ],
        '{"max_speed": "300 Mbps", "wifi_standard": "802.11ac", "ethernet_ports": 4, "usb_ports": 1, "dimensions": "230 x 158 x 31.5 mm"}',
        true,
        true,
        'Huawei B535 4G Router - Fast Internet Up to 300 Mbps',
        'Get reliable high-speed internet with the Huawei B535 4G router. Perfect for home and office use.',
        'huawei-b535-4g-router',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'TP-Link Archer AX73 WiFi 6 Router',
        'Experience next-generation WiFi 6 technology with the TP-Link Archer AX73. Delivers ultra-fast speeds up to 5.4 Gbps with improved efficiency and coverage.',
        'WiFi 6 router with speeds up to 5.4 Gbps',
        3299.00,
        3799.00,
        'router',
        'TP-Link',
        'TPL-AX73-001',
        18,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500',
            'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500'
        ],
        ARRAY[
            'WiFi 6 (802.11ax) technology',
            'AX5400 dual-band speeds',
            'OFDMA and MU-MIMO',
            '6 high-gain antennas',
            'Advanced security features'
        ],
        '{"max_speed": "5.4 Gbps", "wifi_standard": "802.11ax", "ethernet_ports": 4, "usb_ports": 1, "dimensions": "272.5 x 147.2 x 49.2 mm"}',
        true,
        true,
        'TP-Link Archer AX73 WiFi 6 Router - Ultra-Fast 5.4 Gbps',
        'Upgrade to WiFi 6 with the TP-Link Archer AX73 for blazing-fast internet speeds.',
        'tp-link-archer-ax73-wifi-6-router',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Huawei B818 4G+ Router',
        'Premium 4G+ router with Cat19 LTE support delivering speeds up to 1.6 Gbps. Features advanced antenna technology and comprehensive connectivity options.',
        'Premium 4G+ router with Cat19 LTE up to 1.6 Gbps',
        4999.00,
        5499.00,
        'router',
        'Huawei',
        'HW-B818-001',
        12,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500'
        ],
        ARRAY[
            '4G+ LTE Cat19 support',
            'Speeds up to 1.6 Gbps',
            '4x4 MIMO technology',
            'Advanced antenna design',
            'Comprehensive port selection'
        ],
        '{"max_speed": "1.6 Gbps", "lte_category": "Cat19", "ethernet_ports": 2, "usb_ports": 2, "dimensions": "225 x 177 x 72 mm"}',
        false,
        true,
        'Huawei B818 4G+ Router - Premium LTE Cat19 Performance',
        'Experience premium 4G+ speeds with the Huawei B818 router featuring Cat19 LTE technology.',
        'huawei-b818-4g-plus-router',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Mikrotik hAP ac² Router',
        'Dual-band wireless router with Gigabit Ethernet and advanced RouterOS features. Perfect for advanced users and small businesses.',
        'Dual-band router with RouterOS and Gigabit Ethernet',
        1899.00,
        2199.00,
        'router',
        'Mikrotik',
        'MT-HAPAC2-001',
        30,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500'
        ],
        ARRAY[
            'Dual-band 802.11ac',
            'RouterOS Level 4 license',
            'Gigabit Ethernet ports',
            'PoE output capability',
            'Advanced firewall features'
        ],
        '{"max_speed": "1.2 Gbps", "wifi_standard": "802.11ac", "ethernet_ports": 5, "poe_output": "Yes", "dimensions": "113 x 89 x 28 mm"}',
        false,
        true,
        'Mikrotik hAP ac² Router - Professional RouterOS Solution',
        'Professional networking with Mikrotik hAP ac² featuring RouterOS and advanced features.',
        'mikrotik-hap-ac2-router',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Teltonika RUT955 Industrial Router',
        'Industrial-grade 4G router designed for mission-critical applications. Features dual-SIM, GPS, and robust security for harsh environments.',
        'Industrial 4G router with dual-SIM and GPS',
        6499.00,
        7299.00,
        'router',
        'Teltonika',
        'TLT-RUT955-001',
        8,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'
        ],
        ARRAY[
            'Industrial-grade design',
            'Dual-SIM failover',
            'Built-in GPS',
            'VPN capabilities',
            'Wide temperature range'
        ],
        '{"max_speed": "150 Mbps", "operating_temp": "-40°C to +75°C", "ethernet_ports": 4, "sim_slots": 2, "dimensions": "156 x 30 x 100 mm"}',
        false,
        true,
        'Teltonika RUT955 Industrial 4G Router - Mission Critical',
        'Industrial-grade 4G connectivity with the Teltonika RUT955 router for critical applications.',
        'teltonika-rut955-industrial-router',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'High-Gain 4G LTE Antenna',
        'Professional-grade external antenna for 4G LTE routers and modems. Significantly improves signal strength and data speeds.',
        'High-gain external antenna for improved 4G signal',
        899.00,
        1199.00,
        'antenna',
        'Generic',
        'ANT-4G-HG-001',
        45,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'
        ],
        ARRAY[
            '18dBi high gain',
            'Weatherproof design',
            'SMA connector',
            '10m extension cable',
            'Easy mounting kit'
        ],
        '{"gain": "18 dBi", "frequency": "700-2700 MHz", "connector": "SMA", "cable_length": "10m", "dimensions": "400 x 50 x 25 mm"}',
        false,
        true,
        'High-Gain 4G LTE Antenna - Boost Your Signal Strength',
        'Improve your 4G signal with our professional high-gain LTE antenna.',
        'high-gain-4g-lte-antenna',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        'Cat6 Ethernet Cable 10m',
        'High-quality Cat6 Ethernet cable for reliable network connections. Supports Gigabit speeds and is perfect for home and office use.',
        'High-quality Cat6 Ethernet cable - 10 meters',
        299.00,
        399.00,
        'cable',
        'Generic',
        'CBL-CAT6-10M-001',
        100,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500'
        ],
        ARRAY[
            'Cat6 specification',
            'Gigabit Ethernet support',
            'Gold-plated connectors',
            'Durable PVC jacket',
            '10-meter length'
        ],
        '{"category": "Cat6", "length": "10m", "speed": "1 Gbps", "connector": "RJ45", "jacket": "PVC"}',
        false,
        true,
        'Cat6 Ethernet Cable 10m - Reliable Network Connection',
        'High-quality Cat6 Ethernet cable for fast and reliable network connections.',
        'cat6-ethernet-cable-10m',
        '00000000-0000-0000-0000-000000000001'
    ),
    (
        '9G Speednet Fibre Package - 100 Mbps',
        'Premium fibre internet package with 100 Mbps download and upload speeds. Includes free router and professional installation.',
        'Premium 100 Mbps fibre internet package',
        599.00,
        699.00,
        'package',
        '9G Speednet',
        'PKG-FIBRE-100-001',
        999,
        true,
        ARRAY[
            'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500'
        ],
        ARRAY[
            '100 Mbps up/down',
            'Unlimited data',
            'Free router included',
            'Professional installation',
            '24/7 technical support'
        ],
        '{"speed_down": "100 Mbps", "speed_up": "100 Mbps", "data_limit": "Unlimited", "contract": "24 months", "installation": "Free"}',
        true,
        true,
        '9G Speednet 100 Mbps Fibre Package - Premium Internet',
        'Get blazing-fast 100 Mbps fibre internet with our premium package including free installation.',
        '9g-speednet-fibre-package-100mbps',
        '00000000-0000-0000-0000-000000000001'
    );

-- Insert sample site settings
INSERT INTO public.site_settings (key, value, description) VALUES
    ('site_name', '"9G Speednet"', 'Website name'),
    ('site_description', '"South Africa''s premier internet service provider offering fiber, LTE, and microwave solutions."', 'Website description'),
    ('contact_email', '"info@9gspeednet.com"', 'Main contact email'),
    ('contact_phone', '"+27 11 123 4567"', 'Main contact phone'),
    ('business_hours', '{"monday": "08:00-17:00", "tuesday": "08:00-17:00", "wednesday": "08:00-17:00", "thursday": "08:00-17:00", "friday": "08:00-17:00", "saturday": "09:00-13:00", "sunday": "Closed"}', 'Business operating hours'),
    ('social_media', '{"facebook": "https://facebook.com/9gspeednet", "twitter": "https://twitter.com/9gspeednet", "linkedin": "https://linkedin.com/company/9gspeednet"}', 'Social media links'),
    ('shipping_info', '{"free_shipping_threshold": 1000, "standard_shipping_cost": 150, "express_shipping_cost": 300}', 'Shipping configuration'),
    ('tax_rate', '0.15', 'VAT rate (15%)');

-- Insert sample coupons
INSERT INTO public.coupons (code, description, discount_type, discount_value, minimum_amount, usage_limit, is_active, expires_at) VALUES
    ('WELCOME10', 'Welcome discount for new customers', 'percentage', 10.00, 500.00, 100, true, NOW() + INTERVAL '3 months'),
    ('FIBER50', 'R50 off fiber packages', 'fixed', 50.00, 1000.00, 50, true, NOW() + INTERVAL '1 month'),
    ('BULK20', '20% off bulk orders', 'percentage', 20.00, 2000.00, 25, true, NOW() + INTERVAL '2 months');
