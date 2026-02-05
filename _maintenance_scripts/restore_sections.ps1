
$path = "c:\Users\coman\OneDrive\Desktop\1.25.2026 christian website\index.html"
$content = Get-Content $path -Raw -Encoding UTF8

$anthonyContent = @'
                <!-- Saint Anthony Section -->
                <div class="prayer-section" id="saint-anthony-section" style="display: none;">
                    <div class="section-header">
                        <h3><i class="fas fa-shield-alt"></i> Saint Anthony the Great</h3>
                        <h4>القديس أنطونيوس الكبير</h4>
                    </div>
                    <div class="prayer-cards-grid">
                        <!-- Saint Anthony Prayer -->
                        <div class="prayer-card">
                            <div class="prayer-header">
                                <i class="fas fa-shield-alt card-icon"></i>
                                <h5>Prayer to Saint Anthony</h5>
                                <h6>صلاة للقديس أنطونيوس</h6>
                            </div>
                            <div class="prayer-text">
                                <p><strong>English:</strong></p>
                                <p>"Saint Anthony the Great, father of monks and warrior against demons, you who
                                    conquered Satan in the desert, intercede for us with the Lord. Teach us how to fight
                                    temptations and resist evil. Protect us from the snares of the devil and his
                                    helpers. Amen."</p>
                                <p><strong>Arabic - العربية:</strong></p>
                                <p>"يا قديس أنطونيوس الكبير، أبا الرهبان ومحارب الشياطين، يا من انتصرت على إبليس في
                                    البرية، اشفع لنا عند الرب. علمنا كيف نحارب التجارب ونقاوم الشر. احمنا من مكائد
                                    الشيطان وأعوانه. آمين."</p>
                            </div>
                        </div>
                        <!-- Desert Fathers Wisdom -->
                        <div class="prayer-card">
                            <div class="prayer-header">
                                <i class="fas fa-mountain card-icon"></i>
                                <h5>Desert Fathers Wisdom</h5>
                                <h6>حكمة آباء البرية</h6>
                            </div>
                            <div class="prayer-text">
                                <p><strong>Spiritual Guidance:</strong></p>
                                <p>"A time is coming when men will go mad, and when they see someone who is not mad,
                                    they will attack him, saying, 'You are mad; you are not like us.'" - Saint Anthony
                                </p>
                                <p><strong>الإرشاد الروحي:</strong></p>
                                <p>"سيأتي زمان يجن فيه الناس، وعندما يرون شخصاً لم يجن، سيهاجمونه قائلين: 'أنت مجنون؛
                                    لست مثلنا.'" - القديس أنطونيوس</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Spiritual Warfare Section -->
                <div class="prayer-section" id="spiritual-warfare-section" style="display: none;">
                    <div class="section-header">
                        <h3><i class="fas fa-sword"></i> Spiritual Warfare Arsenal</h3>
                        <h4>ترسانة الحرب الروحية</h4>
                    </div>
                    <div class="prayer-cards-grid">
                        <!-- Saint Michael Prayer -->
                        <div class="prayer-card urgent">
                            <div class="prayer-header">
                                <i class="fas fa-angel card-icon"></i>
                                <h5>Saint Michael the Archangel</h5>
                                <h6>القديس ميخائيل رئيس الملائكة</h6>
                            </div>
                            <div class="prayer-text">
                                <p><strong>English:</strong></p>
                                <p>"Saint Michael the Archangel, defend us in battle. Be our protection against the
                                    wickedness and snares of the devil. May God rebuke him, we humbly pray. And do thou,
                                    O Prince of the heavenly host, by the power of God, cast into hell Satan and all the
                                    evil spirits who prowl about the world seeking the ruin of souls. Amen."</p>
                                <p><strong>Arabic - العربية:</strong></p>
                                <p>"القديس ميخائيل رئيس الملائكة، دافع عنا في المعركة، وكن عوناً لنا ضد شر ومكائد إبليس.
                                    ليأمره الله، نتوسل إليك بتواضع. وأنت يا أمير الجند السماوي، اطرح الشيطان والأرواح
                                    الشريرة الأخرى التي تجول في العالم لإهلاك النفوس، اطرحها إلى جهنم بقوة الله. آمين."
                                </p>
                            </div>
                        </div>
                        <!-- Protection Prayer -->
                        <div class="prayer-card urgent">
                            <div class="prayer-header">
                                <i class="fas fa-shield card-icon"></i>
                                <h5>Comprehensive Protection</h5>
                                <h6>الحماية الشاملة</h6>
                            </div>
                            <div class="prayer-text">
                                <p><strong>English:</strong></p>
                                <p>"I cover myself and my family with the precious Blood of Jesus Christ. I place the
                                    Cross of Christ between me and all evil. I reject every curse, spell, and evil eye.
                                    I cast out every evil spirit in the name of Jesus. I call upon Michael the Archangel
                                    to surround me with the army of heaven. Amen."</p>
                                <p><strong>Arabic - العربية:</strong></p>
                                <p>"أغطي نفسي وعائلتي بدم يسوع المسيح الكريم. أضع صليب المسيح بيني وبين كل شر. أرفض كل
                                    لعنة وسحر وعين حاسدة. أطرد كل روح شرير باسم يسوع. أدعو ميخائيل رئيس الملائكة ليحيط
                                    بي بجيش السماء. آمين."</p>
                            </div>
                        </div>
                        <!-- Deliverance Prayer -->
                        <div class="prayer-card urgent">
                            <div class="prayer-header">
                                <i class="fas fa-cross card-icon"></i>
                                <h5>Deliverance from Evil</h5>
                                <h6>التحرر من الشر</h6>
                            </div>
                            <div class="prayer-text">
                                <p><strong>English:</strong></p>
                                <p>"In the name of Jesus Christ, I break every curse and demonic work directed against
                                    me or my family. By the precious Blood of Christ, I break every demonic bond and
                                    binding. Lord Jesus, You are the Victor and Conqueror, protect me from all evil and
                                    harm. I cast out every evil spirit in the name of Holy Jesus. Satan has no power
                                    over me because I belong to Christ. Amen."</p>
                                <p><strong>Arabic - العربية:</strong></p>
                                <p>"باسم يسوع المسيح، أبطل كل سحر وعمل شيطاني موجه ضدي أو ضد عائلتي. بدم المسيح الكريم،
                                    أكسر كل قيد وربط شيطاني. يا رب يسوع، أنت الغالب والمنتصر، احمني من كل شر ومكروه.
                                    أطرد كل روح شرير باسم يسوع القدوس. لا سلطان للشيطان علي لأنني ملك للمسيح. آمين."</p>
                            </div>
                        </div>
                    </div>
                </div>

'@

$targetMarker = '<div class="prayer-section" id="daily-prayers-section" style="display: none;">'
$idx = $content.IndexOf($targetMarker)

if ($idx -ge 0) {
    Write-Host "Found insertion point at index $idx. Injecting content..."
    $newContent = $content.Insert($idx, $anthonyContent)
    $newContent | Set-Content $path -Encoding UTF8 -NoNewline
    Write-Host "Successfully injected missing sections."
}
else {
    Write-Host "Error: Insertion point not found."
}
