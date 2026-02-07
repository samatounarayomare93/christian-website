// Bible Data - Multilingual Support
const BIBLE_DATA = {
    emotions: {
        anxious: {
            label_en: "Anxious",
            label_ar: "قلق",
            verses: [
                {
                    ref: "Philippians 4:6-7",
                    text_en: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
                    text_ar: "لا تهتموا بشيء، بل في كل شيء بالصلاة والدعاء مع الشكر، لتعلم طلباتكم لدى الله."
                },
                {
                    ref: "Matthew 6:34",
                    text_en: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
                    text_ar: "فلا تهتموا للغد، لأن الغد يهتم بما لنفسه. يكفي اليوم شره."
                },
                {
                    ref: "1 Peter 5:7",
                    text_en: "Cast all your anxiety on him because he cares for you.",
                    text_ar: "ملقين كل همكم عليه، لأنه هو يعتني بكم."
                }
            ]
        },
        afraid: {
            label_en: "Afraid",
            label_ar: "خائف",
            verses: [
                {
                    ref: "Psalm 23:4",
                    text_en: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
                    text_ar: "أيضا إذا سرت في وادي ظل الموت لا أخاف شرا، لأنك أنت معي."
                },
                {
                    ref: "Isaiah 41:10",
                    text_en: "So do not fear, for I am with you; do not be dismayed, for I am your God.",
                    text_ar: "لا تخف لأني معك. لا تتلفت لأني إلهك."
                },
                {
                    ref: "Psalm 27:1",
                    text_en: "The Lord is my light and my salvation—whom shall I fear?",
                    text_ar: "الرب نوري وخلاصي، ممن أخاف؟ الرب حصن حياتي، ممن أرتعب؟"
                }
            ]
        },
        lonely: {
            label_en: "Lonely",
            label_ar: "وحيد",
            verses: [
                {
                    ref: "Joshua 1:9",
                    text_en: "Be strong and courageous... for the Lord your God will be with you wherever you go.",
                    text_ar: "تشدد وتشجع... لأن الرب إلهك معك حيثما تذهب."
                },
                {
                    ref: "Matthew 28:20",
                    text_en: "And surely I am with you always, to the very end of the age.",
                    text_ar: "وها أنا معكم كل الأيام إلى انقضاء الدهر."
                },
                {
                    ref: "Psalm 68:6",
                    text_en: "God sets the lonely in families.",
                    text_ar: "الله مسكن المتوحدين في بيت."
                }
            ]
        },
        sad: {
            label_en: "Sad",
            label_ar: "حزين",
            verses: [
                {
                    ref: "Psalm 34:18",
                    text_en: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
                    text_ar: "قريب هو الرب من المنكسري القلوب، ويخلص المنسحقي الروح."
                },
                {
                    ref: "Revelation 21:4",
                    text_en: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.",
                    text_ar: "وسيمسح الله كل دمعة من عيونهم، والموت لا يكون في ما بعد، ولا يكون حزن ولا صراخ ولا وجع."
                },
                {
                    ref: "Matthew 5:4",
                    text_en: "Blessed are those who mourn, for they will be comforted.",
                    text_ar: "طوبى للحزانى، لأنهم يتعزون."
                }
            ]
        },
        thankful: {
            label_en: "Thankful",
            label_ar: "ممتن",
            verses: [
                {
                    ref: "1 Thessalonians 5:18",
                    text_en: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
                    text_ar: "اشكروا في كل شيء، لأن هذه هي مشيئة الله في المسيح يسوع من جهتكم."
                },
                {
                    ref: "Psalm 107:1",
                    text_en: "Give thanks to the Lord, for he is good; his love endures forever.",
                    text_ar: "احمدوا الرب لأنه صالح، لأن إلى الأبد رحمته."
                },
                {
                    ref: "James 1:17",
                    text_en: "Every good and perfect gift is from above.",
                    text_ar: "كل عطية صالحة وكل موهبة تامة هي من فوق."
                }
            ]
        },
        lost: {
            label_en: "Lost",
            label_ar: "تائه",
            verses: [
                {
                    ref: "Proverbs 3:5-6",
                    text_en: "Trust in the Lord with all your heart... and he will make your paths straight.",
                    text_ar: "توكل على الرب بكل قلبك... وهو يقوم سبلك."
                },
                {
                    ref: "Psalm 32:8",
                    text_en: "I will instruct you and teach you in the way you should go.",
                    text_ar: "أعلمك وأرشدك الطريق التي تسلكها."
                },
                {
                    ref: "Luke 19:10",
                    text_en: "For the Son of Man came to seek and to save the lost.",
                    text_ar: "لأن ابن الإنسان قد جاء لكي يطلب ويخلص ما قد هلك."
                }
            ]
        },
        hope: {
            label_en: "Need Hope",
            label_ar: "محتاج للأمل",
            verses: [
                {
                    ref: "Jeremiah 29:11",
                    text_en: "For I know the plans I have for you... plans to give you hope and a future.",
                    text_ar: "لأني عرفت الأفكار التي أنا مفتكر بها عنكم... لأعطيكم آخرة ورجاء."
                },
                {
                    ref: "Romans 15:13",
                    text_en: "May the God of hope fill you with all joy and peace as you trust in him.",
                    text_ar: "وليملأكم إله الرجاء كل سرور وسلام في الإيمان."
                },
                {
                    ref: "Hebrews 11:1",
                    text_en: "Now faith is confidence in what we hope for and assurance about what we do not see.",
                    text_ar: "وأما الإيمان فهو الثقة بما يرجى والإيقان بأمور لا ترى."
                }
            ]
        },
        strength: {
            label_en: "Need Strength",
            label_ar: "محتاج للقوة",
            verses: [
                {
                    ref: "Isaiah 40:31",
                    text_en: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
                    text_ar: "وأما منتظرو الرب فيجددون قوة. يرفعون أجنحة كالنسور."
                },
                {
                    ref: "Philippians 4:13",
                    text_en: "I can do all this through him who gives me strength.",
                    text_ar: "أستطيع كل شيء في المسيح الذي يقويني."
                },
                {
                    ref: "Psalm 46:1",
                    text_en: "God is our refuge and strength, an ever-present help in trouble.",
                    text_ar: "الله لنا ملجأ وقوة. عونا في الضيقات وجد شديدا."
                }
            ]
        },
        forgiveness: {
            label_en: "Seeking Forgiveness",
            label_ar: "طلب الغفران",
            verses: [
                {
                    ref: "1 John 1:9",
                    text_en: "If we confess our sins, he is faithful and just and will forgive us our sins.",
                    text_ar: "إن اعترفنا بخطايانا فهو أمين وعادل، حتى يغفر لنا خطايانا."
                },
                {
                    ref: "Psalm 103:12",
                    text_en: "As far as the east is from the west, so far has he removed our transgressions from us.",
                    text_ar: "كبعد المشرق عن المغرب أبعد عنا معاصينا."
                },
                {
                    ref: "Isaiah 1:18",
                    text_en: "Though your sins are like scarlet, they shall be as white as snow.",
                    text_ar: "إن كانت خطاياكم كالقرمز تبيض كالثلج."
                }
            ]
        },
        patience: {
            label_en: "Need Patience",
            label_ar: "محتاج للصبر",
            verses: [
                {
                    ref: "Romans 12:12",
                    text_en: "Be joyful in hope, patient in affliction, faithful in prayer.",
                    text_ar: "فرحين في الرجاء، صابرين في الضيق، مواظبين على الصلاة."
                },
                {
                    ref: "Galatians 6:9",
                    text_en: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
                    text_ar: "فلا نفشل في عمل الخير لأننا سنحصد في وقته إن كنا لا نكل."
                },
                {
                    ref: "Psalm 27:14",
                    text_en: "Wait for the Lord; be strong and take heart and wait for the Lord.",
                    text_ar: "انتظر الرب. ليتشدد وليتشجع قلبك، وانتظر الرب."
                }
            ]
        },
        love: {
            label_en: "Feel Unloved",
            label_ar: "أشعر بعدم الحب",
            verses: [
                {
                    ref: "Romans 8:38-39",
                    text_en: "For I am convinced that... nothing will be able to separate us from the love of God.",
                    text_ar: "فإني متيقن أنه لا... يقدر أن يفصلنا عن محبة الله."
                },
                {
                    ref: "1 John 4:16",
                    text_en: "God is love. Whoever lives in love lives in God, and God in them.",
                    text_ar: "الله محبة، ومن يثبت في المحبة، يثبت في الله والله فيه."
                },
                {
                    ref: "Jeremiah 31:3",
                    text_en: "I have loved you with an everlasting love; I have drawn you with unfailing kindness.",
                    text_ar: "محبة أبدية أحببتك، من أجل ذلك أدمت لك الرحمة."
                }
            ]
        }
    }
};
