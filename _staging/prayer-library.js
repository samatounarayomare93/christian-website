// PRAYER LIBRARY SYSTEM - PROFESSIONAL SOUL GUIDANCE MINISTRY
// Comprehensive Prayer Books and Scheduler Organization

class PrayerLibrary {
    constructor() {
        this.books = this.initializeBooks();
        this.currentBook = null;
        this.isInitialized = false;

        this.init();
    }

    init() {
        console.log('📚 Initializing Prayer Library...');

        // Create library UI
        this.createLibraryUI();

        // Bind events
        this.bindLibraryEvents();

        this.isInitialized = true;
        console.log('✅ Prayer Library initialized successfully');
    }

    initializeBooks() {
        return {
            'prayer-scheduler': {
                id: 'prayer-scheduler',
                title: 'Prayer Scheduler',
                titleArabic: 'جدول الصلاة الذكي',
                subtitle: 'Smart Prayer Management System',
                subtitleArabic: 'نظام إدارة الصلاة الذكي',
                icon: 'fas fa-clock',
                color: '#FFD700',
                description: 'Never miss a prayer again! Intelligent scheduling, reminders, and progress tracking for your daily spiritual life.',
                descriptionArabic: 'لن تفوت صلاة مرة أخرى! جدولة ذكية وتذكيرات وتتبع التقدم لحياتك الروحية اليومية.',
                features: [
                    'Smart prayer time notifications',
                    'Daily progress tracking',
                    'Customizable prayer schedule',
                    'Quick prayer access',
                    'Streak counters and achievements'
                ],
                featuresArabic: [
                    'تنبيهات أوقات الصلاة الذكية',
                    'تتبع التقدم اليومي',
                    'جدول صلاة قابل للتخصيص',
                    'وصول سريع للصلوات',
                    'عدادات الإنجازات والمكافآت'
                ],
                type: 'interactive',
                content: 'scheduler'
            },
            'divine-mercy-daily': {
                id: 'divine-mercy-daily',
                title: 'Divine Mercy Daily',
                titleArabic: 'الرحمة الإلهية اليومية',
                subtitle: 'Saint Faustina\'s Divine Mercy Devotions',
                subtitleArabic: 'تكريسات الرحمة الإلهية للقديسة فوستينا',
                icon: 'fas fa-heart',
                color: '#DC143C',
                description: 'Complete collection of Divine Mercy prayers, chaplet, novena, and daily devotions as revealed to Saint Faustina.',
                descriptionArabic: 'مجموعة كاملة من صلوات الرحمة الإلهية والمسبحة والتساعية والتكريسات اليومية كما أُعلنت للقديسة فوستينا.',
                features: [
                    'Daily Divine Mercy prayers',
                    'Complete Chaplet with instructions',
                    '9-day Divine Mercy Novena',
                    '3 O\'Clock Prayer (Hour of Mercy)',
                    'Saint Faustina\'s diary excerpts'
                ],
                featuresArabic: [
                    'صلوات الرحمة الإلهية اليومية',
                    'المسبحة الكاملة مع التعليمات',
                    'تساعية الرحمة الإلهية لـ 9 أيام',
                    'صلاة الساعة الثالثة (ساعة الرحمة)',
                    'مقتطفات من يوميات القديسة فوستينا'
                ],
                type: 'prayer-book',
                content: 'divine-mercy'
            },
            'holy-rosary': {
                id: 'holy-rosary',
                title: 'Holy Rosary',
                titleArabic: 'المسبحة الوردية المقدسة',
                subtitle: 'Complete Rosary Guide with All Mysteries',
                subtitleArabic: 'دليل المسبحة الكامل مع جميع الأسرار',
                icon: 'fas fa-pray',
                color: '#4169E1',
                description: 'Traditional Catholic Rosary with Joyful, Sorrowful, Glorious, and Luminous Mysteries in English and Arabic.',
                descriptionArabic: 'المسبحة الكاثوليكية التقليدية مع الأسرار الفرحة والحزينة والمجيدة والنورانية باللغتين الإنجليزية والعربية.',
                features: [
                    'All 20 mysteries with meditations',
                    'How to pray the Rosary guide',
                    'Rosary prayers in Latin, English, Arabic',
                    'Daily Rosary schedule',
                    'Special feast day Rosaries'
                ],
                featuresArabic: [
                    'جميع الـ 20 سراً مع التأملات',
                    'دليل كيفية تلاوة المسبحة',
                    'صلوات المسبحة باللاتينية والإنجليزية والعربية',
                    'جدول المسبحة اليومي',
                    'مسابح الأعياد الخاصة'
                ],
                type: 'prayer-book',
                content: 'rosary'
            },
            'saint-anthony': {
                id: 'saint-anthony',
                title: 'Saint Anthony the Great',
                titleArabic: 'القديس أنطونيوس الكبير',
                subtitle: 'Desert Father Prayers & Spiritual Warfare',
                subtitleArabic: 'صلوات أبو الرهبان والحرب الروحية',
                icon: 'fas fa-shield-alt',
                color: '#8B4513',
                description: 'Powerful prayers for spiritual protection, deliverance from evil, and monastic wisdom from the Desert Fathers tradition.',
                descriptionArabic: 'صلوات قوية للحماية الروحية والتحرر من الشر والحكمة الرهبانية من تقليد آباء البرية.',
                features: [
                    'Spiritual warfare prayers',
                    'Protection from demonic attacks',
                    'Desert Fathers wisdom',
                    'Monastic life guidance',
                    'Deliverance prayers'
                ],
                featuresArabic: [
                    'صلوات الحرب الروحية',
                    'الحماية من الهجمات الشيطانية',
                    'حكمة آباء البرية',
                    'إرشاد الحياة الرهبانية',
                    'صلوات التحرير'
                ],
                type: 'prayer-book',
                content: 'saint-anthony'
            },
            'saint-faustina': {
                id: 'saint-faustina',
                title: 'Saint Faustina Collection',
                titleArabic: 'مجموعة القديسة فوستينا',
                subtitle: 'Complete Diary Excerpts & Revelations',
                subtitleArabic: 'مقتطفات اليوميات الكاملة والإعلانات',
                icon: 'fas fa-dove',
                color: '#87CEEB',
                description: 'Sacred revelations, visions, and prayers from Saint Faustina\'s diary, including Jesus\' direct words about Divine Mercy.',
                descriptionArabic: 'الإعلانات المقدسة والرؤى والصلوات من يوميات القديسة فوستينا، بما في ذلك كلمات يسوع المباشرة عن الرحمة الإلهية.',
                features: [
                    'Complete diary excerpts',
                    'Jesus\' words to Saint Faustina',
                    'Visions and revelations',
                    'Personal prayers of Saint Faustina',
                    'Promises of Divine Mercy'
                ],
                featuresArabic: [
                    'مقتطفات اليوميات الكاملة',
                    'كلمات يسوع للقديسة فوستينا',
                    'الرؤى والإعلانات',
                    'صلوات القديسة فوستينا الشخصية',
                    'وعود الرحمة الإلهية'
                ],
                type: 'prayer-book',
                content: 'saint-faustina'
            },
            'spiritual-warfare': {
                id: 'spiritual-warfare',
                title: 'Spiritual Warfare Arsenal',
                titleArabic: 'ترسانة الحرب الروحية',
                subtitle: 'Complete Protection & Deliverance Guide',
                subtitleArabic: 'دليل الحماية والتحرير الكامل',
                icon: 'fas fa-sword',
                color: '#B22222',
                description: 'Comprehensive collection of prayers for spiritual protection, breaking curses, deliverance from evil, and victory in spiritual battles.',
                descriptionArabic: 'مجموعة شاملة من الصلوات للحماية الروحية وكسر اللعنات والتحرر من الشر والانتصار في المعارك الروحية.',
                features: [
                    'Deliverance from demonic possession',
                    'Breaking black magic and curses',
                    'Protection from evil eye',
                    'Saint Michael prayers',
                    'Comprehensive spiritual cleansing'
                ],
                featuresArabic: [
                    'التحرر من المس الشيطاني',
                    'كسر السحر الأسود واللعنات',
                    'الحماية من العين الحاسدة',
                    'صلوات القديس ميخائيل',
                    'التطهير الروحي الشامل'
                ],
                type: 'prayer-book',
                content: 'spiritual-warfare'
            },
            'maronite-prayers': {
                id: 'maronite-prayers',
                title: 'Maronite Prayer Treasury',
                titleArabic: 'كنز الصلوات المارونية',
                subtitle: 'Eastern Christian Liturgical Prayers',
                subtitleArabic: 'الصلوات الليتورجية المسيحية الشرقية',
                icon: 'fas fa-cross',
                color: '#CD853F',
                description: 'Traditional Maronite Church prayers, liturgical texts, and Syriac-Aramaic spiritual heritage.',
                descriptionArabic: 'صلوات الكنيسة المارونية التقليدية والنصوص الليتورجية والتراث الروحي السرياني الآرامي.',
                features: [
                    'Traditional Maronite liturgy',
                    'Syriac-Aramaic prayers',
                    'Eastern Christian traditions',
                    'Saint Maron devotions',
                    'Lebanese Christian heritage'
                ],
                featuresArabic: [
                    'الليتورجيا المارونية التقليدية',
                    'الصلوات السريانية الآرامية',
                    'التقاليد المسيحية الشرقية',
                    'تكريسات القديس مارون',
                    'التراث المسيحي اللبناني'
                ],
                type: 'prayer-book',
                content: 'maronite'
            },
            'daily-prayers': {
                id: 'daily-prayers',
                title: 'Daily Prayer Companion',
                titleArabic: 'رفيق الصلاة اليومية',
                subtitle: 'Morning, Noon, Evening & Night Prayers',
                subtitleArabic: 'صلوات الصباح والظهر والمساء والليل',
                icon: 'fas fa-sun',
                color: '#FFA500',
                description: 'Essential daily prayers for every Christian, organized by time of day with traditional and contemporary options.',
                descriptionArabic: 'الصلوات اليومية الأساسية لكل مسيحي، منظمة حسب أوقات اليوم مع خيارات تقليدية ومعاصرة.',
                features: [
                    'Morning offering prayers',
                    'Midday reflection prayers',
                    'Evening thanksgiving',
                    'Night prayers before sleep',
                    'Meal blessing prayers'
                ],
                featuresArabic: [
                    'صلوات تقدمة الصباح',
                    'صلوات تأمل منتصف النهار',
                    'شكر المساء',
                    'صلوات الليل قبل النوم',
                    'صلوات بركة الطعام'
                ],
                type: 'prayer-book',
                content: 'daily-prayers'
            }
        };
    }

    createLibraryUI() {
        // Check if library already exists
        if (document.getElementById('prayer-library')) {
            return;
        }

        const libraryHTML = `
            <section class="section" id="prayer-library">
                <div class="container">
                    <div class="section-header" data-aos="fade-up">
                        <div class="section-badge">مكتبة الصلوات</div>
                        <h2 class="section-title">مكتبة الصلاة المقدسة</h2>
                        <p class="section-description">
                            ادخل إلى مجموعتنا الكاملة من كتب الصلاة والأدلة الروحية والأدوات التفاعلية. 
                            كل كتاب يحتوي على صلوات وتكريسات وموارد روحية مختارة بعناية لرحلتك مع المسيح.
                        </p>
                    </div>

                    <!-- Library Showcase -->
                    <div class="library-showcase">
                        <div class="showcase-header">
                            <h3><i class="fas fa-book-open"></i> مجموعة الصلوات الاحترافية</h3>
                            <p>اضغط على أي كتاب للوصول إلى محتواه الكامل والميزات التفاعلية</p>
                        </div>

                        <div class="books-grid" id="books-grid">
                            <!-- Books will be populated here -->
                        </div>
                    </div>

                    <!-- Featured Book Display -->
                    <div class="featured-book" id="featured-book" style="display: none;">
                        <div class="featured-book-content">
                            <button class="close-book-btn" id="close-book-btn">
                                <i class="fas fa-times"></i>
                            </button>
                            <div class="book-header">
                                <div class="book-icon">
                                    <i id="featured-book-icon"></i>
                                </div>
                                <div class="book-info">
                                    <h3 id="featured-book-title"></h3>
                                    <h4 id="featured-book-title-arabic"></h4>
                                    <p id="featured-book-subtitle"></p>
                                    <p id="featured-book-subtitle-arabic"></p>
                                </div>
                            </div>
                            <div class="book-description">
                                <p id="featured-book-description"></p>
                                <p id="featured-book-description-arabic"></p>
                            </div>
                            <div class="book-features">
                                <h5>الميزات:</h5>
                                <div class="features-columns">
                                    <ul id="featured-book-features"></ul>
                                    <ul id="featured-book-features-arabic"></ul>
                                </div>
                            </div>
                            <div class="book-actions">
                                <button class="btn btn-primary" id="open-book-btn">
                                    <i class="fas fa-book-open"></i> افتح الكتاب
                                </button>
                                <button class="btn btn-secondary" id="preview-book-btn">
                                    <i class="fas fa-eye"></i> معاينة
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Book Content Display -->
                    <div class="book-content-display" id="book-content-display" style="display: none;">
                        <div class="book-content-header">
                            <button class="back-to-library-btn" id="back-to-library-btn">
                                <i class="fas fa-arrow-left"></i> العودة للمكتبة
                            </button>
                            <div class="book-title-display">
                                <h3 id="content-book-title"></h3>
                                <p id="content-book-subtitle"></p>
                            </div>
                        </div>
                        <div class="book-content-area" id="book-content-area">
                            <!-- Book content will be loaded here -->
                        </div>
                    </div>
                </div>
            </section>
        `;

        // Insert the library into the root container
        const libraryRoot = document.getElementById('prayer-library-root');
        if (libraryRoot) {
            libraryRoot.innerHTML = libraryHTML;
            this.populateBooksGrid();
            this.bindLibraryEvents();
        } else {
            console.warn('Prayer Library Root element not found!');
        }
    }

    populateBooksGrid() {
        const booksGrid = document.getElementById('books-grid');
        if (!booksGrid) return;

        let booksHTML = '';

        Object.values(this.books).forEach(book => {
            booksHTML += `
                <div class="book-card" data-book-id="${book.id}" data-aos="fade-up" data-aos-delay="100">
                    <div class="book-cover" style="border-color: ${book.color};">
                        <div class="book-icon" style="color: ${book.color};">
                            <i class="${book.icon}"></i>
                        </div>
                        <div class="book-spine" style="background: ${book.color};"></div>
                    </div>
                    <div class="book-info">
                        <h4 class="book-title">${book.titleArabic}</h4>
                        <p class="book-subtitle">${book.subtitleArabic}</p>
                        <div class="book-type-badge ${book.type}">
                            ${book.type === 'interactive' ? 'أداة تفاعلية' : 'كتاب صلاة'}
                        </div>
                    </div>
                    <div class="book-actions">
                        <button class="btn-book-primary" onclick="prayerLibrary.openBook('${book.id}')">
                            <i class="fas fa-book-open"></i> فتح
                        </button>
                        <button class="btn-book-secondary" onclick="prayerLibrary.previewBook('${book.id}')">
                            <i class="fas fa-eye"></i> معاينة
                        </button>
                    </div>
                </div>
            `;
        });

        booksGrid.innerHTML = booksHTML;
    }

    bindLibraryEvents() {
        // Close book button
        const closeBookBtn = document.getElementById('close-book-btn');
        if (closeBookBtn) {
            closeBookBtn.addEventListener('click', () => this.closeFeaturedBook());
        }

        // Open book button
        const openBookBtn = document.getElementById('open-book-btn');
        if (openBookBtn) {
            openBookBtn.addEventListener('click', () => {
                if (this.currentBook) {
                    this.openBookContent(this.currentBook);
                }
            });
        }

        // Preview book button
        const previewBookBtn = document.getElementById('preview-book-btn');
        if (previewBookBtn) {
            previewBookBtn.addEventListener('click', () => {
                if (this.currentBook) {
                    this.previewBookContent(this.currentBook);
                }
            });
        }

        // Back to library button
        const backToLibraryBtn = document.getElementById('back-to-library-btn');
        if (backToLibraryBtn) {
            backToLibraryBtn.addEventListener('click', () => this.backToLibrary());
        }

        // Book card click events
        const bookCards = document.querySelectorAll('.book-card');
        bookCards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.book-actions')) {
                    const bookId = card.getAttribute('data-book-id');
                    this.previewBook(bookId);
                }
            });
        });
    }

    previewBook(bookId) {
        const book = this.books[bookId];
        if (!book) return;

        this.currentBook = bookId;

        // Populate featured book display
        document.getElementById('featured-book-icon').className = book.icon;
        document.getElementById('featured-book-title').textContent = book.titleArabic;
        document.getElementById('featured-book-title-arabic').style.display = 'none'; // Hide duplicate
        document.getElementById('featured-book-subtitle').textContent = book.subtitleArabic;
        document.getElementById('featured-book-subtitle-arabic').style.display = 'none'; // Hide duplicate
        document.getElementById('featured-book-description').textContent = book.descriptionArabic;
        document.getElementById('featured-book-description-arabic').style.display = 'none'; // Hide duplicate

        // Populate features
        const featuresEn = document.getElementById('featured-book-features');
        const featuresAr = document.getElementById('featured-book-features-arabic');

        featuresEn.innerHTML = '';
        featuresAr.innerHTML = book.featuresArabic.map(feature => `<li>${feature}</li>`).join('');

        // Show featured book
        document.getElementById('featured-book').style.display = 'block';
        document.getElementById('featured-book').scrollIntoView({ behavior: 'smooth' });
    }

    openBook(bookId) {
        console.log(`Opening book: ${bookId}`);

        // Map library IDs to HTML section IDs if they differ
        const sectionMap = {
            'divine-mercy-daily': 'divine-mercy-section',
            'holy-rosary': 'holy-rosary-section',
            'saint-anthony': 'saint-anthony-section',
            'saint-faustina': 'saint-faustina-section',
            'spiritual-warfare': 'spiritual-warfare-section',
            'daily-prayers': 'daily-prayers-section',
            'maronite-prayers': 'maronite-prayers-section'
        };

        const targetId = sectionMap[bookId] || `${bookId}-section`;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Hide Library
            const libraryRoot = document.getElementById('prayer-library-root');
            if (libraryRoot) libraryRoot.style.display = 'none';

            // Show Target Section
            targetSection.style.display = 'block';

            // Add 'Back to Library' button if not present
            if (!targetSection.querySelector('.back-to-library-btn')) {
                const backBtn = document.createElement('button');
                backBtn.className = 'btn btn-secondary back-to-library-btn';
                backBtn.innerHTML = '<i class="fas fa-arrow-right"></i> عودة للمكتبة';
                backBtn.style.marginBottom = '20px';
                backBtn.onclick = () => {
                    targetSection.style.display = 'none';
                    if (libraryRoot) libraryRoot.style.display = 'block';
                    // Scroll to library
                    libraryRoot.scrollIntoView({ behavior: 'smooth' });
                };

                // Insert at top of section
                targetSection.insertBefore(backBtn, targetSection.firstChild);
            }

            // Scroll to section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Initialize internal scripts if needed (most handled by prayer-book-script.js)
            if (window.showPrayerSection) {
                // Try to notify legacy script if needed, or just let it be
            }

        } else {
            console.warn(`Section ${targetId} not found, falling back to generator.`);
            // Fallback to old generator if section is missing
            const book = this.books.find(b => b.id === bookId);
            if (book) {
                this.container.innerHTML = this.generateBookViewer(book);
                this.setupBookNavigation(book);
            }
        }
    }

    openBookContent(bookId) {
        const book = this.books[bookId];
        if (!book) return;

        this.currentBook = bookId;

        // Update content header
        document.getElementById('content-book-title').textContent = book.titleArabic;
        document.getElementById('content-book-subtitle').textContent = book.subtitleArabic;

        // Load book content
        this.loadBookContent(book);

        // Show content display
        document.getElementById('featured-book').style.display = 'none';
        document.getElementById('book-content-display').style.display = 'block';
        document.getElementById('book-content-display').scrollIntoView({ behavior: 'smooth' });
    }

    loadBookContent(book) {
        const contentArea = document.getElementById('book-content-area');
        if (!contentArea) return;

        let content = '';

        switch (book.content) {
            case 'divine-mercy':
                content = this.generateDivineMercyContent();
                break;
            case 'rosary':
                content = this.generateRosaryContent();
                break;
            case 'saint-anthony':
                content = this.generateDefaultContent(book);
                break;
            case 'saint-faustina':
                content = this.generateDefaultContent(book);
                break;
            case 'spiritual-warfare':
                content = this.generateSpiritualWarfareContent();
                break;
            case 'maronite':
                content = this.generateDefaultContent(book);
                break;
            case 'daily-prayers':
                content = this.generateDefaultContent(book);
                break;
            default:
                content = this.generateDefaultContent(book);
        }

        contentArea.innerHTML = content;
    }

    generateDivineMercyContent() {
        return `
            <div class="book-content">
                <div class="book-chapter">
                    <h3><i class="fas fa-heart"></i> صلوات الرحمة الإلهية اليومية</h3>
                    
                    <div class="prayer-section">
                        <h5>صلاة الرحمة الإلهية</h5>
                        <div class="prayer-text">
                            <p>"يا يسوع، إني أثق بك. يا دم وماء، اللذان تدفقا من قلب يسوع كينبوع رحمة لنا، إني أثق بكما!"</p>
                        </div>
                    </div>

                    <div class="prayer-section">
                        <h5>صلاة الساعة الثالثة (ساعة الرحمة)</h5>
                        <div class="prayer-text">
                            <p>"لقد فارقت الحياة يا يسوع، لكن ينبوع الحياة تدفق للنفوس، ومحيط الرحمة انفتح للعالم كله. يا ينبوع الحياة، يا رحمة إلهية لا تُسبر، احتوي العالم كله وأفرغ ذاتك علينا."</p>
                        </div>
                    </div>

                    <div class="prayer-section">
                        <h5>مسبحة الرحمة الإلهية</h5>
                        <div class="chaplet-instructions">
                            <p><strong>طريقة تلاوة مسبحة الرحمة الإلهية:</strong></p>
                            <ol>
                                <li>ابدا بعلامة الصليب</li>
                                <li>تلو أبانا الذي، السلام عليك، وقانون الإيمان</li>
                                <li>على الحبات الكبيرة: "أيها الآب الأزلي، إني أقدم لك جسد ابنك الحبيب ودمه ونفسه ولاهوته، تعويضاً عن خطايانا وخطايا العالم أجمع."</li>
                                <li>على الحبات الصغيرة: "بحق آلامه المقدسة، ارحمنا وارحم العالم أجمع."</li>
                                <li>الخاتمة: "الله القدوس، القوي القدوس، الذي لا يموت القدوس، ارحمنا وارحم العالم أجمع." (3 مرات)</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateRosaryContent() {
        return `
            <div class="book-content">
                <div class="book-chapter">
                    <h3><i class="fas fa-pray"></i> المسبحة الوردية المقدسة</h3>
                    
                    <div class="rosary-mysteries">
                        <h5>الأسرار الفرحة (الاثنين والسبت)</h5>
                        <ol>
                            <li>البشارة</li>
                            <li>الزيارة</li>
                            <li>الميلاد</li>
                            <li>التقدمة</li>
                            <li>وجود يسوع في الهيكل</li>
                        </ol>
                    </div>

                    <div class="rosary-mysteries">
                        <h5>الأسرار الحزينة (الثلاثاء والجمعة)</h5>
                        <ol>
                            <li>النزاع في البستان</li>
                            <li>الجلد</li>
                            <li>إكليل الشوك</li>
                            <li>حمل الصليب</li>
                            <li>الصلب</li>
                        </ol>
                    </div>

                    <div class="rosary-mysteries">
                        <h5>الأسرار المجيدة (الأربعاء والأحد)</h5>
                        <ol>
                            <li>القيامة</li>
                            <li>الصعود</li>
                            <li>حلول الروح القدس</li>
                            <li>الانتقال</li>
                            <li>التتويج</li>
                        </ol>
                    </div>

                    <div class="rosary-mysteries">
                        <h5>الأسرار النورانية (الخميس)</h5>
                        <ol>
                            <li>معمودية يسوع</li>
                            <li>عرس قانا</li>
                            <li>إعلان الملكوت</li>
                            <li>التجلي</li>
                            <li>تأسيس الإفخارستيا</li>
                        </ol>
                    </div>
                </div>
            </div>
        `;
    }

    generateSpiritualWarfareContent() {
        return `
            <div class="book-content">
                <div class="book-chapter">
                    <h3><i class="fas fa-sword"></i> صلوات الحرب الروحية</h3>
                    
                    <div class="prayer-section urgent">
                        <h5>صلاة ضد المس الشيطاني</h5>
                        <div class="prayer-text">
                            <p>"باسم يسوع المسيح، أبطل كل سحر وعمل شيطاني موجه ضدي أو ضد عائلتي. بدم المسيح الكريم، أكسر كل قيد وربط شيطاني. يا رب يسوع، أنت الغالب والمنتصر، احمني من كل شر ومكروه. أطرد كل روح شرير باسم يسوع القدوس. لا سلطان للشيطان علي لأنني ملك للمسيح. آمين."</p>
                        </div>
                    </div>

                    <div class="prayer-section">
                        <h5>صلاة القديس ميخائيل رئيس الملائكة</h5>
                        <div class="prayer-text">
                            <p>"القديس ميخائيل رئيس الملائكة، دافع عنا في المعركة، وكن عوناً لنا ضد شر ومكائد إبليس. ليأمره الله، نتوسل إليك بتواضع. وأنت يا أمير الجند السماوي، اطرح الشيطان والأرواح الشريرة الأخرى التي تجول في العالم لإهلاك النفوس، اطرحها إلى جهنم بقوة الله. آمين."</p>
                        </div>
                    </div>

                    <div class="prayer-section">
                        <h5>صلاة الحماية الشاملة</h5>
                        <div class="prayer-text">
                            <p>"أغطي نفسي وعائلتي بدم يسوع المسيح الكريم. أضع صليب المسيح بيني وبين كل شر. أرفض كل لعنة وسحر وعين حاسدة. أطرد كل روح شرير باسم يسوع. أدعو ميخائيل رئيس الملائكة ليحيط بي بجيش السماء. آمين."</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateDefaultContent(book) {
        return `
            <div class="book-content">
                <div class="book-chapter">
                    <h3><i class="${book.icon}"></i> ${book.titleArabic}</h3>
                    
                    <div class="content-placeholder">
                        <p><strong>الوصف:</strong> ${book.descriptionArabic}</p>
                        
                        <h5>الميزات:</h5>
                        <div class="features-list">
                            <div class="features-column">
                                <ul>
                                    ${book.featuresArabic.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                        
                        <div class="coming-soon">
                            <h4><i class="fas fa-construction"></i> المحتوى قريباً</h4>
                            <p>محتوى هذا الكتاب الكامل قيد الإعداد وسيكون متاحاً قريباً.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    closeFeaturedBook() {
        document.getElementById('featured-book').style.display = 'none';
        this.currentBook = null;
    }

    backToLibrary() {
        document.getElementById('book-content-display').style.display = 'none';
        document.getElementById('featured-book').style.display = 'none';
        this.currentBook = null;

        // Scroll back to library
        document.getElementById('prayer-library').scrollIntoView({ behavior: 'smooth' });
    }

    previewBookContent(bookId) {
        // For now, just open the book
        this.openBookContent(bookId);
    }

    showNotification(message, type = 'info') {
        // Use the existing notification system
        if (typeof showNotification === 'function') {
            showNotification(message, type);
        } else {
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }
}

// Initialize the Prayer Library when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Wait a bit for the main site to load
    setTimeout(() => {
        window.prayerLibrary = new PrayerLibrary();
        console.log('✅ Prayer Library loaded and ready');
    }, 1500);
});

// Export for global access
window.PrayerLibrary = PrayerLibrary;