const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/analyze', (req, res) => {
    const { domain } = req.body;
    console.log(`Received request to analyze domain: ${domain}`);

    const mockReport = {
        estimated_cpc: (Math.random() * 5).toFixed(2),
        estimated_traffic: Math.floor(Math.random() * 100000) + 10000,
        keywords: ['seo', 'marketing', 'analytics', 'web development'],
    };

    if (domain.includes('error')) {
        return res.status(400).json({ error: 'فشل تحليل النطاق.' });
    }

    res.json({
        domain: domain,
        report: mockReport
    });
});

// هذا السطر يقوم بتصدير التطبيق ليكون جاهزاً للتشغيل من قبل Vercel
module.exports = app;
