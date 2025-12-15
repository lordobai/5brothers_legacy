# Refined Color Palette & Theme Guide

## 🎨 Primary Color Scheme

### Main Brand Colors
- **Indigo-600** (`#2563EB`) - Primary brand color, trust, professionalism
- **Blue-600** (`#2563EB`) - Secondary brand color, energy
- **Indigo-700** (`#1E40AF`) - Darker shade for depth

### Accent Colors
- **Violet-500** (`#8B5CF6`) - Innovation, creativity
- **Emerald-500** (`#10B981`) - Success, growth, positive impact
- **Amber-500** (`#F59E0B`) - Warmth, community, attention
- **Teal-500** (`#14B8A6`) - Freshness, renewal, health

## 🌈 Gradient Combinations

### Primary Gradients (Hero Sections)
```css
from-indigo-600 via-blue-600 to-indigo-700
from-indigo-900/85 via-blue-800/75 to-indigo-900/85 (with opacity)
```

### Accent Gradients
```css
from-indigo-500 to-blue-600      /* Mission, Trust */
from-violet-500 to-purple-600     /* Vision, Innovation */
from-emerald-500 to-teal-600      /* Impact, Success */
from-amber-500 to-orange-600      /* Warmth, Community */
from-teal-500 to-cyan-600         /* Freshness, Health */
```

### Background Gradients
```css
from-indigo-50 via-blue-50 to-violet-50    /* Light backgrounds */
from-gray-50 to-blue-50                     /* Subtle backgrounds */
```

## 🎯 Usage Guidelines

### Text Colors
- **Primary Text**: `text-gray-900` or `text-charcoal` (#1F2937)
- **Secondary Text**: `text-gray-600` or `text-slate-600` (#475569)
- **Muted Text**: `text-gray-500` or `text-slate-500` (#64748B)
- **Links**: `text-indigo-600` hover: `text-indigo-700`

### Background Colors
- **White**: Pure white for cards and main content
- **Light Gray**: `bg-gray-50` or `bg-slate-50` for subtle backgrounds
- **Colored Backgrounds**: Use gradient backgrounds for sections
- **Card Backgrounds**: White with subtle borders

### Icon Colors
- **Primary Icons**: Use gradient backgrounds with white icons
- **Accent Icons**: Match icon color to section theme
- **Neutral Icons**: Gray-600 for secondary elements

## 🎨 Component Color Mapping

### Buttons
- **Primary**: `bg-indigo-600` hover: `bg-indigo-700`
- **Secondary**: `bg-white` with `border-indigo-600` and `text-indigo-600`
- **Outline**: Transparent with `border-indigo-600`

### Cards
- **Background**: White (`bg-white`)
- **Border**: `border-gray-100` or `border-gray-200`
- **Hover**: Enhanced shadow and slight elevation

### Badges/Tags
- **Success**: `bg-emerald-100 text-emerald-700`
- **Info**: `bg-blue-100 text-blue-700`
- **Warning**: `bg-amber-100 text-amber-700`
- **Primary**: `bg-indigo-100 text-indigo-700`

## 🌟 Theme Variations

### Professional Theme (Default)
- Primary: Indigo/Blue
- Accents: Violet, Emerald
- Mood: Trustworthy, Professional, Modern

### Warm Theme (Alternative)
- Primary: Amber/Orange
- Accents: Red, Yellow
- Mood: Welcoming, Community-focused

### Cool Theme (Alternative)
- Primary: Teal/Cyan
- Accents: Blue, Green
- Mood: Fresh, Health-focused

## 📐 Color Accessibility

All color combinations meet WCAG AA standards:
- **Contrast Ratios**: Minimum 4.5:1 for text
- **Focus States**: High contrast borders/rings
- **Error States**: Red-500 with sufficient contrast

## 🎨 Implementation

Colors are defined in:
1. `app/globals.css` - CSS variables
2. `tailwind.config.ts` - Tailwind color extensions
3. Components use Tailwind classes for consistency


