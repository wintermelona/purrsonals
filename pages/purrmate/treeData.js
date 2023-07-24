const treeData = {
    "question": "What's your experience with having a cat?", //MAIN QUESTION
    "need": [
        {
            "title": "I never owned a cat", //CHOICE1
            "question": "Which description fits you best?",
            "want": [
                {
                    "title": "I am playful and adventurous!", //DESC
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Coco",
                            "desc": "Coco is a hunter and curious boy. He likes exploring each corners in the house and flexes his hunting agility."
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Kumo",
                            "desc": "Kurmo is a rescued cat who was abandoned by his previous owners when they moved house. He is an incredibly playful and fun-loving companion to have around."
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Stella",
                            "desc": "Stella is a beautiful but curious girl. She always wants to know what’s going on, there’s a good chance she will be one of the first to rub against your leg. She’s really friendly and great with the other cats."
                        }
                    ]
                },
                {
                    "title": "A homebody and chill…", //
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Hiro",
                            "desc": "Hiro, who was rescued as a kitten, may appear a bit aloof at first, but with a little bit of playtime, treats, and attention, you can undoubtedly witness his sweet and playful side emerge."
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Mila",
                            "desc": "Mila was a young mother living rough on the streets while trying to care for her kittens. Now she is a very affectionate girl that loves to stare out the kennel to see what goes on. She’s a very stable character and plays with the other cats."
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Bummy",
                            "desc": "Bummy is a really affectionate cat with beautiful ginger fur. He’s curious and always waiting for people to join him in the cattery for a few cuddles."
                        }
                    ]
                },
                {
                    "title": "Friendly and bubbly.", //
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Marie",
                            "desc": "Marie, who was rescued as a kitten, is incredibly playful and becomes quite excited whenever there's someone around. Her joyful and energetic nature brings a lively and delightful atmosphere"
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Jennie",
                            "desc": "Jennie was once a stray cat who endured the discomfort of fleas before finally being rescued and brought to a shelter. Now, she has transformed into a friendly and affectionate companion who always follows you around."
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Kupa",
                            "desc": "Our charming Kupa is an absolute delight to have around. He is incredibly sweet and always seems to want cuddles and engage in little chats with you. "
                        }
                    ]
                }
            ]
        },

        {
            "title": "I have had cat for almost my whole life!", //CHOICE2
            "question": "Which description fits you best?",
            "want": [
                {
                    "title": "I am playful and adventurous!", //DESC
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Miracel",
                            "desc": "Miracel is a precious and adorable kitten who appeared near the shelter seemingly out of nowhere.  This little adventurer fearlessly explores her surroundings, always on the lookout for new exciting things to discover."
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Karen",
                            "desc": "Karen, the stray cat near the PUP Main campus, had endured tough times, including a serious eye injury. However, thankfully her injury has now healed, showcasing her resilience and strength as a true fighter. "
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Fiona",
                            "desc": "Fiona, a playful and sweet senior female cat who embodies the essence of charm and gentleness. Despite her age, Bella's spirit remains vibrant and youthful, bringing joy and laughter to everyone she encounters"
                        }

                    ]
                },
                {
                    "title": "A homebody and chill…", //
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Lucho",
                            "desc": "Meet Lucho, the purrfect homebody and a fantastic companion, a young and charming boy cat with a heart of gold."
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Oliver",
                            "desc": "Oliver is a remarkable young boy cat with a heartwarming spirit despite his disability. He appreciates the tranquility of indoor living."
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Goodie",
                            "desc": "Goodie is a gentle and affectionate cat which makes him an excellent companion for all ages, and he readily adapts to the rhythm of his family's life."
                        }
                    ]
                },
                {
                    "title": "Friendly and bubbly.", //
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Jessie",
                            "desc": "Say hi to Jessie! A cat with infectious energy that brightens up every home. He is a joy to be around and will light up your life with his playful and enthusiastic demeanor."
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Kaira",
                            "desc": "Kaira is a fabulously young lady with the golden eyes we’ve ever seen. She was rescued locally and most likely she was abandoned. She warms up to regular visitors and then turns out to be very friendly."
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Brusco",
                            "desc": "Brusco is ready to add a burst of happiness and enthusiasm to your life, and with him by your side, every day is sure to be filled with cuddles and delight!"
                        }
                    ]
                },
                
            ]
        },

        {
            "title": "I just recently got my first cat", //CHOICE3
            "question": "I want to address...",
            "want": [
                {
                    "title": "I am playful and adventurous!", //DESC
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Martha",
                            "desc": "Martha's gentle purrs, adventurous spirit with the heart of a true hunter will fill your home sense joy and harmony. "
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Zild",
                            "desc": "Zild a courageous and playful cat who faces the challenges of skin rashes and diseases with unwavering spirit. Despite his health struggles, Zild's heart remains filled with joy and curiosity"
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Julie",
                            "desc": "Julie thrives on the thrill of the hunt, she equally delights in being a sweet buddy."
                        }
                    ]
                },
                {
                    "title": "A homebody and chill…", //
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Poporo",
                            "desc": "Poporo is a friendly but quiet cat. He is calm but likes to be left alone most of the time. Yet, he’s curious so you see him sunning himself in a nice high up shelf, his favourite spot, quite a lot."
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Snorlax",
                            "desc": "Snorlax the ultimate sleepy and food-loving cat, whose gentle and soft nature will melt your heart. He's basically in need of constant food supplies xd. "
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Tina",
                            "desc": "Our little Tina knows how to enjoy life to the full. She likes sitting just like this in a quiet spot where nobody bothers her. She’s a friendly cat that enjoys a cuddle."
                        }
                    ]
                },
                {
                    "title": "Friendly and bubbly.", //
                    "question": "What is your main reason for adopting a cat?",
                    "type": [
                        {
                            "title": "To have great house companions.",
                            "suggestion": "Tutoy",
                            "desc": "Tutoy, an orange tabby ready for a fur-ever home. He wants to be an indoor cat with a house to hide in, high places to climb and poles to scratch."
                        },
                        {
                            "title": "To help cats in need.",
                            "suggestion": "Camilla",
                            "desc": "Camilla was a stray kitten. She had a serious eye injury unfortunatel vets could no longer save her eye, but she’s now a healthy little girl with a zest for life."
                        },
                        {
                            "title": "To have a sweet buddy.",
                            "suggestion": "Peanut",
                            "desc": "Peanut is one of the sweetest cats around. She will happily cuddle up to you when you visit the cattery and she will stay around until you leave."
                        }
                    ]
                }
            ]
        }
    ]
}

export default treeData