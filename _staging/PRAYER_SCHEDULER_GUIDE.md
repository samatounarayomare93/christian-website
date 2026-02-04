# Prayer Scheduler Guide - دليل جدول الصلاة

## Overview - نظرة عامة

The Prayer Scheduler is an intelligent system designed to help Christians maintain a consistent prayer life through automated reminders, progress tracking, and personalized spiritual guidance. It follows traditional Christian prayer times while being flexible enough to accommodate individual schedules.

جدول الصلاة هو نظام ذكي مصمم لمساعدة المسيحيين على الحفاظ على حياة صلاة ثابتة من خلال التذكيرات التلقائية وتتبع التقدم والإرشاد الروحي الشخصي.

## Features - الميزات

### 🕐 Intelligent Prayer Times - أوقات الصلاة الذكية
- **Morning Prayer (6:00 AM)** - صلاة الصباح: Start your day with God
- **Noon Prayer (12:00 PM)** - صلاة الظهر: Midday reflection and gratitude  
- **Divine Mercy (3:00 PM)** - الرحمة الإلهية: Most important prayer time
- **Evening Prayer (6:00 PM)** - صلاة المساء: Evening thanksgiving
- **Night Prayer (9:00 PM)** - صلاة الليل: Peaceful rest and surrender

### 🔔 Smart Notifications - التنبيهات الذكية
- Browser notifications for prayer times
- Visual alerts with prayer content
- Special reminders for 3 PM Divine Mercy
- Audio notifications (optional)
- 15-minute advance warnings

### 📊 Progress Tracking - تتبع التقدم
- Daily prayer completion counter
- Prayer streak tracking
- Total prayers completed
- Visual progress indicators
- Achievement milestones

### ⚡ Quick Prayers - الصلوات السريعة
- Our Father - أبانا الذي في السماوات
- Hail Mary - السلام عليك يا مريم
- Divine Mercy Prayer - صلاة الرحمة الإلهية
- Guardian Angel Prayer - صلاة الملاك الحارس

### 🎯 Personalized Recommendations - التوصيات الشخصية
- Time-based prayer suggestions
- Day-specific recommendations
- Progress-based guidance
- Spiritual growth insights

### ⚙️ Customization Options - خيارات التخصيص
- Adjustable prayer times
- Notification preferences
- Sound settings
- Language preferences (English/Arabic)

## Installation - التثبيت

### Method 1: Add to Existing Website
1. Include the CSS file:
```html
<link rel="stylesheet" href="prayer-scheduler.css">
```

2. Include the JavaScript file:
```html
<script src="prayer-scheduler.js"></script>
```

3. The scheduler will automatically initialize when the page loads.

### Method 2: Standalone Demo
Open `prayer-scheduler-demo.html` in your browser to see the full functionality.

## Usage - الاستخدام

### Getting Started - البدء
1. **Enable Notifications**: Click the "Enable Reminders" button to receive prayer notifications
2. **Customize Schedule**: Use the "Customize" button to adjust prayer times to your schedule
3. **Start Praying**: Click "Pray Now" on any prayer time to begin

### Daily Workflow - سير العمل اليومي
1. **Morning**: Receive morning prayer notification at 6 AM
2. **Throughout Day**: Get reminders for noon, 3 PM, evening, and night prayers
3. **Track Progress**: Watch your daily progress bar fill up as you complete prayers
4. **Build Streaks**: Maintain consecutive days of prayer to build your streak

### Special Features - الميزات الخاصة

#### 3 PM Divine Mercy Hour
- Receives special attention with enhanced notifications
- 15-minute advance warning at 2:45 PM
- Dedicated prayer content from Saint Faustina's revelations

#### Quick Prayer Access
- Instant access to common prayers
- No need to wait for scheduled times
- Perfect for spontaneous prayer moments

#### Progress Tracking
- **Prayers Today**: Count of completed prayers
- **Day Streak**: Consecutive days with 3+ prayers
- **Total Prayers**: Lifetime prayer counter

## Prayer Content - محتوى الصلوات

### Traditional Prayer Times - أوقات الصلاة التقليدية

#### Morning Prayer - صلاة الصباح
**English**: "O my Jesus, I offer You today all my prayers, works, joys, and sufferings in union with Your Sacred Heart..."

**Arabic**: "يا يسوعي، أقدم لك اليوم جميع صلواتي وأعمالي وأفراحي وآلامي متحدة مع قلبك الأقدس..."

#### Divine Mercy (3 PM) - الرحمة الإلهية
**English**: "Jesus, I trust in You. O Blood and Water, which gushed forth from the Heart of Jesus..."

**Arabic**: "يا يسوع، إني أثق بك. يا دم وماء، اللذان تدفقا من قلب يسوع..."

### Quick Prayers - الصلوات السريعة

#### Our Father - أبانا
**English**: "Our Father, who art in heaven, hallowed be thy name..."

**Arabic**: "أبانا الذي في السماوات، ليتقدس اسمك..."

#### Hail Mary - السلام عليك
**English**: "Hail Mary, full of grace, the Lord is with thee..."

**Arabic**: "السلام عليك يا مريم، يا ممتلئة نعمة..."

## Customization - التخصيص

### Adjusting Prayer Times
1. Click the "Customize" button in the dashboard
2. Modify prayer times to fit your schedule
3. Save settings to apply changes

### Notification Settings
- **Enable Sound**: Toggle audio notifications
- **Browser Notifications**: Control desktop notifications
- **15-minute Reminders**: Get advance warnings

### Language Preferences
The system automatically displays prayers in both English and Arabic, making it accessible to bilingual users.

## Technical Features - الميزات التقنية

### Browser Compatibility
- Chrome, Firefox, Safari, Edge
- Mobile browsers supported
- Progressive Web App capabilities

### Offline Functionality
- Prayer content cached locally
- Works without internet connection
- Notifications continue offline

### Data Storage
- Uses localStorage for user preferences
- Prayer history stored locally
- No server required

### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader compatible
- High contrast mode support

## Troubleshooting - استكشاف الأخطاء

### Notifications Not Working
1. Check browser notification permissions
2. Ensure notifications are enabled in system settings
3. Try refreshing the page

### Prayer Times Not Updating
1. Check if customization was saved properly
2. Refresh the page to reload settings
3. Clear browser cache if needed

### Progress Not Tracking
1. Ensure localStorage is enabled
2. Check if private browsing mode is disabled
3. Try resetting progress and starting fresh

## Best Practices - أفضل الممارسات

### For Consistent Prayer Life
1. **Set Realistic Times**: Choose prayer times you can consistently maintain
2. **Start Small**: Begin with 2-3 prayers per day, then gradually increase
3. **Use Reminders**: Enable all notification types for best results
4. **Track Progress**: Monitor your streaks to stay motivated

### For Spiritual Growth
1. **Quality over Quantity**: Focus on meaningful prayer rather than just completion
2. **Vary Your Prayers**: Use both scheduled and quick prayers
3. **Reflect on Content**: Read and meditate on the prayer texts
4. **Share with Others**: Encourage family and friends to join

## Integration with Existing Websites - التكامل مع المواقع الموجودة

### Adding to Your Ministry Website
1. Include the CSS and JavaScript files
2. The scheduler will automatically detect prayer sections
3. Customize colors and fonts to match your site theme

### API Integration
The scheduler exposes several methods for custom integration:
```javascript
// Access the scheduler instance
window.prayerScheduler

// Trigger custom prayers
prayerScheduler.startPrayer('custom-prayer-key')

// Update progress manually
prayerScheduler.recordPrayerActivity('prayer-key')

// Show custom notifications
prayerScheduler.showNotification('Custom message', 'success')
```

## Support and Updates - الدعم والتحديثات

### Getting Help
- Check this guide for common issues
- Review the demo page for examples
- Contact the development team for technical support

### Future Updates
- Additional prayer traditions (Orthodox, Catholic variations)
- More languages support
- Advanced analytics and insights
- Community features and prayer groups
- Mobile app version

## Spiritual Benefits - الفوائد الروحية

### Consistency in Prayer Life
- Develops regular prayer habits
- Reduces forgotten prayer times
- Creates spiritual discipline

### Deeper Connection with God
- Structured approach to daily prayer
- Traditional Christian prayer times
- Multilingual spiritual content

### Community and Accountability
- Progress tracking encourages consistency
- Shareable achievements
- Family-friendly features

## Conclusion - الخاتمة

The Prayer Scheduler is more than just a reminder system—it's a comprehensive tool for spiritual growth and consistent prayer life. By combining traditional Christian prayer times with modern technology, it helps believers maintain their connection with God throughout the day.

Whether you're just beginning your prayer journey or looking to deepen your existing practice, the Prayer Scheduler provides the structure, guidance, and encouragement needed for a thriving spiritual life.

جدول الصلاة هو أكثر من مجرد نظام تذكير - إنه أداة شاملة للنمو الروحي وحياة الصلاة المستمرة. من خلال الجمع بين أوقات الصلاة المسيحية التقليدية والتكنولوجيا الحديثة، فإنه يساعد المؤمنين على الحفاظ على اتصالهم مع الله طوال اليوم.

---

*May this tool bless your prayer life and draw you closer to our Lord Jesus Christ.*

*عسى أن تبارك هذه الأداة حياتك في الصلاة وتقربك من ربنا يسوع المسيح.*