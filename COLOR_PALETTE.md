# Refined Color Palette & Theme Guide

## 🎨 Primary Color Scheme (Based on Logo Colors)

### Main Brand Colors
- **Navy** (`#0B334A`) - Primary brand color from logo, trust, professionalism
- **Navy Light** (`#0F4A6A`) - Lighter shade for hover states and gradients
- **Navy Dark** (`#082530`) - Darker shade for depth and emphasis

### Accent Colors
- **Red** (`#DE3C3A`) - Accent color from logo, urgency, action, call-to-action
- **Red Light** (`#E85A5A`) - Lighter shade for hover states
- **Red Dark** (`#C22A2A`) - Darker shade for depth

### Supporting Colors
- **Emerald-500** (`#10B981`) - Success, growth, positive impact
- **Amber-500** (`#F59E0B`) - Warmth, community, attention
- **Teal-500** (`#14B8A6`) - Freshness, renewal, health
- **Violet-500** (`#8B5CF6`) - Innovation, creativity (used sparingly)

## 🌈 Gradient Combinations

### Primary Gradients (Hero Sections)
```css
from-[#0B334A] via-[#0F4A6A] to-[#0B334A]
from-[#0B334A]/85 via-[#0F4A6A]/75 to-[#0B334A]/85 (with opacity)
```

### Accent Gradients
```css
from-[#0B334A] to-[#0F4A6A]      /* Mission, Trust, Primary Actions */
from-[#0B334A] to-[#DE3C3A]       /* Urgent CTAs, Donations */
from-emerald-500 to-teal-600      /* Impact, Success */
from-amber-500 to-orange-600      /* Warmth, Community */
from-teal-500 to-cyan-600         /* Freshness, Health */
```

### Background Gradients
```css
from-slate-100 via-slate-50 to-slate-100    /* Light backgrounds */
from-gray-50 to-slate-50                     /* Subtle backgrounds */
```

## 🎯 Usage Guidelines

### Text Colors
- **Primary Text**: `text-gray-900` or `text-slate-900` (#0F172A)
- **Secondary Text**: `text-gray-600` or `text-slate-600` (#475569)
- **Muted Text**: `text-gray-500` or `text-slate-500` (#64748B)
- **Links**: `text-[#0B334A]` hover: `text-[#082530]`
- **Accent Links**: `text-[#DE3C3A]` hover: `text-[#C22A2A]`

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



