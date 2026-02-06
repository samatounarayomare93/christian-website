// PRAYER SCHEDULER - PROFESSIONAL SOUL GUIDANCE MINISTRY
// Advanced Prayer Scheduling System with Notifications and Recommendations

class PrayerScheduler {
    constructor() {
        this.prayers = this.initializePrayers();
        this.userPreferences = this.loadUserPreferences();
        this.notifications = [];
        this.currentTime = new Date();
        this.isInitialized = false;

        // Initialize the scheduler
        // this.init();
    }

    init() {
        console.log('🙏 Initializing Prayer Scheduler...');

        // Create scheduler UI
        this.createSchedulerUI();

        // Set up time checking
        this.startTimeChecker();

        // Load user's prayer history
        this.loadPrayerHistory();

        // Set up notifications
        this.setupNotifications();

        this.isInitialized = true;
        console.log('✅ Prayer Scheduler initialized successfully');
    }

    initializePrayers() {
        return {
            // Traditional Christian Prayer Times
            'fajr': {
                name: 'Morning Prayer - صلاة الصباح',
                nameArabic: 'صلاة الصباح',
                time: '06:00',
                duration: 10,
                type: 'daily',
                priority: 'high',
                description: 'Start your day with God',
                descriptionArabic: 'ابدأ يومك مع الله',
                prayers: [
                    {
                        title: 'Morning Offering',
                        titleArabic: 'تقدمة الصباح',
                        text: 'O my Jesus, I offer You today all my prayers, works, joys, and sufferings in union with Your Sacred Heart. I offer them for all the intentions of Your Heart: for the salvation of souls, reparation for sin, and the reunion of all Christians. Amen.',
                        textArabic: 'يا يسوعي، أقدم لك اليوم جميع صلواتي وأعمالي وأفراحي وآلامي متحدة مع قلبك الأقدس. أقدمها لجميع نيات قلبك: لخلاص النفوس، والتكفير عن الخطايا، ووحدة جميع المسيحيين. آمين.'
                    },
                    {
                        title: 'Our Father',
                        titleArabic: 'أبانا الذي في السماوات',
                        text: 'Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
                        textArabic: 'أبانا الذي في السماوات، ليتقدس اسمك، ليأت ملكوتك، لتكن مشيئتك كما في السماء كذلك على الأرض. خبزنا كفاف يومنا أعطنا اليوم، واغفر لنا ذنوبنا كما نغفر نحن أيضاً للمذنبين إلينا، ولا تدخلنا في التجربة، لكن نجنا من الشرير. آمين.'
                    }
                ]
            },
            'noon': {
                name: 'Noon Prayer - صلاة الظهر',
                nameArabic: 'صلاة الظهر',
                time: '12:00',
                duration: 5,
                type: 'daily',
                priority: 'medium',
                description: 'Midday reflection and gratitude',
                descriptionArabic: 'تأمل وشكر منتصف النهار',
                prayers: [
                    {
                        title: 'Trust in Divine Mercy',
                        titleArabic: 'الثقة بالرحمة الإلهية',
                        text: 'Jesus, You are mercy itself. I trust in Your goodness and I hope in Your compassion. Transform my heart to be like Yours - full of mercy for others.',
                        textArabic: 'يا يسوع، أنت الرحمة ذاتها. أثق بصلاحك وأرجو رأفتك. حول قلبي ليكون مثل قلبك - مملوءاً بالرحمة للآخرين.'
                    }
                ]
            },
            'divine_mercy': {
                name: '3 O\'Clock Prayer - صلاة الساعة الثالثة',
                nameArabic: 'صلاة الساعة الثالثة',
                time: '15:00',
                duration: 15,
                type: 'daily',
                priority: 'highest',
                description: 'Hour of Divine Mercy - Most important prayer time',
                descriptionArabic: 'ساعة الرحمة الإلهية - أهم وقت للصلاة',
                prayers: [
                    {
                        title: 'Divine Mercy Prayer',
                        titleArabic: 'صلاة الرحمة الإلهية',
                        text: 'Jesus, I trust in You. O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
                        textArabic: 'يا يسوع، إني أثق بك. يا دم وماء، اللذان تدفقا من قلب يسوع كينبوع رحمة لنا، إني أثق بكما!'
                    },
                    {
                        title: 'Three O\'Clock Prayer',
                        titleArabic: 'صلاة الساعة الثالثة',
                        text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.',
                        textArabic: 'لقد فارقت الحياة يا يسوع، لكن ينبوع الحياة تدفق للنفوس، ومحيط الرحمة انفتح للعالم كله. يا ينبوع الحياة، يا رحمة إلهية لا تُسبر، احتوي العالم كله وأفرغ ذاتك علينا.'
                    }
                ]
            },
            'evening': {
                name: 'Evening Prayer - صلاة المساء',
                nameArabic: 'صلاة المساء',
                time: '18:00',
                duration: 10,
                type: 'daily',
                priority: 'high',
                description: 'Evening thanksgiving and reflection',
                descriptionArabic: 'شكر وتأمل المساء',
                prayers: [
                    {
                        title: 'Evening Thanksgiving',
                        titleArabic: 'شكر المساء',
                        text: 'I thank You, my God, for all the graces You have given me today. I am sorry for all my sins and failings. I place myself and all my loved ones under the protection of Your Divine Mercy. Bless us and keep us safe through the night. Amen.',
                        textArabic: 'أشكرك يا إلهي على جميع النعم التي منحتني إياها اليوم. أنا آسف لجميع خطاياي وإخفاقاتي. أضع نفسي وجميع أحبائي تحت حماية رحمتك الإلهية. باركنا واحفظنا آمنين طوال الليل. آمين.'
                    }
                ]
            },
            'night': {
                name: 'Night Prayer - صلاة الليل',
                nameArabic: 'صلاة الليل',
                time: '21:00',
                duration: 8,
                type: 'daily',
                priority: 'medium',
                description: 'Peaceful rest and surrender to God',
                descriptionArabic: 'راحة هادئة واستسلام لله',
                prayers: [
                    {
                        title: 'Before Sleep Prayer',
                        titleArabic: 'صلاة قبل النوم',
                        text: 'Jesus, I trust in You. Into Your hands I commend my spirit. Watch over me as I sleep and grant me peaceful rest. May Your Divine Mercy be upon me and my family. Amen.',
                        textArabic: 'يا يسوع، إني أثق بك. في يديك أستودع روحي. اسهر علي وأنا نائم وامنحني راحة هادئة. لتكن رحمتك الإلهية علي وعلى عائلتي. آمين.'
                    }
                ]
            },
            // Special Prayers
            'rosary': {
                name: 'Holy Rosary - المسبحة الوردية',
                nameArabic: 'المسبحة الوردية',
                time: 'flexible',
                duration: 20,
                type: 'weekly',
                priority: 'high',
                description: 'Meditative prayer with Mary',
                descriptionArabic: 'صلاة تأملية مع مريم',
                recommendedDays: ['monday', 'wednesday', 'friday', 'sunday']
            },
            'chaplet': {
                name: 'Divine Mercy Chaplet - مسبحة الرحمة الإلهية',
                nameArabic: 'مسبحة الرحمة الإلهية',
                time: 'flexible',
                duration: 15,
                type: 'weekly',
                priority: 'high',
                description: 'Powerful prayer for mercy',
                descriptionArabic: 'صلاة قوية للرحمة',
                recommendedDays: ['tuesday', 'thursday', 'saturday']
            }
        };
    }

    createSchedulerUI() {
        // Check if scheduler already exists
        if (document.getElementById('prayer-scheduler')) {
            return;
        }

        const schedulerHTML = `
            <section class="section" id="prayer-scheduler">
                <div class="container">
                    <div class="section-header" data-aos="fade-up">
                        <div class="section-badge">PRAYER SCHEDULER</div>
                        <h2 class="section-title">جدول الصلاة الشخصي - Personal Prayer Schedule</h2>
                        <p class="section-description">
                            Never miss a prayer again! Our intelligent prayer scheduler helps you maintain a consistent prayer life 
                            with personalized reminders, progress tracking, and spiritual guidance.
                        </p>
                        <p class="section-description" style="margin-top: 1rem;">
                            لن تفوت صلاة مرة أخرى! جدولنا الذكي للصلاة يساعدك على الحفاظ على حياة صلاة ثابتة 
                            مع تذكيرات شخصية وتتبع التقدم والإرشاد الروحي.
                        </p>
                    </div>

                    <!-- Prayer Schedule Dashboard -->
                    <div class="prayer-dashboard">
                        <div class="dashboard-header">
                            <h3><i class="fas fa-clock"></i> Today's Prayer Schedule</h3>
                            <div class="dashboard-controls">
                                <button class="btn btn-secondary" id="customize-schedule">
                                    <i class="fas fa-cog"></i> Customize
                                </button>
                                <button class="btn btn-primary" id="enable-notifications">
                                    <i class="fas fa-bell"></i> Enable Reminders
                                </button>
                            </div>
                        </div>

                        <div class="prayer-timeline" id="prayer-timeline">
                            <!-- Prayer times will be populated here -->
                        </div>

                        <!-- Current Prayer Highlight -->
                        <div class="current-prayer" id="current-prayer" style="display: none;">
                            <div class="current-prayer-content">
                                <h4>🙏 Time to Pray!</h4>
                                <div class="prayer-info">
                                    <h5 id="current-prayer-name"></h5>
                                    <p id="current-prayer-description"></p>
                                    <div class="prayer-actions">
                                        <button class="btn btn-primary" id="start-prayer">
                                            <i class="fas fa-play"></i> Start Prayer
                                        </button>
                                        <button class="btn btn-secondary" id="remind-later">
                                            <i class="fas fa-clock"></i> Remind in 10 min
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Prayer Progress -->
                        <div class="prayer-progress">
                            <h4><i class="fas fa-chart-line"></i> Your Prayer Journey</h4>
                            <div class="progress-stats">
                                <div class="stat-item">
                                    <span class="stat-number" id="prayers-today">0</span>
                                    <span class="stat-label">Prayers Today</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number" id="streak-days">0</span>
                                    <span class="stat-label">Day Streak</span>
                                </div>
                                <div class="stat-item">
                                    <span class="stat-number" id="total-prayers">0</span>
                                    <span class="stat-label">Total Prayers</span>
                                </div>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" id="daily-progress"></div>
                            </div>
                            <p class="progress-text">Daily Goal Progress</p>
                        </div>
                    </div>

                    <!-- Quick Prayer Access -->
                    <div class="quick-prayers">
                        <h3><i class="fas fa-bolt"></i> Quick Prayers</h3>
                        <div class="quick-prayer-grid">
                            <button class="quick-prayer-btn" data-prayer="our-father">
                                <i class="fas fa-cross"></i>
                                <span>Our Father<br>أبانا</span>
                            </button>
                            <button class="quick-prayer-btn" data-prayer="hail-mary">
                                <i class="fas fa-star"></i>
                                <span>Hail Mary<br>السلام عليك</span>
                            </button>
                            <button class="quick-prayer-btn" data-prayer="divine-mercy">
                                <i class="fas fa-heart"></i>
                                <span>Divine Mercy<br>الرحمة الإلهية</span>
                            </button>
                            <button class="quick-prayer-btn" data-prayer="guardian-angel">
                                <i class="fas fa-angel"></i>
                                <span>Guardian Angel<br>الملاك الحارس</span>
                            </button>
                        </div>
                    </div>

                    <!-- Prayer Recommendations -->
                    <div class="prayer-recommendations" id="prayer-recommendations">
                        <h3><i class="fas fa-lightbulb"></i> Recommended for You</h3>
                        <div class="recommendations-list" id="recommendations-list">
                            <!-- Recommendations will be populated here -->
                        </div>
                    </div>
                </div>
            </section>
        `;

        // Insert the scheduler after the prayer section
        const prayerSection = document.getElementById('prayer');
        if (prayerSection) {
            prayerSection.insertAdjacentHTML('afterend', schedulerHTML);
            this.bindSchedulerEvents();
            this.updatePrayerTimeline();
            this.updateRecommendations();
        }
    }

    bindSchedulerEvents() {
        // Customize schedule button
        const customizeBtn = document.getElementById('customize-schedule');
        if (customizeBtn) {
            customizeBtn.addEventListener('click', () => this.openCustomizationModal());
        }

        // Enable notifications button
        const notificationsBtn = document.getElementById('enable-notifications');
        if (notificationsBtn) {
            notificationsBtn.addEventListener('click', () => this.requestNotificationPermission());
        }

        // Start prayer button
        const startPrayerBtn = document.getElementById('start-prayer');
        if (startPrayerBtn) {
            startPrayerBtn.addEventListener('click', () => this.startCurrentPrayer());
        }

        // Remind later button
        const remindLaterBtn = document.getElementById('remind-later');
        if (remindLaterBtn) {
            remindLaterBtn.addEventListener('click', () => this.remindLater());
        }

        // Quick prayer buttons
        const quickPrayerBtns = document.querySelectorAll('.quick-prayer-btn');
        quickPrayerBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const prayerType = e.currentTarget.getAttribute('data-prayer');
                this.openQuickPrayer(prayerType);
            });
        });
    }

    updatePrayerTimeline() {
        const timeline = document.getElementById('prayer-timeline');
        if (!timeline) return;

        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        let timelineHTML = '';

        Object.keys(this.prayers).forEach(prayerKey => {
            const prayer = this.prayers[prayerKey];
            if (prayer.type !== 'daily') return;

            const [hour, minute] = prayer.time.split(':').map(Number);
            const prayerTime = new Date();
            prayerTime.setHours(hour, minute, 0, 0);

            const isPast = (currentHour > hour) || (currentHour === hour && currentMinute > minute);
            const isCurrent = (currentHour === hour && Math.abs(currentMinute - minute) <= 15);
            const isUpcoming = !isPast && !isCurrent;

            let statusClass = '';
            let statusIcon = '';
            let statusText = '';

            if (isPast) {
                statusClass = 'past';
                statusIcon = 'fas fa-check-circle';
                statusText = 'Completed';
            } else if (isCurrent) {
                statusClass = 'current';
                statusIcon = 'fas fa-bell';
                statusText = 'Now';
            } else {
                statusClass = 'upcoming';
                statusIcon = 'fas fa-clock';
                statusText = 'Upcoming';
            }

            timelineHTML += `
                <div class="prayer-time-item ${statusClass}" data-prayer="${prayerKey}">
                    <div class="prayer-time-indicator">
                        <i class="${statusIcon}"></i>
                    </div>
                    <div class="prayer-time-content">
                        <div class="prayer-time-header">
                            <h5>${prayer.name}</h5>
                            <span class="prayer-time-badge">${prayer.time}</span>
                        </div>
                        <p class="prayer-description">${prayer.description}</p>
                        <div class="prayer-actions">
                            <button class="btn-small btn-primary" onclick="prayerScheduler.startPrayer('${prayerKey}')">
                                <i class="fas fa-play"></i> Pray Now
                            </button>
                            <span class="prayer-status">${statusText}</span>
                        </div>
                    </div>
                </div>
            `;
        });

        timeline.innerHTML = timelineHTML;
        this.highlightCurrentPrayer();
    }

    highlightCurrentPrayer() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        let currentPrayer = null;

        Object.keys(this.prayers).forEach(prayerKey => {
            const prayer = this.prayers[prayerKey];
            if (prayer.type !== 'daily') return;

            const [hour, minute] = prayer.time.split(':').map(Number);

            // Check if we're within 15 minutes of prayer time
            if (currentHour === hour && Math.abs(currentMinute - minute) <= 15) {
                currentPrayer = prayer;
                currentPrayer.key = prayerKey;
            }
        });

        const currentPrayerDiv = document.getElementById('current-prayer');
        if (currentPrayer && currentPrayerDiv) {
            document.getElementById('current-prayer-name').textContent = currentPrayer.name;
            document.getElementById('current-prayer-description').textContent = currentPrayer.description;
            currentPrayerDiv.style.display = 'block';
            currentPrayerDiv.setAttribute('data-prayer', currentPrayer.key);
        } else if (currentPrayerDiv) {
            currentPrayerDiv.style.display = 'none';
        }
    }

    startTimeChecker() {
        // Check every minute for prayer times
        setInterval(() => {
            this.checkPrayerTimes();
            this.updatePrayerTimeline();
            this.updateProgress();
        }, 60000); // Check every minute

        // Initial check
        this.checkPrayerTimes();
        this.updateProgress();
    }

    checkPrayerTimes() {
        const now = new Date();
        const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;

        Object.keys(this.prayers).forEach(prayerKey => {
            const prayer = this.prayers[prayerKey];
            if (prayer.type === 'daily' && prayer.time === currentTime) {
                this.triggerPrayerNotification(prayerKey, prayer);
            }
        });

        // Special check for 3 PM Divine Mercy (most important)
        if (currentTime === '14:45') {
            this.showSpecialReminder('divine_mercy', 'It\'s almost 3 PM - Time for the Divine Mercy Prayer!');
        }
    }

    triggerPrayerNotification(prayerKey, prayer) {
        // Browser notification
        if (Notification.permission === 'granted') {
            new Notification(`🙏 ${prayer.name}`, {
                body: prayer.description,
                icon: '/favicon.ico',
                tag: prayerKey,
                requireInteraction: true
            });
        }

        // Visual notification
        this.showPrayerAlert(prayer);

        // Audio notification (optional)
        this.playPrayerBell();
    }

    showPrayerAlert(prayer) {
        const alertHTML = `
            <div class="prayer-alert" id="prayer-alert">
                <div class="prayer-alert-content">
                    <div class="prayer-alert-icon">🙏</div>
                    <h4>Time to Pray!</h4>
                    <h5>${prayer.name}</h5>
                    <p>${prayer.description}</p>
                    <div class="prayer-alert-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.startCurrentPrayer()">
                            <i class="fas fa-play"></i> Pray Now
                        </button>
                        <button class="btn btn-secondary" onclick="prayerScheduler.dismissAlert()">
                            <i class="fas fa-times"></i> Dismiss
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Remove existing alert
        const existingAlert = document.getElementById('prayer-alert');
        if (existingAlert) {
            existingAlert.remove();
        }

        // Add new alert
        document.body.insertAdjacentHTML('beforeend', alertHTML);

        // Auto-dismiss after 30 seconds
        setTimeout(() => {
            this.dismissAlert();
        }, 30000);
    }

    dismissAlert() {
        const alert = document.getElementById('prayer-alert');
        if (alert) {
            alert.remove();
        }
    }

    playPrayerBell() {
        // Create a simple audio notification
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1);
        } catch (error) {
            console.log('Audio notification not available');
        }
    }

    requestNotificationPermission() {
        if ('Notification' in window) {
            Notification.requestPermission().then(permission => {
                const btn = document.getElementById('enable-notifications');
                if (permission === 'granted') {
                    btn.innerHTML = '<i class="fas fa-check"></i> Notifications Enabled';
                    btn.classList.add('btn-success');
                    this.showNotification('Prayer notifications enabled! You\'ll receive reminders for all prayer times.', 'success');
                } else {
                    this.showNotification('Please enable notifications in your browser settings to receive prayer reminders.', 'info');
                }
            });
        } else {
            this.showNotification('Notifications are not supported in your browser.', 'error');
        }
    }

    startPrayer(prayerKey) {
        const prayer = this.prayers[prayerKey];
        if (!prayer) return;

        this.openPrayerModal(prayerKey, prayer);
        this.recordPrayerActivity(prayerKey);
    }

    startCurrentPrayer() {
        const currentPrayerDiv = document.getElementById('current-prayer');
        if (currentPrayerDiv && currentPrayerDiv.style.display !== 'none') {
            const prayerKey = currentPrayerDiv.getAttribute('data-prayer');
            this.startPrayer(prayerKey);
        }
    }

    openPrayerModal(prayerKey, prayer) {
        const modalHTML = `
            <div class="modal" id="prayer-modal" style="display: block;">
                <div class="modal-content prayer-modal-content">
                    <button class="modal-close" onclick="prayerScheduler.closePrayerModal()">&times;</button>
                    
                    <div class="prayer-modal-header">
                        <h2><i class="fas fa-praying-hands"></i> ${prayer.name}</h2>
                        <p class="prayer-modal-description">${prayer.description}</p>
                        <div class="prayer-timer">
                            <i class="fas fa-clock"></i>
                            <span>Estimated time: ${prayer.duration} minutes</span>
                        </div>
                    </div>

                    <div class="prayer-modal-content-area">
                        ${this.generatePrayerContent(prayer)}
                    </div>

                    <div class="prayer-modal-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.completePrayer('${prayerKey}')">
                            <i class="fas fa-check"></i> Mark as Completed
                        </button>
                        <button class="btn btn-secondary" onclick="prayerScheduler.closePrayerModal()">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal
        const existingModal = document.getElementById('prayer-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add new modal
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    generatePrayerContent(prayer) {
        if (!prayer.prayers) {
            return '<p>Prayer content will be loaded here.</p>';
        }

        let content = '';
        prayer.prayers.forEach((prayerItem, index) => {
            content += `
                <div class="prayer-item">
                    <h4>${prayerItem.title}</h4>
                    <h5 class="prayer-arabic">${prayerItem.titleArabic}</h5>
                    
                    <div class="prayer-text-container">
                        <div class="prayer-text english">
                            <h6>English:</h6>
                            <p>${prayerItem.text}</p>
                        </div>
                        
                        <div class="prayer-text arabic">
                            <h6>العربية:</h6>
                            <p class="arabic-text">${prayerItem.textArabic}</p>
                        </div>
                    </div>
                </div>
                ${index < prayer.prayers.length - 1 ? '<hr class="prayer-divider">' : ''}
            `;
        });

        return content;
    }

    closePrayerModal() {
        const modal = document.getElementById('prayer-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }

    completePrayer(prayerKey) {
        this.recordPrayerActivity(prayerKey);
        this.closePrayerModal();
        this.showNotification('Prayer completed! May God bless you. 🙏', 'success');
        this.updateProgress();
        this.updatePrayerTimeline();
    }

    recordPrayerActivity(prayerKey) {
        const today = new Date().toDateString();
        let prayerHistory = JSON.parse(localStorage.getItem('prayerHistory') || '{}');

        if (!prayerHistory[today]) {
            prayerHistory[today] = [];
        }

        if (!prayerHistory[today].includes(prayerKey)) {
            prayerHistory[today].push(prayerKey);
            localStorage.setItem('prayerHistory', JSON.stringify(prayerHistory));
        }
    }

    updateProgress() {
        const today = new Date().toDateString();
        const prayerHistory = JSON.parse(localStorage.getItem('prayerHistory') || '{}');
        const todaysPrayers = prayerHistory[today] || [];

        // Count daily prayers only
        const dailyPrayers = Object.keys(this.prayers).filter(key => this.prayers[key].type === 'daily');
        const completedToday = todaysPrayers.filter(prayer => dailyPrayers.includes(prayer)).length;

        // Update stats
        document.getElementById('prayers-today').textContent = completedToday;

        // Calculate streak
        const streak = this.calculateStreak(prayerHistory);
        document.getElementById('streak-days').textContent = streak;

        // Total prayers
        const totalPrayers = Object.values(prayerHistory).reduce((total, dayPrayers) => total + dayPrayers.length, 0);
        document.getElementById('total-prayers').textContent = totalPrayers;

        // Progress bar
        const progressPercentage = (completedToday / dailyPrayers.length) * 100;
        const progressBar = document.getElementById('daily-progress');
        if (progressBar) {
            progressBar.style.width = `${progressPercentage}%`;
        }
    }

    calculateStreak(prayerHistory) {
        const dates = Object.keys(prayerHistory).sort((a, b) => new Date(b) - new Date(a));
        let streak = 0;

        for (let i = 0; i < dates.length; i++) {
            const date = dates[i];
            const dayPrayers = prayerHistory[date];

            // Check if at least 3 prayers were completed that day
            if (dayPrayers.length >= 3) {
                streak++;
            } else {
                break;
            }
        }

        return streak;
    }

    updateRecommendations() {
        const recommendationsList = document.getElementById('recommendations-list');
        if (!recommendationsList) return;

        const recommendations = this.generateRecommendations();

        let recommendationsHTML = '';
        recommendations.forEach(rec => {
            recommendationsHTML += `
                <div class="recommendation-item">
                    <div class="recommendation-icon">
                        <i class="${rec.icon}"></i>
                    </div>
                    <div class="recommendation-content">
                        <h5>${rec.title}</h5>
                        <p>${rec.description}</p>
                        <button class="btn btn-small btn-primary" onclick="${rec.action}">
                            ${rec.buttonText}
                        </button>
                    </div>
                </div>
            `;
        });

        recommendationsList.innerHTML = recommendationsHTML;
    }

    generateRecommendations() {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

        const recommendations = [];

        // Time-based recommendations
        if (hour >= 6 && hour < 12) {
            recommendations.push({
                title: 'Start Your Day with Prayer',
                description: 'Begin your morning with a prayer of gratitude and surrender to God.',
                icon: 'fas fa-sun',
                action: 'prayerScheduler.startPrayer("fajr")',
                buttonText: 'Morning Prayer'
            });
        }

        if (hour >= 14 && hour < 16) {
            recommendations.push({
                title: 'Divine Mercy Hour Approaching',
                description: 'The 3 PM hour is the most powerful time for Divine Mercy prayers.',
                icon: 'fas fa-heart',
                action: 'prayerScheduler.startPrayer("divine_mercy")',
                buttonText: 'Prepare for 3 PM'
            });
        }

        // Day-based recommendations
        if (day === 0) { // Sunday
            recommendations.push({
                title: 'Sunday Rosary',
                description: 'Sundays are perfect for praying the Glorious Mysteries of the Rosary.',
                icon: 'fas fa-pray',
                action: 'prayerScheduler.openQuickPrayer("rosary")',
                buttonText: 'Pray Rosary'
            });
        }

        // Progress-based recommendations
        const today = new Date().toDateString();
        const prayerHistory = JSON.parse(localStorage.getItem('prayerHistory') || '{}');
        const todaysPrayers = prayerHistory[today] || [];

        if (todaysPrayers.length === 0) {
            recommendations.push({
                title: 'Start Your Prayer Journey',
                description: 'You haven\'t prayed today yet. Start with a simple prayer to connect with God.',
                icon: 'fas fa-play',
                action: 'prayerScheduler.openQuickPrayer("our-father")',
                buttonText: 'Quick Prayer'
            });
        }

        // Default recommendation if none apply
        if (recommendations.length === 0) {
            recommendations.push({
                title: 'Continue Your Spiritual Journey',
                description: 'Explore our prayer library for more spiritual resources and guidance.',
                icon: 'fas fa-book',
                action: 'prayerScheduler.openQuickPrayer("divine-mercy")',
                buttonText: 'Explore Prayers'
            });
        }

        return recommendations.slice(0, 3); // Limit to 3 recommendations
    }

    openQuickPrayer(prayerType) {
        const quickPrayers = {
            'our-father': {
                title: 'Our Father - أبانا الذي في السماوات',
                english: 'Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
                arabic: 'أبانا الذي في السماوات، ليتقدس اسمك، ليأت ملكوتك، لتكن مشيئتك كما في السماء كذلك على الأرض. خبزنا كفاف يومنا أعطنا اليوم، واغفر لنا ذنوبنا كما نغفر نحن أيضاً للمذنبين إلينا، ولا تدخلنا في التجربة، لكن نجنا من الشرير. آمين.'
            },
            'hail-mary': {
                title: 'Hail Mary - السلام عليك يا مريم',
                english: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
                arabic: 'السلام عليك يا مريم، يا ممتلئة نعمة، الرب معك، مباركة أنت في النساء، ومبارك ثمرة بطنك يسوع. يا قديسة مريم، يا والدة الله، صلي لأجلنا نحن الخطأة، الآن وفي ساعة موتنا. آمين.'
            },
            'divine-mercy': {
                title: 'Divine Mercy Prayer - صلاة الرحمة الإلهية',
                english: 'Jesus, I trust in You. O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
                arabic: 'يا يسوع، إني أثق بك. يا دم وماء، اللذان تدفقا من قلب يسوع كينبوع رحمة لنا، إني أثق بكما!'
            },
            'guardian-angel': {
                title: 'Guardian Angel Prayer - صلاة الملاك الحارس',
                english: 'Angel of God, my guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.',
                arabic: 'ملاك الله، حارسي العزيز، الذي عهد إليك حب الله بي هنا، كن بجانبي هذا اليوم دائماً، لتنير وتحرس، لتحكم وترشد. آمين.'
            },
            'rosary': {
                title: 'Holy Rosary - المسبحة الوردية',
                english: 'The Rosary is a powerful meditation on the life of Christ through the eyes of Mary. Begin with the Sign of the Cross, then pray the Apostles\' Creed, one Our Father, three Hail Marys, and one Glory Be.',
                arabic: 'المسبحة الوردية هي تأمل قوي في حياة المسيح من خلال عيني مريم. ابدأ بإشارة الصليب، ثم صل قانون الإيمان، وأبانا واحد، وثلاث سلامات، ومجد واحد.'
            }
        };

        const prayer = quickPrayers[prayerType];
        if (!prayer) return;

        const modalHTML = `
            <div class="modal" id="quick-prayer-modal" style="display: block;">
                <div class="modal-content prayer-modal-content">
                    <button class="modal-close" onclick="prayerScheduler.closeQuickPrayerModal()">&times;</button>
                    
                    <div class="prayer-modal-header">
                        <h2><i class="fas fa-praying-hands"></i> ${prayer.title}</h2>
                    </div>

                    <div class="prayer-modal-content-area">
                        <div class="prayer-text-container">
                            <div class="prayer-text english">
                                <h6>English:</h6>
                                <p>${prayer.english}</p>
                            </div>
                            
                            <div class="prayer-text arabic">
                                <h6>العربية:</h6>
                                <p class="arabic-text">${prayer.arabic}</p>
                            </div>
                        </div>
                    </div>

                    <div class="prayer-modal-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.completeQuickPrayer('${prayerType}')">
                            <i class="fas fa-check"></i> Mark as Completed
                        </button>
                        <button class="btn btn-secondary" onclick="prayerScheduler.closeQuickPrayerModal()">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    closeQuickPrayerModal() {
        const modal = document.getElementById('quick-prayer-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }

    completeQuickPrayer(prayerType) {
        this.recordPrayerActivity(`quick-${prayerType}`);
        this.closeQuickPrayerModal();
        this.showNotification('Prayer completed! God bless you. 🙏', 'success');
        this.updateProgress();
    }

    remindLater() {
        const currentPrayerDiv = document.getElementById('current-prayer');
        if (currentPrayerDiv) {
            currentPrayerDiv.style.display = 'none';
        }

        this.showNotification('You\'ll be reminded in 10 minutes.', 'info');

        // Set reminder for 10 minutes
        setTimeout(() => {
            const prayerKey = currentPrayerDiv.getAttribute('data-prayer');
            const prayer = this.prayers[prayerKey];
            if (prayer) {
                this.showPrayerAlert(prayer);
            }
        }, 10 * 60 * 1000); // 10 minutes
    }

    showSpecialReminder(prayerKey, message) {
        const reminderHTML = `
            <div class="special-reminder" id="special-reminder">
                <div class="special-reminder-content">
                    <div class="special-reminder-icon">❤️</div>
                    <h4>Special Prayer Time!</h4>
                    <p>${message}</p>
                    <div class="special-reminder-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.startPrayer('${prayerKey}')">
                            <i class="fas fa-heart"></i> Pray Now
                        </button>
                        <button class="btn btn-secondary" onclick="prayerScheduler.dismissSpecialReminder()">
                            <i class="fas fa-times"></i> Dismiss
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Remove existing reminder
        const existingReminder = document.getElementById('special-reminder');
        if (existingReminder) {
            existingReminder.remove();
        }

        document.body.insertAdjacentHTML('beforeend', reminderHTML);
    }

    dismissSpecialReminder() {
        const reminder = document.getElementById('special-reminder');
        if (reminder) {
            reminder.remove();
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10001;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            transform: translateX(0);
            transition: transform 0.3s ease;
            max-width: 400px;
            word-wrap: break-word;
        `;

        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: white; cursor: pointer; padding: 0; margin-left: auto; opacity: 0.8;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    loadUserPreferences() {
        const defaultPreferences = {
            morningTime: '06:00',
            noonTime: '12:00',
            eveningTime: '18:00',
            nightTime: '21:00',
            enableSound: true,
            enableBrowser: true,
            enableReminders: true
        };

        const saved = localStorage.getItem('prayerPreferences');
        return saved ? { ...defaultPreferences, ...JSON.parse(saved) } : defaultPreferences;
    }

    saveUserPreferences() {
        localStorage.setItem('prayerPreferences', JSON.stringify(this.userPreferences));
    }

    loadPrayerHistory() {
        const history = localStorage.getItem('prayerHistory');
        return history ? JSON.parse(history) : {};
    }

    setupNotifications() {
        // Request notification permission if not already granted
        if ('Notification' in window && Notification.permission === 'default') {
            // Don't auto-request, let user click the button
        }
    }

    openCustomizationModal() {
        const modalHTML = `
            <div class="modal" id="customization-modal" style="display: block;">
                <div class="modal-content customization-modal-content">
                    <button class="modal-close" onclick="prayerScheduler.closeCustomizationModal()">&times;</button>
                    
                    <div class="customization-header">
                        <h2><i class="fas fa-cog"></i> Customize Prayer Schedule</h2>
                        <p>Adjust your prayer times and notification preferences</p>
                    </div>

                    <div class="customization-content">
                        <div class="customization-section">
                            <h4>Prayer Times</h4>
                            <div class="time-settings">
                                <div class="time-setting">
                                    <label>Morning Prayer:</label>
                                    <input type="time" id="morning-time" value="${this.userPreferences.morningTime}">
                                </div>
                                <div class="time-setting">
                                    <label>Noon Prayer:</label>
                                    <input type="time" id="noon-time" value="${this.userPreferences.noonTime}">
                                </div>
                                <div class="time-setting">
                                    <label>Evening Prayer:</label>
                                    <input type="time" id="evening-time" value="${this.userPreferences.eveningTime}">
                                </div>
                                <div class="time-setting">
                                    <label>Night Prayer:</label>
                                    <input type="time" id="night-time" value="${this.userPreferences.nightTime}">
                            </div>
                        </div>

                        <div class="customization-section">
                            <h4>Notification Preferences</h4>
                            <div class="notification-settings">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="enable-sound" checked>
                                        Enable sound notifications
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" id="enable-browser" checked>
                                        Enable browser notifications
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" id="enable-reminders" checked>
                                        Enable 15-minute reminders
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="customization-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.saveCustomization()">
                            <i class="fas fa-save"></i> Save Settings
                        </button>
                        <button class="btn btn-secondary" onclick="prayerScheduler.closeCustomizationModal()">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </div>
            </div>
            `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    openQuickPrayer(prayerType) {
        const quickPrayers = {
            'our-father': {
                title: 'Our Father - أبانا الذي في السماوات',
                english: 'Our Father, who art in heaven, hallowed be thy name. Thy kingdom come, thy will be done, on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
                arabic: 'أبانا الذي في السماوات، ليتقدس اسمك، ليأت ملكوتك، لتكن مشيئتك كما في السماء كذلك على الأرض. خبزنا كفاف يومنا أعطنا اليوم، واغفر لنا ذنوبنا كما نغفر نحن أيضاً للمذنبين إلينا، ولا تدخلنا في التجربة، لكن نجنا من الشرير. آمين.'
            },
            'hail-mary': {
                title: 'Hail Mary - السلام عليك يا مريم',
                english: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
                arabic: 'السلام عليك يا مريم، يا ممتلئة نعمة، الرب معك، مباركة أنت في النساء، ومبارك ثمر بطنك يسوع. يا قديسة مريم والدة الله، صلي لأجلنا نحن الخطأة، الآن وفي ساعة موتنا. آمين.'
            },
            'divine-mercy': {
                title: 'Divine Mercy Prayer - صلاة الرحمة الإلهية',
                english: 'Jesus, I trust in You. O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
                arabic: 'يا يسوع، إني أثق بك. يا دم وماء، اللذان تدفقا من قلب يسوع كينبوع رحمة لنا، إني أثق بكما!'
            },
            'guardian-angel': {
                title: 'Guardian Angel Prayer - صلاة الملاك الحارس',
                english: 'Angel of God, my guardian dear, to whom God\'s love commits me here, ever this day be at my side, to light and guard, to rule and guide. Amen.',
                arabic: 'ملاك الله، حارسي العزيز، الذي أوكلني الله إليك بمحبته، كن معي هذا اليوم، لتنير وتحرس، لتحكم وترشد. آمين.'
            }
        };

        const prayer = quickPrayers[prayerType];
        if (!prayer) return;

        const modalHTML = `
            < div class="modal" id = "quick-prayer-modal" style = "display: block;" >
                <div class="modal-content">
                    <button class="modal-close" onclick="prayerScheduler.closeQuickPrayerModal()">&times;</button>

                    <div class="quick-prayer-header">
                        <h2><i class="fas fa-praying-hands"></i> ${prayer.title}</h2>
                    </div>

                    <div class="quick-prayer-content">
                        <div class="prayer-text english">
                            <h4>English:</h4>
                            <p>${prayer.english}</p>
                        </div>

                        <div class="prayer-text arabic">
                            <h4>العربية:</h4>
                            <p class="arabic-text">${prayer.arabic}</p>
                        </div>
                    </div>

                    <div class="quick-prayer-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.completeQuickPrayer('${prayerType}')">
                            <i class="fas fa-check"></i> Amen
                        </button>
                    </div>
                </div>
            </div >
            `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    closeQuickPrayerModal() {
        const modal = document.getElementById('quick-prayer-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }

    remindLater() {
        const currentPrayerDiv = document.getElementById('current-prayer');
        if (currentPrayerDiv) {
            currentPrayerDiv.style.display = 'none';
        }

        this.showNotification('You\'ll be reminded in 10 minutes.', 'info');

        // Set reminder for 10 minutes
        setTimeout(() => {
            const prayerKey = currentPrayerDiv.getAttribute('data-prayer');
            const prayer = this.prayers[prayerKey];
            if (prayer) {
                this.showPrayerAlert(prayer);
            }
        }, 10 * 60 * 1000); // 10 minutes
    }


    showSpecialReminder(prayerKey, message) {
        const prayer = this.prayers[prayerKey];
        if (!prayer) return;

        const reminderHTML = `
            < div class="special-reminder" id = "special-reminder" >
                <div class="special-reminder-content">
                    <div class="special-reminder-icon">⏰</div>
                    <h4>${message}</h4>
                    <p>${prayer.description}</p>
                    <div class="special-reminder-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.startPrayer('${prayerKey}')">
                            <i class="fas fa-praying-hands"></i> Prepare Now
                        </button>
                        <button class="btn btn-secondary" onclick="prayerScheduler.dismissSpecialReminder()">
                            <i class="fas fa-times"></i> Dismiss
                        </button>
                    </div>
                </div>
            </div >
            `;

        // Remove existing reminder
        const existingReminder = document.getElementById('special-reminder');
        if (existingReminder) {
            existingReminder.remove();
        }

        document.body.insertAdjacentHTML('beforeend', reminderHTML);

        // Auto-dismiss after 2 minutes
        setTimeout(() => {
            this.dismissSpecialReminder();
        }, 120000);
    }

    dismissSpecialReminder() {
        const reminder = document.getElementById('special-reminder');
        if (reminder) {
            reminder.remove();
        }
    }

    loadUserPreferences() {
        return JSON.parse(localStorage.getItem('prayerPreferences') || '{}');
    }

    saveUserPreferences() {
        localStorage.setItem('prayerPreferences', JSON.stringify(this.userPreferences));
    }

    loadPrayerHistory() {
        return JSON.parse(localStorage.getItem('prayerHistory') || '{}');
    }

    setupNotifications() {
        // Request permission on first load
        if ('Notification' in window && Notification.permission === 'default') {
            // Don't auto-request, let user click the button
        }
    }

    showNotification(message, type = 'info') {
        // Use the existing notification system from the main script
        if (typeof showNotification === 'function') {
            showNotification(message, type);
        } else {
            console.log(`${type.toUpperCase()}: ${message} `);
        }
    }

    openCustomizationModal() {
        const modalHTML = `
            < div class="modal" id = "customization-modal" style = "display: block;" >
                <div class="modal-content">
                    <button class="modal-close" onclick="prayerScheduler.closeCustomizationModal()">&times;</button>

                    <h2><i class="fas fa-cog"></i> Customize Your Prayer Schedule</h2>

                    <div class="customization-content">
                        <div class="customization-section">
                            <h4>Prayer Times</h4>
                            <p>Adjust prayer times to fit your schedule:</p>

                            <div class="time-settings">
                                <div class="time-setting">
                                    <label>Morning Prayer:</label>
                                    <input type="time" id="morning-time" value="06:00">
                                </div>
                                <div class="time-setting">
                                    <label>Noon Prayer:</label>
                                    <input type="time" id="noon-time" value="12:00">
                                </div>
                                <div class="time-setting">
                                    <label>Evening Prayer:</label>
                                    <input type="time" id="evening-time" value="18:00">
                                </div>
                                <div class="time-setting">
                                    <label>Night Prayer:</label>
                                    <input type="time" id="night-time" value="21:00">
                                </div>
                            </div>
                        </div>

                        <div class="customization-section">
                            <h4>Notification Preferences</h4>
                            <div class="notification-settings">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="enable-sound" checked>
                                        Enable sound notifications
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" id="enable-browser" checked>
                                        Enable browser notifications
                                </label>
                                <label class="checkbox-label">
                                    <input type="checkbox" id="enable-reminders" checked>
                                        Enable 15-minute reminders
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="customization-actions">
                        <button class="btn btn-primary" onclick="prayerScheduler.saveCustomization()">
                            <i class="fas fa-save"></i> Save Settings
                        </button>
                        <button class="btn btn-secondary" onclick="prayerScheduler.closeCustomizationModal()">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    </div>
                </div>
            </div >
            `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden';
    }

    closeCustomizationModal() {
        const modal = document.getElementById('customization-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    }

    saveCustomization() {
        // Save time preferences
        this.userPreferences.morningTime = document.getElementById('morning-time').value;
        this.userPreferences.noonTime = document.getElementById('noon-time').value;
        this.userPreferences.eveningTime = document.getElementById('evening-time').value;
        this.userPreferences.nightTime = document.getElementById('night-time').value;

        // Save notification preferences
        this.userPreferences.enableSound = document.getElementById('enable-sound').checked;
        this.userPreferences.enableBrowser = document.getElementById('enable-browser').checked;
        this.userPreferences.enableReminders = document.getElementById('enable-reminders').checked;

        // Update prayer times
        this.prayers.fajr.time = this.userPreferences.morningTime;
        this.prayers.noon.time = this.userPreferences.noonTime;
        this.prayers.evening.time = this.userPreferences.eveningTime;
        this.prayers.night.time = this.userPreferences.nightTime;

        this.saveUserPreferences();
        this.updatePrayerTimeline();
        this.closeCustomizationModal();

        this.showNotification('Prayer schedule customized successfully!', 'success');
    }
}

// Initialize the Prayer Scheduler when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Wait a bit for the main site to load
    setTimeout(() => {
        window.prayerScheduler = new PrayerScheduler();
        console.log('✅ Prayer Scheduler loaded and ready');
    }, 2000);
});

// Export for global access
window.PrayerScheduler = PrayerScheduler;