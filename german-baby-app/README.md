# 🇩🇪 German Baby Learning App 👶

An interactive web application to help you learn German phrases to use with your baby during their developmental journey from 0-24 months.

## 📱 Progressive Web App (PWA)

**This app works offline and can be installed on your phone!**

- ✅ Install to home screen like a native app
- ✅ Works completely offline (no internet needed)
- ✅ Fast loading from cache
- ✅ All progress saved locally
- ✅ Works on iPhone, Android, and desktop

👉 **[See installation instructions](./INSTALL-ON-PHONE.md)** for iPhone and Android

## Features

### 📚 Comprehensive Content
- **720+ German phrases** organized across 15 topic categories
- **15 traditional German lullabies** with full lyrics and translations
- Phrases and lullabies tailored to each developmental stage (0-24 months)
- Topics include:
  - Greetings & Affection
  - Sleep & Waking
  - Eating & Drinking
  - Playing & Activities
  - Body Parts
  - Emotions & Feelings
  - Weather & Nature
  - Daily Routines
  - Colors & Shapes
  - Numbers & Counting
  - Animals
  - Clothing & Dressing
  - Hygiene & Care
  - Transportation
  - Family

### 🎴 Interactive Flash Cards
- **Click to flip** cards between English and German
- Beautiful color-coded cards by topic
- Pronunciation guides for every phrase
- Context information for when to use each phrase
- **Related vocabulary** appears on card backs with age-appropriate words
  - Example: "Did the apple taste good?" shows related fruits (banana, strawberry, pear)
  - Vocabulary automatically filters based on baby's selected age

### 📊 Progress Tracking
- Mark phrases as "learned" with checkbox
- Visual progress bar showing your learning journey
- Progress automatically saved to browser localStorage

### ⭐ Favorites System
- Star your favorite phrases for quick access
- Filter to show only favorited phrases
- Favorites persist across sessions

### 🎵 German Lullabies
- **15 traditional German lullabies** with authentic lyrics
- Complete English translations for every verse
- Detailed pronunciation guides (toggle on/off)
- Multi-verse navigation
- Lullabies aligned with learning topics (sleep, animals, weather, etc.)
- Age-appropriate filtering

### 🗑️ Phrase Management
- **Delete/hide phrases** you're not interested in
- Hidden phrases completely filtered from view
- **Restore deleted phrases** anytime via "Show Deleted" toggle
- All preferences saved to localStorage

### 🔍 Smart Filtering
- **Month selector**: See phrases appropriate for your baby's age
- **Topic filter**: Focus on specific categories
- **Search**: Find phrases by English or German text
- **Favorites filter**: Quick access to starred phrases
- **Lullabies toggle**: Switch between phrases and lullabies view

### 🎨 Beautiful Design
- Smooth flip animations on cards
- Gradient backgrounds
- Responsive layout (works on mobile, tablet, and desktop)
- Color-coded topics for easy visual identification

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

## 📖 Documentation

### Quick Links
- **[📖 USER GUIDE](./USER-GUIDE.md)** - Complete how-to guide with examples
- **[📱 Install on Phone](./INSTALL-ON-PHONE.md)** - iOS and Android installation
- **[🎨 Icon Setup](./public/ICON-SETUP.md)** - Create app icons

## How to Use

### Quick Start
1. **Select Your Baby's Age**: Click on the appropriate month range (0-3, 3-6, 6-9, etc.)
2. **Browse Phrases**: Scroll through the cards showing phrases suitable for that age
3. **Filter by Topic**: Click topic buttons to focus on specific categories
4. **Flip Cards**: Click any card to see the German translation and pronunciation
5. **Mark Progress**: Click the checkbox (⬜/✅) to mark phrases you've learned
6. **Save Favorites**: Click the star (☆/⭐) to favorite phrases for quick access
7. **Search**: Use the search bar to find specific phrases
8. **Toggle Lullabies**: Click 🎵 to switch to lullabies view

👉 **For detailed instructions, examples, and tips, see the [USER-GUIDE.md](./USER-GUIDE.md)**

## Adding New Phrases

The app is designed to be easily extensible! To add new phrases:

1. Open `src/data/phrases.json`
2. Add your new phrase to the `phrases` array following this format:

```json
{
  "id": 121,
  "english": "Where are we going?",
  "german": "Wo gehen wir hin?",
  "pronunciation": "voh GAY-en veer HIN",
  "topic": "routines",
  "startMonth": 15,
  "context": "Before leaving the house",
  "relatedVocabulary": [
    {
      "english": "Park",
      "german": "Park",
      "pronunciation": "PARK",
      "minMonth": 15
    },
    {
      "english": "Store",
      "german": "Geschäft",
      "pronunciation": "geh-SHEFT",
      "minMonth": 18
    }
  ]
}
```

### Field Explanations:
- **id**: Unique number (increment from the last phrase)
- **english**: The English phrase
- **german**: The German translation
- **pronunciation**: Phonetic pronunciation guide (use CAPS for stressed syllables)
- **topic**: Must match one of the topic IDs (greetings, sleep, eating, playing, body, emotions, weather, routines, colors, numbers, animals, clothing, hygiene, transport, family)
- **startMonth**: The developmental month when this phrase becomes relevant (0-24)
- **context**: Brief description of when to use this phrase
- **relatedVocabulary** (optional): Array of related words that expand the phrase's vocabulary
  - Each item has: english, german, pronunciation, and minMonth (minimum age to show)
  - Only vocabulary appropriate for baby's current age is displayed
  - Example: "Did the apple taste good?" includes related fruits (banana, strawberry, blueberry, etc.)

### Adding New Topics

To add a new topic category:

1. Open `src/data/phrases.json`
2. Add to the `topics` array:

```json
{
  "id": "newTopic",
  "name": "New Topic Name",
  "icon": "🎯",
  "color": "bg-emerald-100"
}
```

Available Tailwind color options: `bg-pink-100`, `bg-blue-100`, `bg-green-100`, `bg-yellow-100`, `bg-purple-100`, `bg-orange-100`, `bg-cyan-100`, `bg-indigo-100`, `bg-rose-100`, `bg-teal-100`, `bg-amber-100`, `bg-lime-100`, `bg-sky-100`, `bg-red-100`, `bg-violet-100`, `bg-emerald-100`

## Project Structure

```
german-baby-app/
├── src/
│   ├── components/
│   │   ├── MonthSelector.jsx    # Month range selector
│   │   ├── TopicFilter.jsx      # Topic filtering buttons
│   │   ├── PhraseCard.jsx       # Flip card component
│   │   └── ProgressBar.jsx      # Learning progress display
│   ├── data/
│   │   └── phrases.json         # All phrases and topics
│   ├── App.jsx                  # Main app component
│   ├── index.css                # Tailwind styles
│   └── main.jsx                 # App entry point
├── public/                       # Static assets
├── index.html                    # HTML template
└── package.json                  # Dependencies
```

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling and animations
- **LocalStorage** - Progress persistence

## Tips for Learning

1. **Start Early**: Even newborns benefit from hearing language
2. **Be Consistent**: Use the same phrases regularly
3. **Context Matters**: Use phrases in appropriate situations
4. **Repeat Often**: Babies learn through repetition
5. **Make it Fun**: Use animated gestures and facial expressions
6. **Don't Stress**: Language learning should be enjoyable for both of you!

## Progressive Learning

The app is designed to introduce concepts gradually:
- Topics introduced in early months (e.g., "Mama" at month 6)
- Same topics expanded in later months (e.g., "Grandma" at month 10)
- Complexity increases with developmental stage
- You can always review earlier phrases

## Contributing

Feel free to add more phrases, improve translations, or enhance features!

## License

This project is open source and available for personal use.

---

Made with ❤️ for your baby's language learning journey
