# Week 5 — Handoff notes (SIS 2 starter design)

## Routes 
Posts list → Single post → Back to all posts
404 → Page not found

## Components - React files
PostCard → src/components/PostCard.tsx
Button → src/components/ui/Button.tsx
Tag → src/components/ui/Tag.tsx

## Button variants  
variant = "primary" | "secondary"

## PostCard layout
direction: vertical
gap: 12px
padding: 16px (space/4)
radius: 8px (radius/md)
width: 320px
height: 386px
border: 1px

## breakpoint change
phone: 1 column, vertically stacked header
desktop: 3 columns, horizontal header

## Tokens (all ten)
color/primary = #1D4ED8
color/on-primary = #FFFFFF
color/text = #1F2937
color/text-muted = #9CA3AF
color/surface = #FFFFFF
color/border = #D1D5DB
space/2 = 8px
space/4 = 16px
space/6 = 24px
radius/md = 8px