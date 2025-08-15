const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json()); // لتمكين تحليل نصوص JSON في الطلبات
app.use(express.static(path.join(__dirname, 'public'))); // لتقديم ملفات الواجهة الأمامية

// نقطة النهاية التي يتعامل معها كود الجافاسكريبت في ملف الـ HTML
app.post('/analyze', (req, res) => {
    const { domain } = req.body;
    console.log(`Received request to analyze domain: ${domain}`);

    // هنا يتم محاكاة عملية تحليل الموقع
    // في تطبيق حقيقي، ستقوم بإجراء استعلامات فعلية لواجهات برمجة تطبيقات (APIs)
    const mockReport = {
        estimated_cpc: (Math.random() * 5).toFixed(2), // قيمة عشوائية
        estimated_traffic: Math.floor(Math.random() * 100000) + 10000,
        keywords: ['seo', 'marketing', 'analytics', 'web development'],
    };

    if (domain.includes('error')) { // مثال لإرجاع خطأ
        return res.status(400).json({ error: 'فشل تحليل النطاق.' });
    }

    // إرسال التقرير بصيغة JSON
    res.json({
        domain: domain,
        report: mockReport
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
